const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */
router.post('/',(ctx,next)=>{
    ctx.body = ctx.request.body

    // 存入数据库
})

router.get('/',(ctx,next)=>{
    ctx.body = '注册get';
})

module.exports = router;