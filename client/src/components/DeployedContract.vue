<template>
  <v-flex xs12>
    <ContractFunction
      :abi="calldataAbi"
      :address="address"
      :txGasLimit="txGasLimit"
      :txValue="txValue"
    />
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
  data() {
    return {
      calldataAbi: {
        name: 'Calldata',
        stateMutability: 'payable',
        calldata: true,
        inputs: [
          {
            name: 'calldata',
            type: 'bytes',
          },
        ],
        outputs: [
          {
            name: 'response',
            type: 'bytes',
          },
        ],
      },
    };
  },
};

</script>
