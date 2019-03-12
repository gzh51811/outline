<template>
  <div class="goodslist">
    <el-card class="box-card" v-for="goods in goodslist" :key="goods.goods_id">
        <div class="item"  @click="goto(goods.goods_id)">
            <img :src="goods.goods_image_url"/>
            <h4>{{goods.goods_name}}</h4>
            <p>分类：{{goods.store_name}}</p>
            <p class="price">价格：<span>{{goods.goods_price}}</span></p>
        </div>
    </el-card>
  </div>
</template>
<script>
/**
 * axios/fetch
 * 基于promise的ajax请求工具
 */

import axios from "axios";

export default {
  data() {
    return {
      goodslist: []
    };
  },
  methods:{
      goto(id){console.log(id)
          this.$router.push({path:'/goods',query:{id}})
        //   this.$router.push({path:'/goods/'+id})
      }
  },
  created() {
    // axios.get('https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&keyword=&page=10&curpage=1')
    axios
      .get("https://www.nanshig.com/mobile/index.php", {
        params: {
          act: "goods",
          op: "goods_list",
          keyword: "",
          page: 10,
          curpage: 1
        }
      })
      .then(res => {
        console.log(res);
        let data = res.data;
        this.goodslist = data.datas.goods_list;

        console.log(data.datas.goods_list)
      });
  }
};
</script>
<style lang="scss">
.goodslist{
    overflow:hidden;
    .box-card{float:left;width:160px;}
    img{width:160px;}
}
.price{
    span{

        color:#f00;
        &::before{
            content:'￥'
        }
    }
}
</style>
