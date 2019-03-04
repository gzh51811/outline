/**
 * jsonwebtoken
 * 生成（加密） jwt.sign() 
 * 验证（解密） jwt.verify()
 * 
 */

const jwt = require('jsonwebtoken');

let privateKey = 'laoxie18';

// 生成token
exports.create = (username,expiresIn='1h')=>{
    // username: 用于加密的用户名
    // expiresIn: token有效期(单位: s)，默认2小时
    // privateKey：用于加密的私钥
    let token = jwt.sign({username}, privateKey, {
        expiresIn
    });
    return token;
}

// 验证token
exports.verify =(token)=>{
    let res = false;
   try{
       res = jwt.verify(token, privateKey);//得出解密后的结果Object:{username:xxx...}
   }catch(err){
       res = false;
   }

   console.log(res);

   return res;
}