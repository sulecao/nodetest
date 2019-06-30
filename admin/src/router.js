
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import main from './views/Main.vue'
import cagetoryedit from './views/CagetoryEdit'


export default new VueRouter({
    routes:[
    { path: '/', component: main },
    { path: '/cagetoryedit', component: cagetoryedit },
  ]})