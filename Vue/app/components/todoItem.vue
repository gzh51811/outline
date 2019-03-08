<template>
  <tr>
    <td><input type="checkbox"/></td>
    <td>{{index+1}}</td>
    <td>{{data.text}}</td>
    <td>
        <div class="btn-group btn-group-sm">
            <button class="btn btn-outline-success" :disabled="data.done" @click.stop="complete">完成</button>    
            <button class="btn btn-outline-danger" @click.stop="remove">删除</button>    
        </div>
    </td>
  </tr>
</template>
<script>
export default {
    props:['data','index'],
    methods:{
        remove(){
            this.$root.$emit('deleteitem',this.data.id);
        },
        complete(){
            this.$root.$emit('completeitem',this.data.id);
        }
    }
};
</script>
