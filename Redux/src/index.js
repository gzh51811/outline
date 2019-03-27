import React from 'react';
import {render} from 'react-dom';

import App from './App';

// 引入store
import store from './store';

// 引入react-redux
import {Provider} from 'react-redux';

import {HashRouter,BrowserRouter,Route} from 'react-router-dom';
render(
    <Provider store={store}>
        <HashRouter>
            <App/>
            {/* <Route component={App}/> */}
        </HashRouter>
    </Provider>
    ,
    document.querySelector('#app')
)