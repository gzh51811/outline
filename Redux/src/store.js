import {createStore} from 'redux';
let initState = {
    goodslist:[
        {
            goods_id:123,
            goods_name:'jingjing',
            goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982351569257288_360.jpg'
        },
        {
            goods_id:123,
            goods_name:'didi',
            goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982351569257288_360.jpg'
        }
    ]
}
let reducer = (state=initState,action)=>{
    switch(action.type){
        case 'add_to_cart':
            return {
                ...state,
                goodslist:[...state.goodslist,action.payload]
            }
        case 'remove_from_cart':
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.id!=action.payload.id)
            }
        case 'change_qty':
            return {
                
            }

        default:
            return state;
    }
}
let store = createStore(reducer);

export default store;