/**
 * 获取请求数据
 * * 回调函数：把所有的代码写到回调函数中
 * * Promise: 利用promise的特性，把代码写到外面
 */
const request = require('request');
const fs = require('fs');

// @回调函数
// request.post('http://www.jiuxian.com/newPeopleRecruitLayerType.htm',(err,res,body)=>{
//     console.log(body);

//     request.get('xxx.htm',()=>{
//         request.get('xxx.htm',()=>{

//         })
//     })
// });

// @Promise
// let pro = new Promise((resolve,reject)=>{
//     request.post('http://www.jiuxian.com/newPeopleRecruitLayerType.htm',(err,res,body)=>{
//         console.log(body);

//         // 改变promise的状态
//         resolve(body)
//     });
// })

// // 当promise的状态变成Resolved时执行then
// pro.then(res=>{
//     console.log('res:',res)
// });


// @ES7 async/await
// * await用于等待promise对象的结果，必须放在async函数中
// * async函数执行后得到一个promise对象，return值为promise的返回结果
// async/await出现的目的：以同步的代码实现异步操作
function getData(){
    return new Promise((resolve,reject)=>{
        request.post('http://www.jiuxian.com/newPeopleRecruitLayerType.htm',(err,res,body)=>{
            console.log(body);
    
            // 改变promise的状态
            resolve(body);

            console.log('请求到数据')
        });
    })
}

(async function(){
    // 等待promise对象的返回结果
    // 注意：await必须写在async函数中
    let res = await getData();

    console.log('end');
})();

