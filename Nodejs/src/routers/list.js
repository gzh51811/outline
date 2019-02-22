const express = require('express');

const Router = express.Router();

// /home
Router.get('/',(req,res)=>{
    res.send('列表');
})



module.exports = Router;