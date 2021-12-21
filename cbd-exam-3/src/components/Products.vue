<template>
<section class="app-products">
  <h2 class="app-products__title">
    CBD Featured Products
  </h2>
  <vueper-slides
    class="no-shadow"
    :arrows="true"
    :bullets="false"
    :visible-slides="3"
    slide-multiple
    :gap="3"
    :slide-ratio="1 / 4"
    :dragging-distance="10"
    :breakpoints="{ 1140: { visibleSlides: 2, slideMultiple: 2 },
    576: { visibleSlides: 1, slideMultiple: 1 } }">
  <template #arrow-right>
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 24" width="44" height="24">
      <title>Right</title>
      <path id="Right"
      class="arrow-right"
        d="M41.73 11.35L41.73 11.35L32.64 2.27C32.31 1.89 31.74
        1.84 31.36 2.17C30.97 2.5 30.93 3.07 31.26 3.45C31.29 3.49
        31.32 3.52 31.36 3.55L38.89 11.09L2.91 11.09C2.41 11.09 2
        11.49 2 12C2 12.5 2.41 12.9 2.91 12.9L38.89 12.9L31.36 20.43C30.97
        20.76 30.93 21.33 31.26 21.71C31.58 22.1 32.16 22.14 32.54 21.81C32.57
        21.78 32.61 21.75 32.64 21.71L41.73 12.63C42.08 12.28 42.08 11.71
        41.73 11.35Z" />
  </svg>
  </template>
  <template #arrow-left>
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 24" width="44" height="24">
      <title>Left</title>
      <path
        id="Left"
        class="shp0"
        d="M2.27 11.37L2.27 11.37L11.36 2.33C11.69 1.95 12.26 1.91
        12.64 2.23C13.03 2.56 13.07 3.13 12.74 3.51C12.71 3.54 12.68
        3.57 12.64 3.6L5.11 11.11L41.09 11.11C41.59 11.11 42 11.51
        42 12.01C42 12.51 41.59 12.92 41.09 12.92L5.11 12.92L12.64
        20.41C13.03 20.74 13.07 21.31 12.74 21.68C12.42 22.06 11.84
        22.11 11.46 21.78C11.43 21.75 11.39 21.72 11.36 21.68L2.27
        12.64C1.92 12.29 1.92 11.72 2.27 11.37Z" />
    </svg>
  </template>
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
        <button class="general-btn product-buy__btn">
          Shop
          <span class="general-btn__line">
          </span>
        </button>
      </div>
    </div>
  </template>
  </vueper-slide>
</vueper-slides>
</section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';

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
        image: require('@/assets/img/products/product-1.png'),
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
      {
        title: 'Black ICE CBD Muscle Rub 200 mg',
        price: '49.99',
      },
    ],
  }),
};

</script>

<style lang="scss" scoped>
.app-products {
  background: $white-bg;
  margin-top: -120px;

  &__title {
    @include font('oswaldregular', 400, 30px, 6px, $black-light, uppercase);
    text-align: center;
    margin-bottom: 75px;
  }
}

.product {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: $white;
  border: $green-border 1px solid;

  &__title {
    text-align: center;
  }
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
    cursor: pointer;

    &:hover {
        background: none;
        color: $black-light;
        border: $green-bg 1px solid;
        transition-duration: 0.5s;

        .general-btn__line {
            background: $black-light;
        }
    }
  }
}
</style>
