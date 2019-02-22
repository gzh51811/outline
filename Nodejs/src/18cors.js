/**
 * CORS
 * 设置响应头
 *      * Access-Control-Allow-Origin
 *      * Access-Control-Allow-Headers
 *      * Access-Control-Allow-Methods
 */

 const express = require("express");
 const app = express();

 const {PORT} = require('./config.json');

 let allowOrigin = ['http://localhost:8080','http://localhost:10086','http://www.taobao.com']

//  设置跨域资源共享CORS
app.use((req,res,next)=>{
    let origin = req.get('Origin');
    let idx = allowOrigin.indexOf(origin)
    if(idx>=0){
        res.setHeader('Access-Control-Allow-Origin',allowOrigin[idx]);
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    }
    
    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
})

app.use(express.static('./'));

//  引入路由中间件
let HomeRouter = require('./routers/home');
let ListRouter = require('./routers/list');
let CartRouter = require('./routers/cart');

//  首页
app.use('/home',HomeRouter);
app.use('/list',ListRouter);
app.use('/cart',CartRouter);

 app.listen(PORT,()=>{
     console.log('服务器启动成功：http://localhost:%s',PORT);
 })