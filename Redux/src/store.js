import {createStore} from 'redux';

// 初始状态
let initState = {
    goodslist:[
        {
            goods_id:123,
            goods_name:'jingjing',
            goods_price:88,
            qty:1,
            goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982351569257288_360.jpg'
        },
        {
            goods_id:321,
            goods_name:'didi',
            goods_price:188.98,
            qty:3,
            goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982351569257288_360.jpg'
        }
    ]
}

// state的修改逻辑
let reducer = (state=initState,{type,payload})=>{
    // state: 上一次的状态
    // action: 修改指令
    // 返回值：返回新的state
    switch(type){
        // 添加商品到购物车
        case 'add_to_cart':
            return {
                ...state,
                goodslist:[...state.goodslist,payload]
            }

        // 删除购物车商品
        case 'remove_from_cart':
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.id!=payload.id)
            }
        
        // 修改购物车商品数量
        case 'change_qty':
            return {
                ...state,
                goodslist:state.goodslist.map(goods=>{
                    if(goods.goods_id === payload.id){
                        goods.qty = payload.qty
                    }
                    return goods;
                })
            }

        default:
            return state;
    }
}

// 创建一个store
let store = createStore(reducer);

export default store;