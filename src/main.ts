import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/main.scss'; // importer our main stylesheet, it is now available in every component

import BootstrapVue from 'bootstrap-vue';

Vue.config.productionTip = false;

// make use of Bootstrap Vue, can now be used in every componenent
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
