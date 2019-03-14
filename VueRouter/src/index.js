
import Vue from 'vue';

import App from './App.vue';
import router from './router';

import store from './store'


new Vue({
    el:'#app',
    // template:'<App/>'
    render(create){
        return create(App);
    },
    router,

    // 将创建好的store注入到Vue根实例里
    store,
    mounted(){
        console.log('root:',this);
    }
});