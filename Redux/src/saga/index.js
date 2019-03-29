import { call, put, takeEvery, takeLatest,select,all } from 'redux-saga/effects';

import {getData} from '../service';

let delay = (time)=>new Promise(resolve=>setTimeout(resolve,time));

function* helloSaga(action) {
    console.log('hello saga');
    yield 'jingjing'
}

function* addToCar(action){
    console.log('添加购物车');
    try{
        let goods = yield call(getData,'/api/cart',{page:1,qty:10});//getData('/api/cart',{page:1,qty:10})
        yield put({ type: 'ADD_TO_CART',payload:goods});//等效小dispatch({type})
    }catch(err){
        yield put({type:'ADD_TO_CART_FAIL'})
    }
    

    // 获取state
    let state = select();//等效于store.getState()

    console.log('添加成功')
}

// 监听action
function* watchAddToCar(){
    yield takeLatest('ADD_TO_CART_ASYNC',addToCar);
}
function* watchGetData(){
    yield takeLatest('ADD_TO_CART_A',addToCar);
}


export default function* rooSaga(){
    yield all([watchAddToCar(),watchGetData()])
}