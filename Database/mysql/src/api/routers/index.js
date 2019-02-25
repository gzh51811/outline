const express = require('express');
const Router = express.Router();

const registerRouter = require('./register');
const loginRouter = require('./login');
const listRouter = require('./list');
const goodsRouter = require('./goods');

Router.use('/register',registerRouter)
Router.use('/login',loginRouter)
Router.use('/list',listRouter)
Router.use('/goods',goodsRouter)

module.exports = Router;