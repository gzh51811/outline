/**
 * @http模块的使用
 * 利用http模块创建一个web服务器
 */

 const http = require('http');
 const url = require('url');
 

//  创建http服务器
http.createServer((request, response)=>{
    // request:请求相关的信息（前端给后的的东西）
    // response:相应相关的信息（后端给前端的东西）
    console.log(request.url);
    let type = request.method.toLowerCase();
    let {pathname} = url.parse(request.url,true);
    // if(type === 'post'){
    //     response.end('post data')
    // }else if(type === 'get'){
    //     response.write('<h1>hello my name is laoxie</h1>');
    //     // 必须使用end方法结束相应
    //     response.end('<span style="color:#58bc58">ok</span>');
    // }

    // nodejs路由
    let data = {};
    switch(pathname){
        case '/list':
            data = {
                type:'list',
                data:{
                    a:100,
                    b:200
                }
            }
            break;
        case '/cart':
            data = {
                type:'cart',
                data:[{
                    name:'laoxie',
                    age:18
                },{
                    name:'jingjing',
                    age:28
                },{
                    name:'lemon',
                    age:36
                },{
                    name:'malin',
                    age:32
                }]
            }
    }

    response.end(JSON.stringify(data));
    
}).listen(1811,()=>{
    console.log('服务器启动成功...')
});