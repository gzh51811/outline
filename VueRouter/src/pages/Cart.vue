<template>
    <div>
        购物车

        <div>
            {{$store.state.cartlist}}
        </div>
        <br><br>
        <div>
            {{$store.getters.lt1k}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    mounted(){
        console.log(this.$store)
    }
}
</script>