<template>
<div>
    <button v-for="page in pages" @click="currentPage=page">{{page}}</button>
    <!-- 动态组件 -->
    <keep-alive include="List">
        <component :is="currentPage"></component>
    </keep-alive>
</div>
</template>
<script>
import Home from './dynamicHome.vue';
import List from './dynamicList.vue';
import Goods from './dynamicGoods.vue';
export default {
    data(){
        return {
            pages:['Home','List','Goods'],
            currentPage:'Home'
        }
    },
    components:{
        Home,
        List,
        Goods
    }
}
</script>
