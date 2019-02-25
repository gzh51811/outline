const express = require('express');
const Router = express.Router();

const db = require('../db');
const formatData = require('../utils/formatData')

// /api/list
Router.get('/',(req,res)=>{
    let sql = `select * from goods`

    db.query(sql,(err,data)=>{
        if(err){
            res.send(formatData({code:100,data:err}));
            return;
        }
        res.send(formatData({data}))
    });
})

// /api/list/:category
Router.get('/:category',(req,res)=>{

    let sql = `select * from goods where category='${req.params.category}'`

    db.query(sql,(err,data)=>{
        if(err){
            res.send(formatData({code:100,data:err}));
            return;
        }
        res.send(formatData({data}))
    });
})


module.exports = Router;