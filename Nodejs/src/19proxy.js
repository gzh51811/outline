'use strict';
const express = require('express');
var proxy = require('http-proxy-middleware');

const {PORT} = require('./config.json');

let app = express();

app.use(express.static('./'))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.sendStatus(200);/*让options请求快速返回*/
    } else{
      next();
    }
});


 
// proxy middleware options 
var options = {
    target: 'http://www.juooo.com', // target host 
    changeOrigin: true,               // needed for virtual hosted sites 
    // ws: true,                         // proxy websockets 
    pathRewrite: {
        '^/proxy' : '/',     // rewrite path 
    },
    // router: {
    //     // when request.headers.host == 'dev.localhost:3000', 
    //     // override target 'http://www.example.org' to 'http://localhost:8000' 
    //     'dev.localhost:3000' : 'http://localhost:8000'
    // }
};
 
// create the proxy (without context) 
var exampleProxy = proxy(options);
 
// mount `exampleProxy` in web server 
app.use('/proxy', exampleProxy);
app.use('/jxapi', proxy({
    "target": "https://m.jiuxian.com",
    "changeOrigin": true,
    "pathRewrite": {
        "^/jxapi" : "/"
    }
}));

app.listen(PORT, function(){
    console.log('Server running on http://localhost:'+PORT);
});

