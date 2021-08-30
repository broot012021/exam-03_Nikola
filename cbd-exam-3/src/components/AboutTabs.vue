<template>
<VueTabs>
    <VueTab label="what is CBD" :active="true">
      <div>
        <h2 class="about-tabs__title">
        What it is and how it works
      </h2>
      <p class="about-tabs__text">
      CBD is short for cannabidiol.
      It is a phytocannabinoid found in
      hemp and known for supporting the
      body and mind in many ways.* Charlotte’s
      Web products have cannabinoids with CBD extract.
    </p>
    <p class="about-tabs__text">
      Not to be confused with oil from hemp seeds
      (which doesn’t contain cannabinoids),
      CBD comes from the flowers and leaves of the hemp plant.
    </p>
    <p class="about-tabs__text">
      Why does CBD work? The human body has a vast network of receptors,
      the endocannabinoid system.
    </p>
      </div>
      <div>
        <img
        class="about-tabs__img"
        src="~@/assets/img/about/tabs-img-1.png" alt="mountain">
        <img
        class="about-tabs__img"
        src="~@/assets/img/about/tabs-img-2.png" alt="wheat">
      </div>
    </VueTab>
    <VueTab label="benefits">
      <div>
        <h2 class="about-tabs__title">
          Health Benefits
      </h2>
      <p class="about-tabs__text">
      CBD's exact mechanism of action is unclear.
      Unlike THC, CBD has a relatively low affinity for
      cannabinoid receptors in the brain. These are the
      molecules to which THC binds to elicit its psychoactive effects.
    </p>
    <p class="about-tabs__text">
      Instead, CBD is thought to influence other receptors,
      including opioid receptors that regulate pain and glycine
      receptors involved in the regulation of the "feel-good"
      hormone and neurotransmitter serotonin.
    </p>
    <p class="about-tabs__text">
      Proponents claim that CBD oil can treat a wide variety
      of health problems, including:
    </p>
      </div>
      <div>
        <img
        class="about-tabs__img"
        src="~@/assets/img/about/tabs-img-3.png" alt="mountain">
        <img
        class="about-tabs__img"
        src="~@/assets/img/about/tabs-img-4.png" alt="wheat">
      </div>
    </VueTab>
    <VueTab label="our difference">
      <div>
        <h2 class="about-tabs__title">
        What it is and how it works
      </h2>
      <p class="about-tabs__text">
      CBD is short for cannabidiol.
      It is a phytocannabinoid found in
      hemp and known for supporting the
      body and mind in many ways.* Charlotte’s
      Web products have cannabinoids with CBD extract.
    </p>
    <p class="about-tabs__text">
      Not to be confused with oil from hemp seeds
      (which doesn’t contain cannabinoids),
      CBD comes from the flowers and leaves of the hemp plant.
    </p>
    <p class="about-tabs__text">
      Why does CBD work? The human body has a vast network of receptors,
      the endocannabinoid system.
    </p>
      </div>
      <div>
        <img
        class="about-tabs__img"
        src="~@/assets/img/about/tabs-img-1.png" alt="mountain">
        <img
        class="about-tabs__img"
        src="~@/assets/img/about/tabs-img-2.png" alt="wheat">
      </div>
    </VueTab>
</VueTabs>
</template>

<script>
import VueTabs from '@/components/VueTabs.vue';
import VueTab from '@/components/VueTab.vue';

export default {
  name: 'AboutTabs',
  components: {
    VueTabs,
    VueTab,
  },
};

</script>

<style lang="scss">
.tabs {
  margin: 120px auto;
  max-width: 1170px;
}

.tabs-list {
  display: flex;
  height: 40px;
  border-bottom: solid 1px $green-border;
  margin-left: 30px;
}

.tabs-list__item {
  @include font('oswaldregular', 400, 30px, 6px, $black-light, uppercase);
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 100px;
  padding-bottom: 20px;

  &--active {
  border-bottom: solid 1px $black-light;
  }
}

.tabs-container {
  position: relative;
  overflow: hidden;
  will-change: height;
  transition: height .4s cubic-bezier(.86,0,.07,1);
}

.tabs-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  will-change: transform;
  transition: transform .4s cubic-bezier(.86,0,.07,1);
  transition-duration: 2s;
}

.tab__content {
  flex: 1 0 100%;
  display: flex;
  gap: 200px;
  width: 100%;
  padding: 80px 30px 0;
}

.about-tabs__title {
  @include font('oswaldregular', 400, 24px, 5px, $black, uppercase);
  line-height: 40px;
  padding: 40px 0 50px;
}

.about-tabs__text {
  @include font('oswaldlight', 300, 18px, 1px, $green-text, null);
  margin-bottom: 60px;
}

.about-tabs__img {
  margin-bottom: 30px;
}
</style>
