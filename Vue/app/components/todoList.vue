<template>
  <div class="p-3">
    <h1>todoList应用案例</h1>
    <todoForm></todoForm>
    <todoContent :list="list"></todoContent>
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
    data(){
      return {
        list:[
          {
            id:Date.now(),
            text:'明天去东莞',
            done:false,
            selected:false
          },
          {
            id:Date.now()+10,
            text:'晚上大保健',
            done:false,
            selected:false
          }
        ]
      }
    },
    methods:{
      addItem(text){
        let item = {
          id:Date.now(),
          text,
          done:false,
          selected:false
        }
        this.list.push(item);
      },

      // delete
      deleteItem(id){
        for(let i=0;i<this.list.length;i++){
          if(this.list[i].id == id){
            this.list.splice(i,1);
            break;
          }
        }
      },

      completeItem(id){
        for(let i=0;i<this.list.length;i++){
          if(this.list[i].id == id){
            this.list[i].done = true;
            break;
          }
        }
      },

      selectItem(idx){
        this.list[idx].selected = true;
      }
      
    },
    components: {
        todoForm,
        todoContent
    },

    // 生命周期函数
    mounted(){
      this.$root.$on('additem',this.addItem);
      this.$root.$on('deleteitem',this.deleteItem);
      this.$root.$on('completeitem',this.completeItem);
      this.$root.$on('selectitem',this.selectItem);
    }
}
</script>
