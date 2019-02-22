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

## day1-3
* 复习
    * 内置模块
        * http
        * url
        * path
        * querystring
        * fs
            fs.readFile()
        * events
    * 前后端的知识
        * 请求request
        * 响应response
            * content-type
            * statuscode
                * 2xx
                    * 200
                * 3xx
                    * 304
                    * 301
                * 4xx
                    * 404
                    * 401
                * 5xx
                    * 500

    * 输入url地址->展示
        * 域名解析阶段
        * 服务器响应阶段
        * 浏览器渲染阶段


    gulp.src('./src/js/*.js') //返回一个数据流

    .pipe()


    gulpfile.js

    gulp xxx

## day1-4
* 跨域解决方案
    * jsonp
        * script 
            * src="xxx.php"
            * 返回一段函数执行的代码 getData({})
            * getData必须为全局函数
        * CORS (W3C,ajax)
            * 响应头
        * 服务器代理
        * iframe
        * window.name
        ....

* 复习
    * 数据流Stream
        * 是一个eventEmitter实例
        * Buffer
        * 读取据流：
            * readFile(path,callbak)
            * let stream = fs.createReadStream(path)
                stream.on('data',(chunk)=>{

                })
                stream.on('end',()=>{

                })
        * 写入流
            * fs.createWriteStream(path,opt)

            *  writerStream.write(data,'UTF8');

                // 标记文件末尾
            * writerStream.end();
        http
            * request

        * 应用
            * 复制文件
            * 压缩/解压
            * 爬虫
            ...

开发环境: development
生产环境：production

语义化

第三方模块
    * request     分析html结构
    * cheerio      封装了jquery核心的模块
        * cheerio.load(html)
    * express
        * 静态资源服务器
            express.static()
        * 路由
            * app.get()
            * app.post()
            * app.put()
            * app.delete()
        * 中间件
            app.use(path,...middleware)

    * 工具
        * supervisor

async/await


## day1-5
* 语义化标签
    * table布局
        * <font color="">
    * DIV+CSS
        * float
        * position
    * 语义化：在合适的位置使用合适的标签
        * SEO： 搜索引擎优化
            * 标签
            * 友情链接
            * 热搜
            ....
    * html5新标签


* express
    * 中间件
    let express = require('express')
    let app = express();

    app.use(express.static('./'))

    app.listen(1811)

    let http = require('http')
    http.createServer((req,res)=>{
        req.url
    })
    http.listen(1811)

    * 路由
        app.use('/goods/:',(req,res,next)=>{
            // 对req.url,req参数进行格式化，并写入req对象

            next()
        },(req,res,next)=>{
            req
        })

        app.use((req,res)=>{

        })

        app.get()
        app.post()
        app.put()
        app.delete()

        * 模块化开发    

            * 
            const goodsRouter = express.Router()
            goodsRouter.get('/)
            goodsRouter.post('/')
            module.exports = goodsRouter
            app.use('/goods',goodsRouter)

    * 对象属性的访问规则
        let obj = {name:'jingjing',say(){return 'hello'}}
        obj.name;// 'jingjing'
        obj.gender;// undefined
        obj.say();// 'hello'
        obj.getData();// getData is not a function
        obj.toString();//

        1.先从当前对象查找，找到则返回
        2.继续往原型对象上查找，找到则返回
        3.继续往原型对象的原型对象查找，找到则返回
        n. ......
        终点：Object的原型对象，找到则返回，否则得到undefined或报错

        属性访问规则：在原型链中查找

        一切皆对象

    * 变量访问规则

    * jsonp
    * CORS