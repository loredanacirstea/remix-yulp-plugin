<template>
  <v-flex xs12 style="padding-left: 35px;">
    <v-flex xs10 v-if="compiled.errors">
      <h3>Errors</h3>
      {{compiled.errors.map(v => v.formattedMessage || v.message)}}
    </v-flex>
    <v-flex xs10 v-if="compiled.yul">
      <h3>Yul Code</h3>
      <div>
        <v-textarea
          v-model="compiled.yul"
          rows="25"
          style="width: 100%; padding: 10px;"
        ></v-textarea>
      </div>
    </v-flex>
    <v-flex xs10 v-if="compiled.evm">
      <h3>(<small>{{Math.round(compiled.evm.bytecode.object.length / 2)}} bytes</small>)</h3>
      <v-textarea
        v-model="compiled.evm.bytecode.object"
        rows="5"
        style="margin-top: 10px; border: 0px;"
      ></v-textarea>
      <v-textarea
        v-model="compiled.evm.bytecode.opcodes"
        rows="5"
        style="margin-top: 20px; border: 0px; margin-bottom: 40px;"
      ></v-textarea>
    </v-flex>
  </v-flex>
</template>

<script>

export default {
  props: ['compiled'],
};

</script>
