import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue'
import List from '../pages/List.vue'
import Goods from '../pages/Goods.vue'
import Cart from '../pages/Cart.vue'

Vue.use(VueRouter);

let router = new VueRouter({
    routes:[
        // 首页:当浏览器地址为path路径是时，自动渲染component对应组件
        {
            path:'/home',
            component:Home
        },
        {
            path:'/list',
            component:List
        },
        {
            path:'/goods',
            component:Goods
        },
        {
            path:'/cart',
            component:Cart
        }
    ]
});

export default router;