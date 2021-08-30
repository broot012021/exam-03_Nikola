<template>
<div class="tab__content">
    <slot />
</div>
</template>

<script>

export default {
  name: 'VueTab',
  props: ['label', 'active'],
  inject: ['tabs'],
  created() {
    const length = this.tabs.labels.push(this.label);
    if (this.active) {
      this.tabs.active = length - 1;
    }
  },
  mounted() {
    this.tabs.items.push(this.$el);
  },
};
</script>

<style lang="scss">

</style>
