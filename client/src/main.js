import Vue from 'vue'
import App from './App'
import router from './router/Index'
import { sync } from 'vuex-router-sync'
import store from './store'
import VueResource from 'vue-resource'
import BackHeader from '@/components/Header'

Vue.config.productionTip = false

Vue.component('back-header', BackHeader)

Vue.use(VueResource)

sync(store, router)
Vue.component('navigationBar', BackHeader)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
