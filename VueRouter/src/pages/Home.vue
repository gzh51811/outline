<template>
  <div>
    <!-- 轮播图：推荐商品 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="goods in recommend" :key="goods.goods_id" @click.native.stop="goto(goods.goods_id)">
        <img :src="goods.pic_url">
      </el-carousel-item>
    </el-carousel>

    <img :src="goods.imgurl"/>
    <img src="../assets/img/wenjing.jpg"/>
    <img :src="imgurl"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recommend: [],
      imgurl:'',
      goods:{
        imgurl:'/assets/img/jingjing.png'
      }
    };
  },
  methods: {
    async getCommend() {
      let {
        data: {
          data: { goods }
        }
      } = await this.$juanpi.get("/api/getGoods", {
        params: {
          page: 1,
          zy_ids: "p8_c4_l4_0",
          app_name: "zhe",
          catname: "tab_hpdp",
          flag: "tab_hpdp"
        }
      });

      this.recommend = goods.slice(0, 5);
    },
    goto(id){console.log(id)
        this.$router.push({name:'Goods',params:{id}})
    }
  },
  created() {
    this.getCommend();
    // this.$store.dispatch("getRecommend", 3);
    

    let imgurl = require('../assets/img/zhezhe.jpg');
    this.imgurl = imgurl;
  }
};
</script>
