<template>
  <div>
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col" width="15%"><input type="checkbox" v-model="checkAll"/>全选</th>
          <th scope="col" width="10%">#</th>
          <th scope="col" width="65%">待办事项</th>
          <th scope="col" width="10%">操作</th>
        </tr>
      </thead>
      <tbody>
        <todoItem v-for="(item,idx) in doList" :data="item" :index="idx" :key="item.id"/>
      </tbody>
      <tbody v-if="doneList.length>0" style="border:1px solid #58bc58">
        <todoItem v-for="(item,idx) in doneList" :data="item" :index="idx" :key="item.id"/>
      </tbody>
    </table>
  </div>
</template>
<script>
import todoItem from './todoItem.vue';

export default {
  props:['list'],
  //组件配置参数
  data(){
    return {
      checkAll:false
    }
  },
  computed:{
    // 完成
    doneList(){
      return this.list.filter(item=>item.done);
    },
    // 未完成
    doList(){
      return this.list.filter(item=>!item.done);
    }
  },
  components:{
    todoItem
  }
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

</style>


