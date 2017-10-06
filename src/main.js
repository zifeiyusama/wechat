import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import { timeAgo } from './filter/index.js'
var VueTouch = require('vue-touch')

Vue.use(VueTouch, {name: 'v-touch'})
Vue.filter('timeAgo', timeAgo);
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
