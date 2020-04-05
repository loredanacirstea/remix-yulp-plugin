<template>
  <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="no-swipe">
        <v-container class="nopadd">
          <v-layout row wrap>
            <v-flex xs8 class="text-xs-left">
              <v-btn
                icon
                class="body-2"
                @click="onGitHub"
              >
                <v-icon small>fa-info</v-icon>
              </v-btn>
              <v-btn
                icon
                class="body-2"
                @click="onReload"
              >
                <v-icon small>fa-sync</v-icon>
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
              <Compile/>
            </v-flex>
          </v-layout>
        </v-container>
      </swiper-slide>
      <swiper-slide class="no-swipe" style="margin-left: 25px;">
        <v-container class="nopadd">
          <v-layout row wrap>
            <v-flex xs12 class="text-xs-left">
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
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import Compile from '../components/Compile';
import Deploy from '../components/Deploy';

import { repoLink } from '../config';

Vue.use(VueAwesomeSwiper);

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
      const {remixclient} = this.$store.state;

      remixclient.fileManager.on('currentFileChanged', (fileName) => {
        this.setSource(fileName);
      });

      // TODO error notification
      const fileName = await remixclient.fileManager.getCurrentFile().catch(console.log);
      if (fileName) this.setSource(fileName);
    },
    setSource(fileName) {
      if (fileName) {
        this.$store.state.contractName = fileName;
        this.$store.state.remixclient.call('fileManager', 'getFile', fileName)
          .then((source) => {
            this.$store.commit('setState', {field: 'source', data: source});
          });
      }
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
    }
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
</style>
