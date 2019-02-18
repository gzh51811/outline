/**
 *  @模块化开发
 *   1.require.js(AMD：异步)
 *      let result = require(['xxx.js'],(res)=>{//保证xxx.js引入完毕})
 *      console.log(result)
 *   2.nodejs(CommonJS：同步)
 *      let res = require('xxx.js');
 *      console.log(res)
 *   3. seaJS（CMD：异步）
 *   4. ECMAScript Module
 */
// 引入js/common模块
let {username,age,gender} = require('./js/common');//解构

console.log('index 入口文件',username,age,gender)