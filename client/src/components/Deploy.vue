<template>
  <div>
    <v-layout row wrap align-baseline style="padding-left: 20px;padding-top: 20px;">
      <v-flex xs2>
        <span class="caption text-xs-center">Gas limit</span>
      </v-flex>
      <v-flex xs8 offset-xs1>
          <v-text-field
            solo
            placeholder="0"
            class="body-1"
          ></v-text-field>
        </v-flex>
      <v-flex xs2>
        <span class="caption text-xs-center">Value</span>
      </v-flex>
      <v-flex xs8 offset-xs1>
        <v-text-field
          solo
          placeholder="0"
          class="body-1"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout v-if="compiled" row wrap style="padding-left: 10px;padding-top: 10px;">
      <v-flex xs11>
        <v-select v-model="contractSelect"
          :items="[contractName]"
          solo
          class="body-1"
        ></v-select>
      </v-flex>
      <v-flex xs3>
        <v-btn dark @click="deploy" color="#E89F3C" style="margin-left:0;">Deploy</v-btn>
      </v-flex>
      <v-flex xs7 offset-xs1>
        <v-text-field
          v-model="deployArgs"
          solo
          placeholder="0"
          class="body-1"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-flex xs3 text-xs-center><p class="caption" style="margin-bottom:3px;">or</p></v-flex>
      </v-flex>
      <v-flex xs3>
        <v-btn dark @click="deploy" color="#4F97D5" style="margin-left:0;">At address</v-btn>
      </v-flex>
      <v-flex xs7 offset-xs1>
        <v-text-field
          v-model="deployAddress"
          solo
          placeholder="Load contract from Address"
          class="body-1"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout v-if="compiled" row wrap style="padding-left: 20px;padding-top: 20px;">
      <v-flex xs4>
        <span class="body-2 text-xs-center grey--text font-weight-bold">Deployed Contracts</span>
      </v-flex>
      <v-flex xs12 v-if="!deployed">
        <span class="caption">Currently you have no contract instances to interact with.</span>
      </v-flex>
    </v-layout>
    <v-layout v-if="!compiled" row wrap style="padding-left: 20px;padding-top: 20px;">
      <v-flex xs12>
        <p>
          No contracts compiled
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {
      contractSelect: null,
      deployArgs: '',
      deployAddress: null,
      deployed: null,
    }
  },
  computed: mapState({
    compiled: state => state.compiled,
    contractName: state => state.contractName.replace('browser/', ''),
  }),
  watch: {
    contractName() {
      this.contractSelect = this.contractName;
    }
  },
  methods: {
    async deploy() {
      const {compiled} = this;
      const {remixclient} = this.$store.state;

      const accounts = await remixclient.udapp.getAccounts().catch(console.log);

      const transaction = {
        from: accounts[0],
        data: compiled.evm.bytecode.object,
        gasLimit: 4000000,
        value: '0',
        useCall: false,
      };
      console.log('transaction', transaction);
      const receipt = await remixclient.udapp.sendTransaction(transaction)
      console.log('receipt', receipt);
    }
  }
}
</script>

<style>
.v-input__slot {
  min-height: 40px;
}
.v-text-field__details {
  height: 0;
}
</style>
