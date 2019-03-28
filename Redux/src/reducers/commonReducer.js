/**
 * Common Reducer
 * 关于全局的修改规则
 */

let initState = {
    show:true
}
let reducer = (state=initState,{type,payload})=>{
    switch(type){
        case 'show_menu':
            return {
                ...state,
                show:true
            }
        case 'hide_menu':
            return {
                ...state,
                show:false
            }
        
        default:
            return state;
    }
}

export default reducer;