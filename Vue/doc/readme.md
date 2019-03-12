# Vue

## day3-1

* 专业术语
    * MVVM模式
    * 渐进式框架
    * 数据驱动
    * 组件化

* 一个复杂的应用
    * 分工合作是否合理
    * 后期维护成本问题
    。。。。


* 开发分层（架构模式）
    * M     Model       数据
    * V     View        UI界面
    * C     Controller  控制器


前端开发：
    * ajax
    * render
    * html

    xhr.onload = ()=>{
        
    }
    xhr.open('get','xx.php',true);
    xhr.send()


    function render(){
        //渲染到页面

        // 遍历数据forEach()

        // 获取html节点
        // 写入html节点
    }


    js -> html
        * innerHTML
        * innerText
    html -> js
        * 事件


    js <- vue实例 -> html

    {username:'laoxie'}  -> <h1>laoxie</h1>
    obj.username = 'jingjing' -> <h1>jingjing</h1>


## day3-2
* 语法糖
* js中一切皆对象
* js是一门基于对象的语言
    obj.name
    'abc'.substr()
    10.toFixed(2)
class Person{
    constructor(){
        // 属性
    }

    //方法
}

new Person(a,b,c)

function Person(){
    // 属性

    //
}

Person.prototyp = {
    type:'人类'
    //方法
}
new Person(a,b,c)
new Person()
new Person()
new Person()

### Vue
* jquery -> angular(MVC、双向数据绑定、依赖注入) -> Reat(Facebook:Virtual DOM,事件优化...) -> Vue()

* 架构模式 
    * 架构师：分工、维护、测试...
    * 分层
        * MVC -> MVP -> MVVM


* VUE
    * 学习Vue一定要改变节点操作的固有思维，把关注点从DOM节点操作改到数据操作上来
    * 特点
        * 高性能
            * 节点频繁操作
            * 事件的处理方式
            * 请求数量
            ...
        * 易用
        * 双向数据绑定
        ...

* flash
    * AS actionscript
    * JS javascript


## day3-3

* 深拷贝：
    * JSON.parse(JSON.stringify(obj))
    * 递归
* 浅拷贝
    * Object.assign({},obj)
    * let newObj = {...obj} //ES6扩展运算符

* 语义化 -> SEO
    * what
    * why
    * where

* 怎么设置对象的属性为只读 -> 属性特性
    * Symbol
    *


    属性特性
        > 要设置属性特性，必须使用特定方法： Object.defineProperty()
        > 查看某个属性的属性特性：Object.getOwnPropertyDescriptor()
        
        * 值属性（数据属性）
            * configurable（可配置性：总开关，是否可以修改writable和enumerable的值）
            * enumerable：枚举性
            * writable：可写性
            * value
        * 存储器属性(getter & setter)
            * configurable
            * enumerable
            * get
            * set

    var obj = {
        username:'laoxie'
    }

    obj.password = 123;

    for..in
    obj.username = 'jingjing'


* 双向数据绑定的原理
    * v-model
        * View -> Model
        * Model -> View

    <input type="text" v-model="username">
    <input type="text" oninput="change()" :value="username">
    function change(){
        data.username = e.targete.value;
    }

    let data = {username:'xxx'}
    Object.defineProperty(vm,'username',{
        get(){
            return data.username
        },
        set(val){
            data.username = val

            document.querySelector('.username').value = val
        }
    })

    vm = new Vue()

    vm.username = 'xxx';


* 如何取消ajax请求
    * abort()

## day3-4
* Vue的特点：
    * 渐进式框架（扩展性强）
    * 双向数据绑定（ng）
    * Virtual DOM（结构类似于DOM节点的js对象）
    * 组件化开发
    * 易用性（关注数据、中文文档完善）

* 响应式属性
    * data
        {
            arr:[]
            score:{
                math,
                englisth,
                chinese
            }
        }

        this.score.cn = 60;
        this.$set()
    * Vue.set(target,key,val)
    * 变异数组方法

