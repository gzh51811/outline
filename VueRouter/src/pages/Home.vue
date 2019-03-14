<template>
  <div>
    <!-- 轮播图：推荐商品 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="goods in recommend" :key="goods.goods_id" @click.native.stop="goto(goods.goods_id)">
        <img :src="goods.pic_url">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recommend: []
    };
  },
  methods: {
    async getCommend() {
      let {
        data: {
          data: { goods }
        }
      } = await this.$axios.get("https://webservice.juanpi.com/api/getGoods", {
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
  }
};
</script>
