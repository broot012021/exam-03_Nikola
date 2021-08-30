<template>
<div class="tabs">
    <ul class="tabs-list">
      <li
        class="tabs-list__item"
        :class="{'tabs-list__item--active': i === active}"
        @click="changeTab(i)"
        v-for="(label, i) in tabs.labels"
        :key="i"
      >{{label}}</li>
    </ul>
    <div class="tabs-container" ref="container">
      <div class="tabs-wrapper" ref="wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
const debounce = require('lodash.debounce');

export default {
  name: 'VueTabs',
  computed: {
    active() {
      return this.tabs.active;
    },
  },
  data() {
    return {
      tabs: {
        labels: [],
        items: [],
        active: 0,
      },
    };
  },
  methods: {
    setHeight() {
      const el = this.tabs.items[this.active];
      const height = el.scrollHeight;
      this.$refs.container.style.height = `${height} + px`;
    },
    scrollWrapper() {
      const { wrapper } = this.$refs;
      const offset = 100 * this.active;
      wrapper.style.transform = `translate3d(-${offset}%, 0, 0)`;
    },
    changeTab(i) {
      this.tabs.active = i;
      this.setHeight();
      this.scrollWrapper();
    },
  },
  provide() {
    return {
      tabs: this.tabs,
    };
  },
  mounted() {
    this.setHeight();
    this.scrollWrapper();
    this.debounce = debounce(this.setHeight, 50);
    window.addEventListener('resize', this.debounce);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.debounce);
  },
};

</script>

<style lang="scss">

</style>
