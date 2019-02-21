const express = require('express');

let app = express();

// 静态资源服务器
app.use(express.static('./',{
    maxAge:1000*60*60*4
}));

// 自定义中间件
app.use('/test',function(request,response,next){
    console.log(111);

    next()
},function(request,response,next){
    console.log('222')
});

//开启服务器，定义端口8080：
app.listen(1811, function(){
    console.log('Server running on http://localhost:1811');
});