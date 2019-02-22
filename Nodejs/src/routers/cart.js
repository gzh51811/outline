const express = require('express');

const Router = express.Router();

// /home
Router.get('/',(req,res)=>{
    res.send('购物车');
});



module.exports = Router;