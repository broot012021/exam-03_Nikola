<template>
<section class="app-intro">
    <div class="container">
        <h1 class="app-intro__title">
            Enhancing Life
            Excelling in Care
        </h1>
        <h3 class="app-intro__subtitle">
            Choose Wisely. Choose CBD.
        </h3>
        <button class="general-btn">
            Start Shopping
            <span class="general-btn__line">
            </span>
        </button>
        <a href="#" class="app-intro__link">
            See all products
        </a>
    </div>
</section>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style lang="scss">
.app-intro {
    background: url('~@/assets/img/intro/bg-intro.png') no-repeat;
    height: 100vh;
    position: relative;
    top: -80px;
    box-shadow: 0px 180px 110px 0 rgba(1,24,63,0.3) inset;

    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 310px 0 310px 500px;

    }
}

.app-intro__title {
    @include font('oswaldregular', 400, 55px, 15px, $white, uppercase);
    line-height: 75px;
    text-align: right;
    text-shadow: 0px 0px 40px rgba(0,0,0,0.5);
}

.app-intro__subtitle {
    @include font('oswaldlight', 300, 24px, 7px, $white-dark, uppercase);
}
.app-intro__link {
}
</style>
