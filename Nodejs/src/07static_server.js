/**
 * 静态资源服务器
 * 类似与apache服务器的效果
 * 
 * 全局变量
 * __dirname ： 当前文件所在的路径
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// 引入mime类型
const mime = require('./js/mime');

http.createServer((req,res)=>{
    // 获取文件路径
    let pathname = url.parse(req.url,true).pathname;

    // 获取文件后缀名
    let extname = path.extname(pathname).slice(1);

    //根据后缀名，使用不同的contentType
    // let mime = 'text/palin';
    // switch(extname){
    //     case 'jpg':
    //         mime = 'image/jpeg'
    // }

    let realPath = path.join(__dirname,pathname);

    console.log(pathname,realPath,extname);


    fs.readFile(realPath,(err,data)=>{
        
        if(err){
            res.writeHead(404,{'Content-Type':'text/palin'})
            res.end('the page you visited is not found');
            return;
        }
       
        // 设置content-type响应头，用于告诉浏览器我返回的是什么
        res.writeHead(200,{'Content-Type':mime[extname]})
        res.write(data)
        res.end();
    })
    
}).listen(1811,()=>{
    console.log('server is running on port 1811');
})