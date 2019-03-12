
import Vue from 'vue';

import App from './App.vue';
import router from './router';


new Vue({
    el:'#app',
    // template:'<App/>'
    render(create){
        return create(App);
    },
    router,
    mounted(){
        console.log('root:',this);
    }
});