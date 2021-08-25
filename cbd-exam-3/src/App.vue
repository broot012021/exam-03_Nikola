<template>
  <div id="app">
    <Header />
    <Intro />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Intro from '@/components/Intro.vue';

export default {
  name: 'App',
  components: {
    Header,
    Intro,
  },
};
</script>

<style lang="scss">
</style>
