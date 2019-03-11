<template>
    <div class="list">
        <h4>列表</h4>
        <ul>
            <li v-for="(img,idx) in imgs" @click="check(idx)" :class="{actitve:currentIndex==idx}">
                <img :src="`../img/${img}`"/>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            currentIndex:0,
            imgs:['jingjing.png','lemon.jpg','g3.jpg','malin.jpg','g5.jpg']
        }
    },
    methods:{
        check(idx){
            this.currentIndex = idx;
        }
    }
}
</script>
<style lang="scss">
    ul{list-style:none;padding:0;margin:0;}
    .list{
        ul{
            overflow:hidden;
            li{float:left;border:1px solid #ddd;padding:15px;margin:10px;}
            li.actitve{border-color:#f00;}
            img{width:160px;height:160px;}
        }
    }
</style>