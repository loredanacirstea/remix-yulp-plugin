<template>
  <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="no-swipe">
        <v-container class="nopadd">
          <v-layout row wrap class="nomarg">
            <v-flex xs7 class="text-xs-left">
              <v-btn
                icon
                class="body-2"
                @click="onGitHub"
              >
                <v-icon small>fa-info</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs4 class="text-xs-right">
              <v-btn
                flat
                class="nav next body-2"
                slot="button-next"
                @click="onSwiperNext"
              >
                <v-icon small>fa-chevron-right</v-icon>
                <span class="text-none" style="padding-left:6px">Deploy</span>
              </v-btn>
            </v-flex>
            <v-flex xs12>
              <Compile @onCompile="onCompile"/>
            </v-flex>
          </v-layout>
        </v-container>
      </swiper-slide>
      <swiper-slide class="no-swipe" style="margin-left: 25px;">
        <v-container class="nopadd">
          <v-layout row wrap>
            <v-flex xs6 class="text-xs-left">
              <v-btn
                flat
                class="nav prev body-2"
                slot="button-prev"
                @click="onSwiperPrev"
              >
                <v-icon small>fa-chevron-left</v-icon>
                <span class="text-none" style="padding-left:6px">Compile</span>
              </v-btn>
            </v-flex>
            <v-flex xs4 class="text-xs-right">
              <v-btn
                flat
                class="nav next body-2"
                @click="onCompile"
              >
                <v-icon small>fa-sync</v-icon>
                <span class="text-none" style="padding-left:6px">Recompile</span>
              </v-btn>
            </v-flex>
            <v-flex xs12>
              <Deploy/>
            </v-flex>
          </v-layout>
        </v-container>
      </swiper-slide>
  </swiper>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import yulp from 'yulp';
import wrapper from 'solc/wrapper';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import Compile from '../components/Compile';
import Deploy from '../components/Deploy';
import { repoLink } from '../config';
import { abiBuildSigsTopics } from '../utils/abiExtractYulp';

Vue.use(VueAwesomeSwiper);

const solc = wrapper(window.Module);
const solcData = yulsource => JSON.stringify({
  language: 'Yul',
  sources: { 'input.yul': { content: yulsource } },
  settings: {
    outputSelection: { '*': { '*': ['*'], '': ['*'] } },
    optimizer: { enabled: true, details: { yul: true } },
  },
});

export default {
  components: {
    Compile,
    Deploy,
  },
  data() {
    return {
      swiperOptions: {
        noSwiping: true,
        noSwipingClass: 'no-swipe',
        loop: false,
        slidesPerView: 'auto',
        initialSlide: 0,
      },
      currentSlide: 0,
      github: repoLink,
    };
  },
  computed: mapState({
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    compiled: state => state.compiled,
    source: state => state.source,
  }),
  mounted() {
    this.setData();
  },
  methods: {
    async setData() {
      await this.$store.state.remixclient.onload();
      this.setRemixFile();
    },
    async setRemixFile() {
      this.$store.dispatch('listenCurrentFile');
      this.$store.dispatch('setCurrentFile');
    },
    onSwiperPrev() {
      this.swiper.slidePrev();
      this.currentSlide--;
    },
    onSwiperNext() {
      this.swiper.slideNext();
      this.currentSlide++;
    },
    onGitHub() {
      window.open(this.github, '_blank');
    },
    onReload() {
      window.location.reload();
    },
    async onCompile() {
      // We make sure that we are compiling the current file state
      await this.$store.dispatch('setCurrentFile');

      const {source} = this;
      let yulpCompiled = null;
      let yulpResult = null;
      let yulpError = null;
      let compiled = {errors: []};

      try {
        yulpCompiled = yulp.compile(source);
        yulpResult = yulp.print(yulpCompiled.results);
      } catch (yulpErrors) {
        yulpError = [yulpErrors];
        compiled.errors = yulpError;
      }
      if (!yulpError) {
        const output = JSON.parse(solc.compile(solcData(yulpResult)));

        if (output.contracts) {
          compiled = Object.values(output.contracts['input.yul'])[0];
        }
        compiled.yul = yulpResult;
        compiled.signatures = yulpCompiled.signatures;
        compiled.topics = yulpCompiled.topics;
        compiled.abi = abiBuildSigsTopics(yulpCompiled.signatures, yulpCompiled.topics);
        compiled.errors = output.errors;
      }

      this.$store.dispatch('setCompiled', compiled);
    },
  },
};

</script>

<style>
.swiper-container {
    height: 100%;
    margin: 0;
    padding: 0;
}
.swiper-slide {
    width: 100%!important;
}
.fullheight, .v-window, .v-window__container {
    height: 100%;
}
.nopadd {
  padding: 0!important;
}
.nomarg {
  margin-left: 0!important;
  margin-right: 0!important;
}
</style>
