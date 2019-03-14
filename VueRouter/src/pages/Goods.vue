<template>
    <div>
        <h1>{{goodsinfo.goods_title}}</h1>
        <img :src="goodsinfo.goods_pic_url"/>
        <p class="price">原价：<del>{{goodsinfo.oprice}}</del></p>
        <p class="price">现价：<span>{{goodsinfo.sprice}}</span></p>
        <el-button type="success" @click="add2cart">添加到购物车</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            goodsinfo:{}
        }
    },
    watch:{
        $route(to,from){
            console.log('watch:',to,from)
            this.getData()
        }
    },
    methods:{
        async getData(){
            // 如何获取id
            let {id:goods_id} = this.$route.params;

            console.log(this.$route)

            // let {data:{datas}} = await this.$axios.get('https://www.nanshig.com/mobile/index.php',{
            //     params: {
            //         act:'goods',
            //         op:'goods_detail',
            //         goods_id,
            //         key:''
            //     }
            // })
            let {data:{skudata:{info}}} = await this.$axios.get('https://webservice.juanpi.com/api/getMemberAboutInfo',{
                params: {
                    goods_id,
                    // sa_id:20729562,
                    // is_pt_goods:0,
                    // req_coupons_id:119100459
                }
            })

            console.log(info)

            this.goodsinfo = info
        },
        add2cart(){
            // this.$store.state.cartlist.push({
            //     name:'node7',
            //     price:99,
            //     qty:1
            // })

            let {goods_pic_url,goods_title,oprice,sprice} = this.goodsinfo
            let {id:goods_id} = this.$route.params;

            // 获取购物车商品信息
            let currentGoods = this.$store.state.cartlist.filter(item=>item.goods_id===goods_id)[0]
            
            // 判断当前商品是否添加过到购物车
            if(currentGoods){
                // 已添加：数量+1
                this.$store.commit('changeQty',{goods_id,qty:currentGoods.qty+1})
            }else{
                // 未添加过：添加商品
                this.$store.commit('addCartList',{
                    goods_pic_url,
                    goods_title,
                    oprice,
                    sprice,
                    goods_id,
                    qty:1
                })
            }
        }
    },
    mounted(){
        this.getData()

        console.log(this.$store.state.cartlist)
        // this.$store.dispatch('getRecommend',10);
    },
    // beforeRouteUpdate(to,from){
    //     console.log('beforeRouteUpdate',to,from)
    // },
    destroyed(){
        console.log('destroyed');

        clearInterval(this.timer)
    }
}
</script>