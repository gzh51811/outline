const Router = require('koa-router');

const db = require('../db');

const token = require('../utils/token');

// 创建路由
var router = new Router();


/**
 * ctx
 */
router.post('/',async (ctx,next)=>{
    // 解构
    let {username,password,mdl} = ctx.request.body;

    let res = await db.find('user',{username,password});

    res = res[0];

    if(res){
        // 登录成功：发令牌
        let _token = token.create(username);

        ctx.body = {
            _id:res._id,
            username:res.username,
            gender:res.gender,
            regtime:res.regtime,
            token:_token
        }
    }else{
        ctx.body = {
            code:100,
            msg:'fail'
        }
    }

    

    // 存入数据库

})

module.exports = router;