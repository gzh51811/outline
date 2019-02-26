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