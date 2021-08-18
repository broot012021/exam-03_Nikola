import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/mixin.scss';
import './assets/styles/fonts.scss';
import './assets/styles/normalize.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
