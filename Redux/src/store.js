import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';
import rootSaga from './saga';

import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// 1.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 合并中间件
let middleware = compose(applyMiddleware(sagaMiddleware),composeWithDevTools());

// 创建一个store
// 2.将 sagaMiddleware 连接至 Store
let store = createStore(rootReducer,middleware);

// 3.运行 Saga配置
sagaMiddleware.run(rootSaga);

export default store;