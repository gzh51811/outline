/**
 * hash路由的原理
 * * 表面：根据hash值的改变来渲染不同的组件
 * * 底层：根据window的hashchange事件来相应不同的组件
 */
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
            name:'Home',
            path:'/home',
            component:Home
        },
        {
            name:'List',
            path:'/list',
            component:List
        },
        {
            name:'Goods',
            path:'/goods',
            component:Goods
        },
        {
            name:'Cart',
            path:'/cart',
            component:Cart
        }
    ]
});

export default router;