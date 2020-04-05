import Vue from 'vue';
import Vuex from 'vuex';

import {createIframeClient} from '@remixproject/plugin';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    remixclient: createIframeClient(),
    compiler: {},
    contractName: '',
    source: '',
    compiled: {},
  },
  mutations: {
    setState(state, {field, data}) {
      state[field] = data;
    },
  },
  actions: {
    setCompiled({commit}, compiled) {
      commit('setState', {field: 'compiled', data: compiled});
    },
  },
});
