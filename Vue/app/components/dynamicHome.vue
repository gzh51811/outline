<template>
    <div class="home">
        <h4>首页</h4>
        <img src="../img/jingjing.png" @click="strongger"/>
    </div>
</template>
<script>
export default {
    methods:{
        strongger(e){
            e.target.style="width:300px"
        }
    }
}
</script>
<style scoped>
    img{width:100px;}
</style>
