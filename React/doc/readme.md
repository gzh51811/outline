## day6-1
* 复习React
    * VirtaulDOM 
    * JSX {type,children,props...}
    * 单向数据流
    * 组件化开发
        * ES Module
        * 组件类型
            * 函数组件
            * 类组件
        * 组件通信
            * props
            * context
                * this.context
            * router
            * redux
    * 声明式设计


    var num = 100;/全局
    let fn = (function(){
        var num = 100

        return function(){

        }
    })()


    require.js/sea.js

    require(['./common.js'],(zzz)=>{

    })

    module.exports = {

    }

    import common from './common'
    export let num = 100


* React
    * MVC
    * MVP
    * MVVM

React只能算MVC架构中的V（view）, 要实现单页面应用必须加入router（React-Router）

Vue-router 类似于 React-router3

RR4
* 核心：react-router
* react-router-dom
* react-router-native

react  <-> react-native

### 高阶组件
* 就是一个函数，用于包装

### 编程式导航与声明式导航
有些场景下只能使用编程式导航

* history.push('/home')         <Link to="/home">
* history.push({
      pathname: '/goods',
      search: '?id=123456',
      state: { price: 998 }
    })

    <Link to={{
      pathname: '/pay',
      search: '?id=123456',
      state: { price: 998 }
    }}>

* history.replace('/home')      <Link to="/home" replace>

## day6-2

### React-Router4（SPA VS MPA）

* 根据浏览器url地址（hash or history state）不同显示相应的内容
    * 路由原理
        * hash
            * hashchange事件
        * history/browser
            * pushState()/replaceState()
* 一切皆组件 just component

* 高阶组件HOC（High Order Component）
> 就是一个纯函数，接收一个组件，返回一个新的组件
> 纯函数：不会对传入的参数进行修改，不会产生副作用

withRouter()
withAxios()

* ES7 Decorator 装饰器


## day6-3
* json Vs xml

    {
        username:'jingjing',
        password:123456,
        gender:'女'
    }

    <user>
        <username>jingjing</username>
        <password>123456</password>
        <gender>女</gender>
    </user>

    svg
        * 图标
        * 动画

* just component
    * 类型
        * <HashRouter/>
            * hashchange
        * <BrowserRouter/>
            * popstate
    * <Route/>
    * <Redirect/>
    * <Switch>
    * 导航
        * 声明式
            * <Link/>
            * <NavLink/>
        * 编程式 
            * history
                * push()
                * replace()
            * 获取history
                * withRouter()  HOC
                * <Route/>

    * history,location,match

    // webpack
    import {Route,Switch} from 'react-router-dom'
    import Home from './pages/Home'


    cjs,umd,amd,es

### Redux

    Vuex


    React  View
    React-Router    
    Redux'

注意：React与Redux为两个独立的产品，

* 核心概念
    * Store
        * 单一数据来源原则：要求一个应用只能有一个store
        * store中的数据可以在任意位置访问
        * 修改Store中的数据只能通过特定的方式（reducer）
        * 创建：createStore()
            * 返回一个对象{getState()}
    * State
        state为数据状态（快照，即数据在某个时间点的状态），State改变则View改变

        * 获取数据
            store.getState()
        * 修改数据(唯一修改方式)
            * store.dispatch(action)  / Vue this.$store.commit()
    * Action
        Action用于定义如何改变state，是用户改变 State 的唯一方式
        * 格式：{type:'UPDATE_CART',payload}

    * Reducer
        Reducer 必须是一个纯函数，状态更新逻辑(如何修改state)，并返回新的state

* 使用redux
    * import {createStore} from 'redux';

    * 创建Store
        let store = createStore(reducer)

    * 获取state
        store.getState()
    * 修改state
        store.dispatch({type:'remove_from_cart',{id:10}})

    * 定义修改逻辑：reducer
        let initState = {
            goodslist:[{id:10},{id:5}]
        }
        let reducer = (state=initState,action)=>{
            //根据action修改state

            switch(action.type){
                case 'remove_from_cart':
                    return {
                        ...state
                        goodslist:state.goodslist.filter(item=>item.id!=action.id)
                    }
                    break;
                case 'change_qty':
                    ...

                 default:
                    return state;
            }

           
        }


### context

1. 定义： React.createContext([defautlValue])
    `let MyContext = React.createContext('laoxie')`
2. 使用：
    * 传输：Provider
        ```html
            <MyContext.Provider value="jingjing">
                <Home>
            <MyContext.Provider>
        ```
    * 接收：Consumer
        > 在子组件中接收：
        ```html
            <MyContext.Consumer>
                {
                    username=>{
                        return <button>{username}</button>
                    }
                }
            </MyContext.Consumer>
        ```