<template>
  <v-layout row wrap>
    <v-flex xs3>
      <v-btn
        dark
        @click="runFunction"
        :color="colorMap[abi.stateMutability]"
        class="text-none"
        style="text-transform:none!important;margin-left:5px;"
      >
        {{abi.name}}
      </v-btn>
    </v-flex>
    <v-flex xs5 offset-xs1>
      <v-text-field
        v-if="abi.inputs.length > 0"
        v-model="functionArgs"
        solo
        type="text"
        :placeholder="inputsStr(abi.inputs)"
        :label="inputsStr(abi.inputs)"
        :hint="inputsStr(abi.inputs)"
        :error="errorMessages.length > 0"
        :error-messages="errorMessages"
        @input="argsValueCheck"
        class="body-1"
      ></v-text-field>
    </v-flex>
    <v-flex xs9 style="margin-left:20px;">
      <v-textarea rows="3" v-if="output" v-model="output" style="font-size: 12px;"></v-textarea>
    </v-flex>
  </v-layout>
</template>

<script>
import { getTransaction } from '../utils/ether.js';

export default {
  props: ['abi', 'address', 'txGasLimit', 'txValue'],
  data() {
    return {
      functionArgs: '',
      errorMessages: [],
      output: null,
      colorMap: {
        payable: '#E74C3C',
        view: '#3498DB',
        pure: '#3498DB',
        nonpayable: '#E89F3C',
      }
    };
  },
  methods: {
    inputsStr(inputs) {
      return inputs.map(input => `${input.type} ${input.name}`).join(', ');
    },
    argsValueCheck(value) {
      let parsed = null;
      try {
        parsed = JSON.parse(value);
      } catch (e) {}

      if (!parsed) {
        try {
          parsed = JSON.parse(`[${value}]`);
        } catch (e) {}
      }

      if (!parsed) {
        this.errorMessages = ['Input invalid'];
        return [];
      }

      if (!(parsed instanceof Array)) parsed = [parsed];
      this.errorMessages = [];
      return parsed;
    },
    async runFunction() {
      const {remixclient} = this.$store.state;
      const {
        abi,
        address,
        functionArgs,
        txGasLimit,
        txValue
      } = this;

      const accounts = await remixclient.udapp.getAccounts().catch(console.log);
      const useCall = !abi.stateMutability.includes('payable');
      const data = getTransaction(abi, this.argsValueCheck(functionArgs));

      const transaction = {
        from: accounts[0],
        to: address,
        data,
        gasLimit: txGasLimit,
        value: txValue,
        useCall,
      };
      console.log('transaction', transaction);

      const receipt = await remixclient.udapp.sendTransaction(transaction);
      console.log('receipt', receipt);
      this.output = JSON.stringify(receipt);
    },
  },
};

</script>
