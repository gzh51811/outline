import React,{Component} from 'react';

import Home from './pages/Home';
import List from './pages/List';
import Goods from './pages/Goods';
import Cart from './pages/Cart';

import {HashRouter,BrowserRouter,Route,Redirect,Switch,Link,NavLink} from 'react-router-dom';

class App extends Component{
    constructor(){
        super();
        this.state = {
            navs:[
                {
                    text:'首页',
                    name:'Home',
                    path:'/home'
                },
                {
                    text:'列表',
                    name:'List',
                    path:'/list'
                },
                {
                    text:'详情',
                    name:'Goods',
                    path:'/goods'
                },
                {
                    text:'购物车',
                    name:'Cart',
                    path:'/cart'
                }
            ]
        }
    }
    render(){
        return (
            <BrowserRouter>
                <nav>
                    {
                        this.state.navs.map(item=><NavLink activeStyle={{color:'#f00',fontWeight:'bold'}} key={item.name} to={item.path}>{item.text}</NavLink>)
                    }
                </nav>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/goods" component={Goods}/>
                    <Route path="/cart" component={Cart}/>
                    {/* <Route path="/" render={()=><div>我的首页</div>} exact/> */}
                    <Redirect from="/" to="/home"/>{/* 404 */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;