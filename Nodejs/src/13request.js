const http = require('http');
const https = require('https');
const request = require('request');//类似于jquery的ajax

// https.get('https://cnodejs.org/api/v1/topics?page=1&limit=10',(res)=>{
//     // res: reponse，是一个stream实例

//     let data = '';
//     res.on('data',(chunk)=>{
//         console.log('chunk:',chunk)

//         data += chunk;
//     });

//     res.on('end',()=>{
//         console.log('end:',data)
//     })
// })

request.get('https://cnodejs.org/api/v1/topics?page=1&limit=10', (error, response, body) => {
    // error: 错误信息，默认null
    // response: 相应对象
    // body: 请求响应内容
    console.log(body)
})