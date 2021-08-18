<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
  @mixin font($font-family, $font-weight, $font-size, $letter-spacing, $color, $text-transform) {
    font-family: $font-family;
    font-weight: $font-weight;
    font-size: $font-size;
    letter-spacing: $letter-spacing;
    color: $color;
    text-transform: $text-transform;
}
</style>
