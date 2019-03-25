# day5-4

* 路由
* vuex

* JSX
    <div>
        <h4>xxx</h4>
    </div>

* diff 算法

* 传统节点操作：
    ele.innerHTML = 'laoxie';
    ele.innerHTML = 'lemon';
    ele.innerHTML = 'laoxie';
* 虚拟DOM
    vNode.innerHTML = 'laoxie';{type:'div',children:['laoxie']}
    vNode.innerHTML = 'lemon';{type:'div',children:['lemon']}
    vNode.innerHTML = 'laoxie';{type:'div',children:['laoxie']}
        diff 算法
    结论：不操作真实DOM节点


    PS：节点操作不可避免，但我们可以减少操作次数

* Vue的组件定义
    * 全局：Vue.component()
    * components

## React组件化开发
* 类型
    * 函数组件（UI组件、无状态组件、受控组件）
        * 必须有返回值
        * props参数
    * 类组件（容器组件、状态组件、非受控组件）
        * 必须有render方法
        * state
        * props属性
* 限制
    * 大写字母开头
    * 只能有一个外层标签
* 组件通讯
    * props传递


## 事件绑定
* 事件名必须使用驼峰写法：onClick,onKeyDown
* event
    handlerClick(a,b,event){
        
    }
    <div onClick={this.handlerClick.bind(this,10,20)}>

    <button onClick={e=>this.clickHandler(e,10)}>按钮</button>
    <button onClick={(e)=>{return this.clickHandler()}}>按钮</button>
* this指向
    * 函数是否通过new调用？
        * 是：指向实例对象
        * 否
            * 函数是否使用dot进行调用？
                * 是:指向dot前面的对象
                * 否: this指向window

        function show(){
            cocnsole.log(this)
        }

        show();//window
        btn.onclick = show;//btn

        var obj = {}
        obj.show = show;
        obj.show();//obj

        new show();

        show.bind()

## day5-5
* React组件更新（重渲染）
    * state有修改
        * 如何修改state：
            * this.setState({a:10}) ;//this.state.a = 100
    * props有修改
        * React为单向数据流

    * state 和props的区别
        * 
    * 强制刷新
        * forceUpdate()


* Vue与React的生命周期函数
    Vue                         React
    * Creating                  constructor() 初始化
        beforeCreate()
        created()
    * Mounting
        beforeMount()           componentWillMount()
        mounted()               componentDidMount()
    * Updating
        beforeUpdate()          componentWillUpdate()
        updated()               componentDidUpdate()
    * Unmounting
        beforeDestroy()         componentWillUnmount()
        destroyed()


    <div v-html="htmlcontent"/>
    <div dangerouslySetInnerHTML={{ __html: htmlcontent}}></div>


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