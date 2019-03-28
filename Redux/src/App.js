import React, { Component } from 'react';

import Home from './pages/Home';
import List from './pages/List';
import Goods from './pages/Goods';
import Cart from './pages/Cart';

// 全部加载
// import { Menu, Icon } from 'antd';
// import "antd/dist/antd.css";

// 按需加载antd
// import Menu from 'antd/lib/menu';
// import 'antd/lib/menu/style';
// import Icon from 'antd/lib/icon';
// import 'antd/lib/icon/style';

// babel-plugin-import
import { Menu, Icon,Badge } from 'antd';

// import store from './store';

// console.log(store)

import { Route, Redirect, Switch, NavLink,withRouter } from 'react-router-dom';

// 引入connect高阶组件
import {connect} from 'react-redux'

class App extends Component {
    constructor() {
        super();
        this.state = {
            navs: [
                {
                    text: '首页',
                    name: 'Home',
                    path: '/home',
                    icon:'home'
                },
                {
                    text: '列表',
                    name: 'List',
                    path: '/list',
                    icon:'bars'
                },
                {
                    text: '购物车',
                    name: 'Cart',
                    path: '/cart',
                    icon:'shopping-cart'
                },
                {
                    text: '我的',
                    name: 'Goods',
                    path: '/goods',
                    icon:'user'
                },
            ],
            current:'Home'
        }

    }
    handleClick = (e)=>{
        console.log(this,e)
        this.setState({
            current: e.key
        },()=>{
            //路由跳转：编程式导航
            // 利用withRouter()高阶组件实现history的传递

            this.props.history.push('/'+e.key.toLowerCase());
        });


    }

    render() {

        console.log('App',this);
        let {cartlen} = this.props
        return (
            <div className="container">
                {/* <nav>
                    {
                        this.state.navs.map(item => <NavLink activeStyle={{ color: '#f00', fontWeight: 'bold' }} key={item.name} to={item.path}>{item.text}</NavLink>)
                    }
                </nav> */}
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    {
                        this.state.navs.map(item => <Menu.Item key={item.name}>
                        {
                            item.name=='Cart' 
                            ? 
                            <Badge count={cartlen}><Icon type={item.icon} />{item.text}</Badge>
                            :
                            <>
                            <Icon type={item.icon} />{item.text}
                            </>
                        }
                        
                        </Menu.Item>)
                    }
                    
                </Menu>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/list" component={List} />
                    
                    {/* 动态路由 */}
                    <Route path="/goods/:id" component={Goods} />
                    <Route path="/cart" component={Cart} />
                    {/* <Route path="/" render={()=><div>我的首页</div>} exact/> */}
                    <Redirect from="/" to="/home" />{/* 404 */}
                </Switch>
            </div>
        )
    }
}

App = withRouter(App);

const mapStateToProps = (state)=>{
    return {
        cartlen:state.cart.goodslist.length
    }
}

App = connect(mapStateToProps)(App);

export default App;