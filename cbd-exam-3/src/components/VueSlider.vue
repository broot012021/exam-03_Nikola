<template>
<vueper-slides
  class="no-shadow"
  :visible-slides="3"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 4"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
  <vueper-slide
  v-for="i in 5"
  :key="i">
  <template #content>
    <slot />
  </template>
  </vueper-slide>
</vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'VueSlides',
  components: {
    VueperSlides,
    VueperSlide,
  },
};

</script>
