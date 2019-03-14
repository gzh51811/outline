<template>
    <div>
        商品详情
        <img :src="goodsinfo.goods_image"/>
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

            let {data:{datas}} = await this.$axios.get('https://www.nanshig.com/mobile/index.php',{
                params: {
                    act:'goods',
                    op:'goods_detail',
                    goods_id,
                    key:''
                }
            })

            console.log(datas)

            this.goodsinfo = datas
        },
        add2cart(){
            // this.$store.state.cartlist.push({
            //     name:'node7',
            //     price:99,
            //     qty:1
            // })

            this.$store.commit('addCartList',{
                name:'node7',
                price:99,
                qty:1
            })
        }
    },
    mounted(){console.log('mounted')
        this.getData()

        this.timer = setInterval(()=>{
            console.log('interval')
        },2000);

        this.$store.dispatch('getRecommend',10);
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