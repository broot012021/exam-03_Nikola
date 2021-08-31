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
          Proponents claim that CBD oil can treat a wide variety
          of health problems, including:
        <ul class="about-tabs__benefits">
          <li>Acne</li>
          <li>Anorexia</li>
          <li>Anxiety</li>
          <li>Chronic pain</li>
          <li>Depression</li>
          <li>Drug addiction and withdrawal</li>
          <li>Epilepsy</li>
          <li>Glaucoma</li>
          <li>High blood pressure</li>
          <li>Insomnia</li>
          <li>Muscle spasms</li>
        </ul>
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
        CBD vs. THC: What's the Difference?
        </h2>
        <p class="about-tabs__text">
          Cannabis is a plant that makes a thick substance full
          of compounds called cannabinoids.
          There are more than 100 of these chemicals in cannabis.
          They cause drug-like reactions in your body.
        </p>
        <p class="about-tabs__text">
          CBD (cannabidiol) and THC (tetrahydrocannabinol)
          are the most common cannabinoids found in cannabis products.
        </p>
        <p class="about-tabs__text">
          THC and CBD are in both marijuana and hemp.
          Marijuana contains much more THC than hemp, while hemp has a lot of CBD.
        </p>
      </div>
      <div>
        <img
        class="about-tabs__img"
        src="~@/assets/img/about/tabs-img-5.png" alt="difference">
        <img
        class="about-tabs__img"
        src="~@/assets/img/about/tabs-img-6.png" alt="cannabinoids">
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
  border-bottom: solid 1px $green-border;
  margin-left: 30px;

  @media screen and (max-width: 960px) {
    justify-content: center;
    gap: 40px;
    width: 95%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    border-bottom: none;
  }
}

.tabs-list__item {
  @include font('oswaldregular', 400, 30px, 6px, $black-light, uppercase);
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 100px;
  padding-bottom: 20px;

  @media screen and (max-width: 960px) {
    margin-right: 20px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    border-bottom: solid 1px $green-border;
  }

  &--active {
  border-bottom: solid 1px $black-light;
  justify-content: center;
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
  transition-duration: 1s;
}

.tab__content {
  flex: 1 0 100%;
  display: flex;
  gap: 200px;
  width: 100%;
  padding: 80px 30px 0;

  @media screen and (max-width: 1320px) {
    gap: 100px;
  }

  @media screen and (max-width: 768px) {
    gap: 0;
  }
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

  @media screen and (max-width: 1320px) {
    height: auto;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
}

.about-tabs__benefits {
  position: relative;
  top: -20px;
  margin-left: 250px;

  @media screen and (max-width: 1320px) {
    top: 0;
    margin-left: 50px;
  }
  &> li {
    list-style-type: square;
  }
}
</style>
