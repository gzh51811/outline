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