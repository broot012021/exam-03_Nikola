<template>
<section class="app-faq">
    <div class="container">
        <h2 class="app-faq__title">
            Frequently asked questions
        </h2>
        <vsa-list>
            <vsa-item
            v-for="item in listOfItems"
            :key="item.id">
                <vsa-icon>
                    <img
                    class="open"
                    src="~@/assets/img/faq/icon.png"
                    alt="icon">
                    <img
                    class="close"
                    src="~@/assets/img/faq/icon.png"
                    alt="icon">
                </vsa-icon>
                <vsa-heading>
                {{ item.heading}}
                </vsa-heading>
                <vsa-content>
                {{ item.content}}
                </vsa-content>
            </vsa-item>
        </vsa-list>
    </div>
</section>
</template>

<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon,
} from 'vue-simple-accordion';

export default {
  name: 'Faq',
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon,
  },
  data: () => ({
    listOfItems: [
      {
        heading: 'What is Cannabidiol (CBD)?',
        content: 'This is the content',
      },
      {
        heading: 'Is Hemp-Derived Cannabidiol (CBD) Legal?',
        content: 'Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. ',
      },
      {
        heading: 'Are there any negative side effects?',
        content: 'This is the content',
      },
      {
        heading: 'Do you offer a return policy?',
        content: 'This is the content',
      },
    ],
  }),
};
</script>

<style lang="scss">
.app-faq {
    background: $white-bg;
    padding-top: 145px;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__title {
        @include font('oswaldregular', 400, 30px, 6px, $black-light, uppercase);
        margin-bottom: 50px;
        text-align: center;
    }
}

.vsa-list {
  width: 60%;

  @media screen and (max-width: 960px) {
    width: 80%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 30px;
  }
}

.vsa-item__heading {
    border-top: $green-border-faq 1px solid;
}

.vsa-item__trigger {
    @include font('oswaldlight', 300, 18px, 5px, $green-text, null);
    border: none;
    background: none;
    padding: 30px 30px 30px 0;
    display: flex;
    flex-direction: row-reverse;
    cursor: pointer;
    text-align: left;
}

.vsa-item__content {
    @include font('oswaldlight', 300, 18px, 1px, $black, null);
    line-height: 40px;
    border-bottom: $green-border-faq 1px solid;
    padding: 20px 20px 20px 40px;
}

.vsa-item {
  &--is-active {
    .vsa-item__trigger__icon {
      .open {
        display: none;
      }

      .close {
        display: block;
        transform: rotate(45deg);
      }
    }
  }
  &__trigger__icon {
    margin-right: 30px;
    padding: 0;
    height: fit-content;

    .open {
      display: block;
    }

    .close {
      display: none;
    }
  }
}

.vsa-collapse-enter-active,
.vsa-collapse-leave-active {
  transition-property: opacity, height, padding-top, padding-bottom;
  transition-duration: .3s;
  transition-timing-function: ease-in-out}

.vsa-collapse-enter,.vsa-collapse-leave-active {
  opacity: 0;
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  overflow: hidden;
}

</style>
