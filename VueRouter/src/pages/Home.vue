<template>
    <div>
        首页
        <!-- 轮播图：推荐商品 -->
    </div>
</template>
<script>
export default {
    created(){
        this.$store.dispatch('getRecommend',3)
    }
}
</script>
