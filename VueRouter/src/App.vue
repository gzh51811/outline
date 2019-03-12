<template>
    <div class="home">
        <el-menu :default-active="activeIndex+''" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item :index="idx+''" v-for="(nav,idx) in navs" :key="nav.name">
                <router-link :to="nav.path">{{nav.text}}</router-link>
            </el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>

</template>
<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI)

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
    methods:{
        handleSelect(index,path){
            console.log(index,path);

            this.activeIndex = index;
        }
    },

    // 注意：在数据挂载前修改数据，解决报错问题
    created(){
        this.navs.forEach(item=>{
            // Vue.set(item,'path','/'+item.name.toLowerCase())
            item.path = '/'+item.name.toLowerCase()
        })
    }
}
</script>

