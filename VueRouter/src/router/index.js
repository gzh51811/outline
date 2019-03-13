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
import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter);

let router = new VueRouter({
    routes:[
        // 首页:当浏览器地址为path路径是时，自动渲染component对应组件
        {
            path:'/',   //重定向：当浏览器url地址为/,自动跳转到/home
            redirect:'/home'
        },
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
            path:'/goods/:id',
            component:Goods,
            //props为true: 等效于<Goods v-bind="{$route.params}"/>
            // props:true,

            //props为Object: 等效于<Goods v-bind="Object"/>
            // props:{username:'laoxie',password:123},

            //props为Object: 等效于<Goods v-bind="Object"/>
            props:function(route){
                return {
                    id:route.params.id,
                    keyword:route.query.keyword
                }
            }
        },
        {
            name:'Cart',
            path:'/cart',
            component:Cart
        },

        // 404
        {
            path:'*',
            component:NotFound
        }
    ]
});

export default router;