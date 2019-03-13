<template>
    <div>
        商品详情
        <img :src="goodsinfo.goods_image"/>

        {{$route.parmas.id}} - {{id}}
        
    </div>
</template>
<script>
export default {
    props:['id'],
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
        }
    },
    mounted(){console.log('mounted')
        this.getData()
    },
    beforeRouteUpdate(to,from){
        console.log('beforeRouteUpdate',to,from)
    }
}
</script>