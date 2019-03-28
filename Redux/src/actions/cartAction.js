/**
 * Action creator
 */

//  编写常量，用于规范type
export const ADD_TO_CART = 'add_to_cart'
export const REMOVE_FROM_CART = 'remove_from_cart'
export const CHANGE_QTY = 'change_qty'

export function add(goods){
    return {
        type:ADD_TO_CART,
        payload:goods
    }
}

export function remove(id){
    return {
        type:REMOVE_FROM_CART,
        payload:{id}
    }
}

export function changeqty(id,qty){
    return {
        type:CHANGE_QTY,
        payload:{id,qty}
    }
}

export default {
    add,
    remove,
    changeqty
}