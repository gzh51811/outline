const express = require('express');
const http = require('http');
const ws = require('ws');

const {PORT} = require('./config.json');

// 创建express应用
let app = express();

// 利用http模块创建服务器
let server = http.Server(app);

let SocketServer = ws.Server;

// 创建webSocket服务器
let socket = new SocketServer({
    server,
    port:1001
});

// 静态资源服务器
app.use(express.static('./'));

// 监听客户端消息
socket.on('connection', function (client) {
    //当客户端连接时触发这里的代码
    client.send('先生、欢迎来到xxx会所');
});

server.listen(PORT,()=>{
    console.log('服务器启动成功 端口：%s',PORT);
})