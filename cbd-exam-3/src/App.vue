<template>
  <div id="app">
    <Header />
    <Intro />
    <About />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Intro from '@/components/Intro.vue';
import About from '@/components/About.vue';

export default {
  name: 'App',
  components: {
    Header,
    Intro,
    About,
  },
};
</script>

<style lang="scss">
</style>
