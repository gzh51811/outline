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