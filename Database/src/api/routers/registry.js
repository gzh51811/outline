const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */
router.post('/',async (ctx,next)=>{
    // 解构
    let {username,password,gender} = ctx.request.body;

    let data = {username,password,gender,regtime:Date.now()}
    let res = await db.insert('user',data);

    ctx.body = res

    // 存入数据库

})

// 判断用户名是否存在
router.get('/',async (ctx,next)=>{
    let {username} = ctx.query;

    let res = await db.find('user',{username});console.log(ctx.query,username,res)

    if(res.length>0){
        ctx.body = 'no'
    }else{
        ctx.body = 'yes'
    }
})

module.exports = router;