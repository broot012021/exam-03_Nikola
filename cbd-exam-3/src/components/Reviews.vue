<template>
<section class="app-reviews">
<vueper-slides
:bullets="false">
    <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image">
        <template #content>
            <div class="review">
                <div class="review__rating">
                    <svg
                    version="1.2"
                    baseProfile="tiny-ps"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 15" width="16" height="15">
                        <title>1</title>
                        <path
                        id="1"
                        class="review__star"
                        d="M15.29 5.11L10.89 4.7C10.61 4.67 10.37 4.5 10.25
                        4.24L8.68 0.45C8.42 -0.17 7.53 -0.17 7.27 0.45L5.71
                        4.24C5.61 4.5 5.35 4.67 5.08 4.7L0.67 5.11C0.01 5.17
                        -0.25 5.98 0.24 6.42L3.56 9.31C3.78 9.49 3.86 9.77 3.8
                        10.04L2.8 14.09C2.65 14.73 3.35 15.25 3.93 14.91L7.6
                        12.78C7.84 12.64 8.13 12.64 8.37 12.78L12.05 14.91C12.63
                        15.25 13.32 14.74 13.17 14.09L12.19 10.04C12.12 9.77
                        12.21 9.49 12.43 9.31L15.75 6.42C16.23 5.98 15.95 5.17
                        15.29 5.11Z" />
                    </svg>
                </div>
                <p class="review__text">
                    I have tried another product after using this one successfully,
                    and I am Back for good! The flavour, the lightness of the oil
                    and the health benefits I have gotten with this oil are amazing!
                </p>
                <span class="review__author">
                    <span class="general-btn__line review__line">
                    </span>
                    Mark J.
                </span>
            </div>
        </template>
    </vueper-slide>
</vueper-slides>
</section>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'Reviews',
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    slides: [
      {
        image: require('@/assets/img/reviews/img1.jpg'),
      },
      {
        image: ('https://klike.net/uploads/posts/2019-11/1572612050_1.jpg'),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.vueperslide {
    box-shadow: 0px 0px 0px 400px rgba(27, 31, 10, 0.6) inset;
    display: flex;
    justify-content: center;
    align-items: center;
}

.vueperslides__track-inner {
    height: 800px;
}

.vueperslides__arrows {
    margin-top: -50px;
}

.review {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__star {
        fill: $green-rating;
    }

    &__text {
        @include font('oswaldlight', 300, 22px, 4px, $white, null);
        line-height: 40px;
        text-align: center;
        margin: 40px 0 30px;
    }

    &__author {
        @include font('oswaldregular', 400, 24px, 5px, $white, uppercase);
        text-align: center;
        position: relative;
    }

    &__line {
        left: -65px;
    }
}
</style>
