<template>
  <v-flex xs12>
    <v-layout row wrap>
      <v-flex xs10>
        <v-btn
          block dark
          color="#2F3E4E"
          class="body-2 font-weight-medium"
          @click="onCompile"
        >
          <v-icon small left dark>fa-sync</v-icon>
          <span class="text-capitalize">Compile</span>
          <span class="text-none" style="padding-left:6px">{{shortFileName}}</span>
        </v-btn>
      </v-flex>
      <v-flex xs11 v-if="compiled">
        <CompilationDetails :compiled="compiled"/>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex';
import yulp from 'yulp';
import wrapper from 'solc/wrapper';
import CompilationDetails from './CompilationDetails';
import { abiBuildSigsTopics } from '../utils/abiExtractYulp';

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
  components: {CompilationDetails},
  computed: mapState({
    compiled: state => state.compiled,
    shortFileName: state => state.fileName.replace('browser/', ''),
    source: state => state.source,
  }),
  watch: {
    shortFileName() {
      this.onCompile();
    },
  },
  methods: {
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
        console.log('output', output);

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
.greyb {
  background-color: #EDF0F1;
}
.padd {
  padding-left: 20px;
  padding-top: 20px;
}
</style>
