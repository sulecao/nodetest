import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import Vuex from 'vuex'
import http from './http'
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.prototype.$http = http;
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
