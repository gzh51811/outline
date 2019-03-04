# 数据库

## day2-1 mySQL
* 在Nodejs使用mySQL
    * 安装 mysql 模块
    * 连接
        * 创建连接对象：
            1. 创建连接对象：mysql.createConnection(...);
            2. 连接数据库：connection.connect()
            3. 查询语句
            4. 关闭连接对象：connection.end()
        * 创建连接池（推荐）
            1. mysql.createPool() 连接池默认创建10个连接对象
            2. 查询语句，查询完毕自动把连接对象放回连接池
    * sql语句CRUD
        * 增
        * 删
        * 改
        * 查

    * 注册：insert into user(name,password) values('laoxie',md5(1234))
    * 登录： select * from user where name=username and password=md5(1234)

* 项目路由配置
    * 模块化开发思想

## day2-2 Mongodb
* 格式： [{name:'laoxie',age:18},{name:'jingjing'}]
* 关系型数据库
    * 数据库 database
    * 表 table
    * 数据 data
* 非关系型数据
    * 数据库 database
    * 集合 collection
    * 文档 document
        * CRUD

* windows服务
* 

setTimeout(()=>{

},2000);
for(var i=0;i<5000000000000000;i++){

}

setTimeout(()=>{

},0)

setInterval(()=>{
    //丢帧
},2);

60Hz

var a = 10;

function test(b){
    a = a + b
    console.log(a);
    
    var a = 3
}

test(a)

* 如何在nodejs中操作mongodb
    * 安装第三方模块
        * mongodb（推荐）
        * mongoose

## day2-3
* 复习
    * Mongodb
        * mongodb与mySQL : 
            * 非关系型数据库与关系型数据库
            * 对比
                * 关系型        非关系型
                * database      database
                * table         collection
                * row           document



        * 操作
            * 数据库操作
            * 集合操作
                * 
            * 文档操作CRUD
                * 增
                    db.col.insertOne(doc)
                    db.col.insertMany([...doc])
                * 删
                    db.col.deleteOne(query)
                    db.col.deleteMany(query)
                * 改
                    db.col.updateOne(query,{$set:newData})
                    db.col.updateMany(query,{$set:newData})
                * 查
                    * db.col.find(query).toArray((err,docs)=>{})
                    * 推荐：let docs = await db.col.find(query).toArray()  

    * 补充：
        * node版本管理工具nvm
        * 如何兼容IE版本
    
                
* 注册登录
    * 服务器
        * 静态资源
        * 数据接口

* koa
    * ctx
        * req : nodejs request
        * res : nodejs response
        * requset : koa 的 request
        * reponse : koa 的 response
        ... ：ctx对象下会有很多属性来自于ctx.request和ctx.response


        ctx.method = ctx.request.method
        ctx.body = ctx.response.body


* 用户权限管理
* 如何保持用户登录状态
    * token
        * laoxie
        * lx18
        * 1000*60*60*2

        => LSKDKLRQEWRQW345U9837WQLKSDFLASDQQ


## localStorage/sessionStorage
// Storage：sessionStorage和localStorage
// 写入：setItem(name,value) 只能写入字符串
// 读取：getItem(name)
// 删除：remoteItem(name)
// 清除：clear()

循环：
```js
for(let i=0;i<localStorage.length;i++){
    let key = localStorage.key(i);
    localStorage.getItem(key)
}
```

token：令牌


http请求是无状态：
* 登录 -> 加密->保存状态到本地
* 浏览首页 -> 解密->获取保存状态信息