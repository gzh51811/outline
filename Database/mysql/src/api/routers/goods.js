const express = require('express');
const Router = express.Router();

const db = require('../db');
const formatData = require('../utils/formatData')

// /api/goods/:id
Router.get('/:id',(req,res)=>{
    //关于注册的路由
    let sql = `select * from goods where id=${req.params.id}`

    db.query(sql,(err,data)=>{

        res.send(formatData({data}))
    })

    
})


module.exports = Router;