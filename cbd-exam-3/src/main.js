import Vue from 'vue';
import '@/assets/styles/general.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/styles/fonts.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
