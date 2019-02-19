#Nodejs
##day1-01
前端->全栈(全端=前端+后端)

一阶段：4w(html+css)
二阶段：8w(js+php+mySQL+项目相关)
三阶段：9w(nodejs+MongoDB+框架(vue+react+混合开发+微信小程序)，4个项目+)


奇迹Mu
传奇
魔兽

var a 
= 
10

500+ -> 1000+ -> 目标

效率

高薪（技术+表达能力）
找工作：7分运气+3分实力
进入企业：7分实力+3分态度


### 模块化
    * 规范
        * AMD：require.js
            * 异步
        * CMD：seajs
            * 异步
        * CommonJS: node.js
            * 同步
        * ES Module： ECMAScript
            * 同步

    * 导出
        * 每一个文件模块都是一个独立的作用域
        * exports
        * module.exports
    * 引入
        * let com = require('xxx')


ajax
    * 同步
    * 异步

    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(xhr.reponseText)
    }
    xhr.open('get','xxx',true);
    xhr.send()

    console.log(xhr.responseText)


### 内置模块
####http
> 利用http模块创建一个服务器

* 请求
* 相应

url.parse('http://www.laoxie.com:1811/one?a=index&t=article&m=default#laoxie',true);


href： 解析前的完整原始 URL，协议名和主机名已转为小写
    * http://www.laoxie.com/one?a=index&t=article&m=default#laoxie
protocol： 请求协议，小写
    * http
host： url 主机名，包括端口信息，小写
    * http://www.laoxie.com:1811
hostname: 主机名，小写
    * www.laoxie.com
port: 主机的端口号
    * 1811
pathname: URL中路径，下面例子的 /one
    * /one
search: 查询对象，即：queryString，包括之前的问号“?”
    * ?a=index&t=article&m=default
path: pathname 和 search的合集
    /one?a=index&t=article&m=default
query: 查询字符串中的参数部分（问号后面部分字符串），或者使用 querystring.parse() 解析后返回的对象
    * {a:'index',t:'article',m:'default'}
hash: 锚点部分（即：“#”及其后的部分）
    * #laoxie


利用内置模块实现http静态服务器


## day1-2
* 查看文档能力
    * 技术文档
    * 需求文档

* 复习nodejs
    * REPL
    * 如何执行js文件： node <文件名>
    * 模块化开发
        * 规范
            * AMD
            * CMD
            * commonJS
            * ES Module
        * 分类
            * 原生
            * 自定义
            * 第三方 npm
            * 文件模块
                * json

        * 使用
            * 引入 require()
            * 导出
                * exports
                * module.exports
        * 原生模块
            * http
            * url   :  解析请求的url地址
            * path  :  解析本地文件地址
            * querystring ： 解析请求参数
                * parse()
                * stringify()

逻辑思维移植（学习能力）

事件
    * 绑定
        * click,mousedown
        * scroll
    * 触发
    * 自定义事件
        * laoxie
