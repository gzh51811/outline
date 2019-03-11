<template>
    <button>
        <header>
            <slot name="title" :title="title"></slot>
        </header>
        <!-- slot组件这里用来承载组件内容 -->
        <!-- 默认插槽 default -->
        <slot></slot>

        <!-- 具名插槽 -->
        <footer>
            <slot name="eng"></slot>
        </footer>
    </button>
</template>
<script>
export default {
    data(){
        return {
            title:'高级开发工程师'
        }
    }
}
</script>
<style lang="scss">

</style>

