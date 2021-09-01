<template>
<section class="app-products">
  <h2 class="app-products__title">
    CBD Featured Products
  </h2>
  <vueper-slides
  class="no-shadow"
  :arrows="arrows-outside"
  :bullets="false"
  :visible-slides="3"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 4"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
  <vueper-slide
  v-for="(slide, i) in slides"
  :key="i">
  <template #content>
    <div class="product">
      <div class="product-info">
        <div class="product-info__rating">
        &#9733;
        &#9733;
      </div>
      <h3 class="product-info__title">
        {{ slide.title }}
      </h3>
      <img src="~@/assets/img/products/product-1.png"
      alt="product" class="product-info__img">
      </div>
      <div class="product-buy">
        <div class="product-buy__price">
          {{ slide.price }} USD
        </div>
        <button class="product-buy__btn general-btn">
          Shop
        </button>
      </div>
    </div>
  </template>
  <template #arrow-left>
    <div>L</div>
  </template>
  <template #arrow-right>
    <div>R</div>
  </template>
  </vueper-slide>
</vueper-slides>
</section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'Products',
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    slides: [
      {
        title: 'CBD 500 mg Orange Flavor Tincture',
        image: 'src="~@/assets/img/products/product-1.png"',
        price: '49.99',
      },
      {
        title: 'Black ICE CBD Muscle Rub 200 mg',
        price: '49.99',
      },
      {
        title: 'CBD+Curcumin Coffee 750 mg',
        price: '79.99',
      },
      {
        title: 'Black ICE CBD Muscle Rub 200 mg',
        price: '49.99',
      },
      {
        title: 'Black ICE CBD Muscle Rub 200 mg',
        price: '49.99',
      },
    ],
  }),
};

</script>

<style lang="scss">
.app-products {
  background: $white-bg;

  &__title {
    @include font('oswaldregular', 400, 30px, 6px, $black-light, uppercase);
    text-align: center;
  }
}

.product {
  display: flex;
  flex-direction: column;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: $white;
  border: $green-border 1px solid;
}

.product-buy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $gray;
  border: $gray-border 1px solid;

  &__price {
    @include font('oswaldregular', 400, 18px, 3px, $black-light, uppercase);
    padding-left: 30px;
  }

  &__btn {
    background: $green-bg;
    border: none;
  }
}

</style>
