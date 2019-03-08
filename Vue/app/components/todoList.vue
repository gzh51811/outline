<template>
  <div>
    <todoForm></todoForm>
    <todoContent></todoContent>
  </div>
</template>
<script>
// 引入其他模块
import todoForm from './todoForm.vue';
import todoContent from './todoContent.vue';

// 引入样式
import '../css/bootstrap.css';

// 这里只需要编写组件的配置参数
// 但配置参数需要暴露出去：ES module规范
// 如果是通过ES module规范引入的组件，可以不受大小写限制

// ES module规范
// * 引入: import ... from ...
// * 导出：export
export default {
    components: {
        todoForm,
        todoContent
    }
}
</script>
