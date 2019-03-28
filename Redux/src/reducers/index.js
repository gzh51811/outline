import {combineReducers} from 'redux';

import cartReducer from './cartReducer';
import commonReducer from './commonReducer';

//合并Reducer
const rootReducers = combineReducers({
    comon: commonReducer,
    cart: cartReducer
});

export default rootReducers;