<template>
  <div id="app">
    <Header />
    <Intro />
    <About />
    <Products />
    <Faq />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Intro from '@/components/Intro.vue';
import About from '@/components/About.vue';
import Products from '@/components/Products.vue';
import Faq from '@/components/Faq.vue';

export default {
  name: 'App',
  components: {
    Header,
    Intro,
    About,
    Products,
    Faq,
  },
};
</script>

<style lang="scss">
</style>
