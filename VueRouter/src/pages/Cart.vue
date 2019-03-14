<template>
  <div>
    <ul>
        <li v-for="goods in cartlist" :key="goods.goods_id">
            <img :src="goods.goods_pic_url"/>
            <h4>{{goods.goods_title}}</h4>
            <p class="price"><span>{{goods.sprice}}</span> &times; {{goods.qty}}</p>
            <el-button type="danger" icon="el-icon-delete" @click="remove(goods.goods_id)">删除</el-button>
        </li>
    </ul>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';

export default {
  data() {
    return {};
  },
  computed:{
    //   cartlist(){
    //       return this.$store.state.cartlist
    //   }
    
    ...mapState([
        'cartlist' //映射computed.cartlist为this.$store.state.cartlist
    ])

    // ...{cartlist:this.$store.state.cartlist}
  },
  methods:{
    //   ...mapMutations(['removeGoods'])
    ...mapMutations({
        remove:'removeGoods',
        // remove(commit,payload){
        //     commit('removeGoods',payload)
        // }
    })
  },
  mounted() {
    console.log(this.$store);
  }
};

</script>