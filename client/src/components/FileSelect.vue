<template>
  <v-layout row wrap>
    <v-flex xs9 style="margin-left:35px;">
      <v-select v-model="contractSelect"
        :items="examples"
        solo
        class="body-1"
        item-value="id"
        item-text="name"
        placeholder="Load example contract"
        @change="onSelect"
      ></v-select>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data() {
    return {
      contractSelect: null,
      examples: [
        {
          id: 0,
          name: 'EmptyContract',
          url: 'https://raw.githubusercontent.com/FuelLabs/yulp/master/examples/EmptyContract.yulp',
        },
        {
          id: 1,
          name: 'SimpleStore',
          url: '/examples/SimpleStore.yulp',
        },
        {
          id: 2,
          name: 'ERC20',
          url: '/examples/ERC20.yulp',
        },
      ],
    }
  },
  methods: {
    async onSelect(id) {
      const { remixclient } = this.$store.state;
      const { name, url } = this.examples[id];
      const response = await fetch(url).catch(console.log);
      const source = await response.text().catch(console.log);
      if (!source) return;
      const remixName = `browser/${name}_yulp.sol`;
      await remixclient.fileManager.setFile(remixName, source);
      await remixclient.fileManager.switchFile(remixName);
      await this.$store.dispatch('setCurrentFile', remixName);
    },
  },
};

</script>
