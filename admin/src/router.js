
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import main from './views/Main.vue'
import cagetoryedit from './views/CagetoryEdit'

import cagetorylist from './views/CagetoryList'
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: main,
            children: [
                { path: '/categories/edit/:id', component: cagetoryedit,props:true },//props:true表示把路径的额外参数传递到组件props里
                { path: '/categories/create', component: cagetoryedit },
                { path: '/categories/list', component: cagetorylist }
            ]
        },

    ]
})