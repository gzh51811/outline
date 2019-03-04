const Router = require('koa-router');

const {verify} = require('../utils/token');

// 创建路由
var router = new Router();


/**
 * ctx
 */
router.post('/',async (ctx,next)=>{
   let {token} = ctx.request.body;

    //  验证token
    let res = verify(token);

    if(res){
        ctx.body = {
            status:200,
            msg:'success'
        }
    }else{
        ctx.body = {
            status:302,
            msg:'fail'
        }
    }
    
})

module.exports = router;