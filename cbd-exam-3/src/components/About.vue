<template>
<section class="app-about">
    <div class="container">
        <div class="app-about__dignity">
            <h2 class="app-about__dignity-title">
                We are what we are
            </h2>
            <img class="app-about__dignity-logo"
            src="~@/assets/img/about/Logos-1.png" alt="logo">
            <img class="app-about__dignity-logo"
            src="~@/assets/img/about/Logos-2.png" alt="logo">
            <img class="app-about__dignity-logo"
            src="~@/assets/img/about/Logos-3.png" alt="logo">
            <img class="app-about__dignity-logo"
            src="~@/assets/img/about/Logos-4.png" alt="logo">
        </div>
    </div>
    <div class="container-tabs">
    <AboutTabs />
    </div>
</section>
</template>

<script>
import AboutTabs from '@/components/AboutTabs.vue';

export default {
  name: 'About',
  components: {
    AboutTabs,
  },
};
</script>

<style lang="scss">
.app-about {
    background: $white-bg;
    padding-top: 100px;

    .container {
        display: flex;
        justify-content: center;
    }

    .container-tabs {
        max-width: 1170px;
        margin: 0 auto;
        position: relative;
        left: 100px;
    }
}

.app-about__dignity {
    background: url('~@/assets/img/about/Holder.png') no-repeat;
    background-position: center;
    background-size: cover;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(4, auto);
    justify-items: center;
    padding: 40px 70px;
    gap: 20px;

    &-title {
        @include font('oswaldregular', 400, 24px, 5px, $black-light, uppercase);
        grid-column-start: 1;
        grid-column-end: 5;

            @media screen and (max-width: 768px) {
            grid-column-start: 1;
            grid-column-end: 3;
        }
    }

    &-logo {
        margin-right: 30px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, auto);
    }
}
</style>