* 断点
    * 暂停代码的执行
    * 事件传播
        * 冒泡
        * 捕获

        把事件处理函数放到哪个阶段执行
        guangzhou.onclick = function(){
            console.log('叫爸爸事件')
        }

        guangzhou.addEventListener('click',()=>{},true)

        vue做了事件优化：事件绑定在document

        oldVNode    newVNode  -> diff算法 -> 是否更新View

        {
            tag:'div'
            attrs:{},
            children:[
                {
                    tag:'h4'
                    attrs:{title:'xx'}
                }
            ]
            ....
        }

        div.innerHTML = 'my name is laoxie';
        div.innerHTML = 'my name is jingjing';
        div.innerHTML = 'my name is laoxie';

        nextTick()

        $refs


### 组件
    * FE,BE


## day3-5
* 自我介绍
* 项目流程
* 项目管理系统
    * bug管理
        * open
        * fixed
        * closed
        * reopen
    * bug重现

* 版本号：xx.xx.xx

* 复习Vue组件
    * 定义
    * 使用
    * 通讯
        * 父 -> 子：  props
        * 子 -> 父：自定义事件+$emit()
        * 兄弟->兄弟：
            * 子->父
            * 父->子
        * 无关联组件通讯
            * 利用第三方实例bus作为传输桥梁：let bus = new Vue();
            * 接收方：bus.$on('data',(num)=>{})
            * 传输方：bus.$emit('data',100)

* Vue的数据流：
    * 单向数据流（数据只能父组件往子组件传输）
    * 双向数据流（angularjs）


* call & apply & bind
> fn.call(obj,多个参数),fn.apply(obj,数组),fn.bind(obj) -> fn()
    * 共同点
        * 都可以改变函数this指向
        * 都是函数的方法
    * 不同点
        * call&apply会执行fn函数，而bind只是改变this指向
        * call & apply 功能一样，区别在于参数不同

    * 类数组
        * 类数组.map()

* vue单文件组件
    * webpack
        * 配置
        * 入口/出口
        * 静态服务器
        * 加载器
        * 插件
    * es module
    * npm script

### webpack
* webpack与gulp的区别
gulp是基于任务的打包工具，webpack是基于配置的打包工具

目的：编译vue单文件组件


new Vue({
    template:`
        <div>
        <todoForm></todoForm>
        <todoContent></todoContent>
    </div>
    `
})


npm脚本命令

key设置原则：唯一、稳定

## day4-1
* Vue单文件组件中局部样式的原理
    * 属性选择器
    * scoped
    * webpack

* Vue组件化开发
    * 单向数据流
    * 组件通讯
        * 父->子： props
        * 子->父：
            1. 自定义事件+ $emit
                * sync简化版：
            2. 传递事件处理函数（谁的数据谁修改）


 <btn-change @bigger="updateFontSize" :color.sync="color"></btn-change>
  <btn-change :color.sync="color"></btn-change> 
  等效于
  <btn-change v-on:update:color="val=>color=val">
    sakfjasld
  </btn-change> 

this.fonSize = 20;

* computed 和 methods的区别
    * computed VS data
        * data : 初始化数据
        * computed : getter & setter

        {{goods}}

    * computed Vs Methods
        * computed: 属性
        * methods: 方法

        checkAll(idx) / checkAll
        * computed有缓存

* 如何理解Promise
    * async & await
    * promise状态
        * pending
        * resolved
        * rejected
    let pro = new Promise((resolve,reject)=>{
        // ...
        if(..){
            resolve(food);

        }else{
            reject('卖完了')
        }
    })

    pro.then((kfc)=>{
        // 成功点餐
    })

    pro.catch((err){
        // 点餐失败
    })

    Promise.all([pro,pro,pro]).then().catch()
    Promise.resolve();//把一个普通对象包装成一个状态为resolve的promise对象
    promise.reject()

    * 应用：
        * 解决回调地狱
        * 以同步代码实现异步操作

    * Generatos生成器函数
    function* show(){

    }

* review 审查、校验
* 规范
    * ESlint
    * BEM
        * .box__title--active



## day4-2

### 复习
* 插槽
* 内置组件

### 路由
* SPA   Single Page Application
一个网站只有一个页面