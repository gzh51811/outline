const express = require('express');
const Router = express.Router();

// /api/register
Router.post('/',(req,res)=>{
    //关于注册的路由

    res.send('注册')
})


module.exports = Router;