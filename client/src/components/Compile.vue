<template>
  <v-flex xs12>
    <v-layout row wrap>
      <v-flex xs10>
        <v-btn
          block dark
          color="#2F3E4E"
          class="body-2 font-weight-medium"
          @click="$emit('onCompile')"
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
import CompilationDetails from './CompilationDetails';

export default {
  components: {CompilationDetails},
  computed: mapState({
    compiled: state => state.compiled,
    shortFileName: state => state.fileName.replace('browser/', ''),
  }),
  watch: {
    shortFileName() {
      this.$emit('onCompile');
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
