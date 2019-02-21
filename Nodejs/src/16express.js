/**
 * express中间件
 * 使用：app.use([path],...middleware)
 * app.get()
 * app.post()
 * app.put()
 * app.delete()
 */
const express = require('express');
const bodyParser = require('body-parser');

// 创建urlencoded 编码解析（把请求头content-type值为application/x-www-form-urlencoded时的数据格式化到request.body中）
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();

let app = express();

app.use((req,res,next)=>{
    console.log('root');
    next();
})

// 静态资源服务器
app.use(express.static('./',{
    maxAge:1000*60*60*4
}));



// 自定义中间件
app.use('/test',function(request,response,next){
    console.log(111);

    next()
    response.send('test 中间件');
},function(request,response,next){
    console.log('222')
});


// 路由
app.get('/goods',(req,res,next)=>{
    res.send('get:获取商品信息')
})

app.post('/goods',(req,res,next)=>{
    res.send('post:修改商品信息')
})

app.put('/goods',(req,res,next)=>{
    res.send('put:添加商品')
})

app.delete('/goods',(req,res,next)=>{
    res.send('delete:删除商品')
})

// 动态路由
app.get('/list',(req,res,next)=>{
    res.send('所有商品列表')
});
app.get('/list/:category',(req,res,next)=>{
    // 动态路由参数：category为一个变量，保存在req.params
    // 查询参数：?name=xx&id=18  ，保存在req.query
    let {category} = req.params;
    
    
    res.send('所有'+category)
});

// 登录
app.post('/login',jsonParser,urlencodedParser,(req,res)=>{
    // post请求的参数,
    // let {username,password} = req.body;
    console.log(req.body);
    res.send(req.body);
});
app.get('/login',(req,res)=>{
    // get请求的参数，保存在req.query
    let {username,password} = req.query;
    console.log(username,password);

    res.send(req.query)
})

//开启服务器，定义端口8080：
app.listen(1811, function(){
    console.log('Server running on http://localhost:1811');
});