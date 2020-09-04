import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import * as Helpers from './helpers';

Vue.config.productionTip = false;

Vue.prototype.Helpers = Helpers;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
