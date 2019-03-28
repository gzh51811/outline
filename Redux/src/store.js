import {createStore} from 'redux';
import rootReducer from './reducers';

// 创建一个store
let store = createStore(rootReducer);

export default store;