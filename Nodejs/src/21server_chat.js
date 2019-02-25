/**
 * socket.clients: 保存所有连接到服务器的客户端对象
 */
const express = require('express');
const http = require('http');
const ws = require('ws');

const {PORT} = require('./config.json');

// 创建express应用
const app = express();

// webSocket服务器
const SocketServer = ws.Server;
const server = http.createServer(app);

// 创建webSocket服务器
let socket = new SocketServer({//ws:localhost:1811
    server,
    // port:1001 //不指定websocket端口，则使用server的端口
});

// 处理websocket消息
socket.on('connection', function (client) {
    // 客户端连接成功触发connection事件
    // client:客户端对象

    // 接收消息
    client.on('message', function (msg) {console.log('msg:',msg)
    	// 客户端发送消息到服务端时，触发message事件

        //把客户端的消息广播给所有在线的用户
        socket.broadcast(msg);
        
    });

    // 退出聊天  
    client.on('close', function(msg) {  
        //把这个客户端退出的消息广播给所有在线的用户
        socket.broadcast(msg); 
    });  

});


//自定定义广播方法
socket.broadcast = msg =>{  
    socket.clients.forEach(client => { 
        client.send(msg)
    });  
}; 

app.use(express.static('./'));
server.listen(PORT,()=>{
    console.log('server is running on port %s',PORT);
})