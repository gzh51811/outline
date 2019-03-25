import React from 'react';
import {render} from 'react-dom';

import App from './App';

import {HashRouter,BrowserRouter,Route} from 'react-router-dom';
render(
    <HashRouter>
        <App/>
        {/* <Route component={App}/> */}
    </HashRouter>
    ,
    document.querySelector('#app')
)