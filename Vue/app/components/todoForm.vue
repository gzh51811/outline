<template>
  <header>
    <div class="input-group">
      <input type="text" class="form-control" v-model="keyword" ref="keyword" @keyup.13="add">
      <div class="input-group-append">
        <button class="btn btn-success" @click="add">添加+</button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data(){
    return {
      keyword:''
    }
  },
  methods:{
    add(e){
      if(this.keyword.length<=0) return;
      this.$root.$emit('additem',this.keyword);

      // 清空并自动获得焦点
      this.keyword = '';
      this.$refs.keyword.focus();
    }
  }
};
</script>
