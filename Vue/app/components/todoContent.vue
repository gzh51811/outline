<template>
  <div>todoConent+++++++++</div>
</template>
<script>
export default {
    //组件配置参数
};
</script>
<style scoped>
    /*
    这里的样式默认为全局
    设置scoped属性：让这里的样式只在当前组件生效
    原理：
      * 给当前组件的div添加data-xxx自定义属性
      * 利用css的属性选择器实现局部样式
        div[data-xxx]
    */

    div{border:1px solid #f00;margin:10px;}
</style>


