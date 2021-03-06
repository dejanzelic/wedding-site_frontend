import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './assets/theme/scss/main.scss';
import i18n from './i18n'
import config from './config.js'
import 'leaflet/dist/leaflet.css';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$appConfig = config
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
