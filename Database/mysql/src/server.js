const express = require('express');

const app = express();


const Router = require('./api/routers');

// 静态服务器
app.use(express.static('./'));

// 路由接口
app.use('/api',Router);

app.listen(10086,()=>{
    console.log('server is running on http://localhost:10086');
});