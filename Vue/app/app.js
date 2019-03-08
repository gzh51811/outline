
// ES module
import Vue from 'vue';

import App from './App.vue';

new Vue({
    el:'#app',
    render(create){
        return create(App)
    }
})