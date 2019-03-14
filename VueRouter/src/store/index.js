// 引入
import Vue from 'vue';
import Vuex,{Store} from 'vuex';

// 使用
Vue.use(Vuex);

// 核心概念
// 1. store ： 一个用于存储仓库
// 2. state ：状态（数据，相当于组件中的data）
// 3. getters:（理解为组件中的computed，只读）
// 4. mutations ：负责更改state中的数据（同步，理解为组件中的methods）
// 5. actions : 类似于 mutations，负责做异步操作
    // * actions用来操作mutations，mutations用来操作state


const store = new Store({
    // 公共数据
    state:{
        cartlist:[{
            name:'iphoneX',
            price:998,
            qty:10
        },
        {
            name:'iphoneXs',
            price:1998,
            qty:1
        },
        {
            name:'iphoneXs plus',
            price:5998,
            qty:1
        }
        ],

        // 推荐商品
        recommend:[]
    },

    getters:{
        lt1k(state){
            return state.cartlist.filter(goods=>goods.price<1000);
        }
    },

    // 定义state的修改方式：mutations
    mutations:{
        addCartList(state,goods){
            // state: 定义的stat
            // goods: 触发addCartList时传入的参数
            state.cartlist.push(goods)
        },

        changeRecommend(state,payload){
            state.recommend.push(payload)
        }
    },

    actions:{
        getRecommend(context, payload){
            // context ： 类似store的对象

            // axios.get(url,{
            //     params:{
            //         qty:payload
            //     }
            // }).then(res=>{
                // let data = res.data;
                // context.commit('changeRecommend',data)
            // })

        }
    }
});

export default store;