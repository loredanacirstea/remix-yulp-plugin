<template>
  <v-layout row wrap>
    <v-layout v-for="(fabi, i) in abi" :key="i">
      <v-flex xs12>
        <ContractFunction
          :abi="fabi"
          :address="address"
          :txGasLimit="txGasLimit"
          :txValue="txValue"
        />
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import ContractFunction from './ContractFunction';

export default {
  components: { ContractFunction },
  props: ['abi', 'address', 'txGasLimit', 'txValue'],
};

</script>
