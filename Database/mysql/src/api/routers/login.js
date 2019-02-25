const express = require('express');
const Router = express.Router();

// /api/login
Router.post('/',(req,res)=>{
    //关于注册的路由

    res.send('登录')
})


module.exports = Router;