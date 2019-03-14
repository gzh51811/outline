<template>
    <div class="container">
        <el-menu :default-active="activeIndex+''" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item :index="idx+''" v-for="(nav,idx) in navs" :key="nav.name" 
            @click="goto(nav)">
                <!-- <router-link :to="{name:nav.name}" active-class="active" tag="span">{{nav.text}}</router-link> -->
                <el-badge :value="goodsQty" class="item" v-if="nav.name=='Cart'">
                {{nav.text}}
                </el-badge>
                <span v-else>
                    {{nav.text}}
                </span>
            </el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>

</template>
<script>
/**
 * $router：路由实例，具有跳转等方法
 * $route：当前路由信息，保存当前路由的参数
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from "axios";

// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI);

// 把axios设置到Vue的原型对象上，方便在任意组件中使用
Vue.prototype.$axios = axios;

export default {
    data(){
        return {
            navs:[{
                text:'首页',
                name:'Home'
            },
            {
                text:'列表',
                name:'List'
            },
            {
                text:'详情',
                name:'Goods'
            },
            {
                text:'购物车',
                name:'Cart'
            }],
            activeIndex:0
        }
    },
    computed:{
        goodsQty(){
            return this.$store.state.cartlist.length;
        }
    },
    methods:{
        handleSelect(index,path){
            console.log(index,path);

            this.activeIndex = index;
        },
        goto(nav){
            console.log('App:',this);
            this.$router.push({name:nav.name})
            // this.$router.push({path:nav.path})
        }
    },

    // 注意：在数据挂载前修改数据，解决报错问题
    created(){
        this.navs.forEach(item=>{
            // Vue.set(item,'path','/'+item.name.toLowerCase())
            item.path = '/'+item.name.toLowerCase()
        });

        for(let i=0;i<this.navs.length;i++){
            if(this.navs[i].name === this.$route.name){
                this.activeIndex = i;
                break;
            }
        }

       
        
    }
}
</script>

<style>
.active{color:#f00;}
</style>
