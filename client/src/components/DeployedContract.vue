<template>
  <v-flex xs12>
    <v-layout v-for="(fabi, i) in abi" :key="i">
      <v-flex xs12 v-if="fabi.type === 'function'">
        <ContractFunction
          :abi="fabi"
          :address="address"
          :txGasLimit="txGasLimit"
          :txValue="txValue"
        />
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import ContractFunction from './ContractFunction';

export default {
  components: { ContractFunction },
  props: ['abi', 'address', 'txGasLimit', 'txValue'],
};

</script>
