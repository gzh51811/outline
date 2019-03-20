<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <img :src="imgurl"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return {
      imgurl:''
    }
  },
  components: {
    HelloWorld
  },
  created(){
    let imgurl = 'assets/logo.png';

    this.imgurl = require('./'+imgurl)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
