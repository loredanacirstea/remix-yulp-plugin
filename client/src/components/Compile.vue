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
          <span class="text-none" style="padding-left:6px">{{contractName}}</span>
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
    compiler: state => state.compiler,
    compiled: state => state.compiled,
    contractName: state => state.contractName.replace('browser/', ''),
    source: state => state.source,
  }),
  methods: {
    async onCompile() {
      const {source} = this;
      const {remixclient, contractName} = this.$store.state;
      let yulpResult = null;
      let yulpError = null;
      let compiled = {};

      try {
        yulpResult = yulp.print(yulp.compile(source).results);
      } catch (yulpErrors) {
        yulpError = [yulpErrors];
      }

      if (!yulpError) {
        const yulpName = `${contractName.split('.sol')[0]}_yul.sol`;
        await remixclient.fileManager.setFile(yulpName, yulpResult);

        const output = JSON.parse(solc.compile(solcData(yulpResult)));
        console.log('output', output);

        compiled = Object.values(output.contracts['input.yul'])[0];
        compiled.yul = yulpResult;
        compiled.errors = output.errors;
      }
      compiled.errors = yulpError;

      this.$store.dispatch('setCompiled', compiled)
    },
  },
}
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
