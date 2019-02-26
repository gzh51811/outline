# 数据库

## mySQL
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

* 项目路由配置
    * 模块化开发思想