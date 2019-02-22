const express = require('express');

const Router = express.Router();

// /home
Router.get('/',(req,res)=>{
    res.send('首页');
})



module.exports = Router;