// 引入模块
// 解析请求参数
const qs = require('querystring');

let str = 'firstname=laoxie&url=http%3A%2F%2Flaoxie.com&lastname=xie&';

let params = qs.parse(str);
console.log('params:',params);

let obj = {firstname:"laoxie", url:"http://laoxie.com", lastname: 'xie', passowrd: 123456};

let search = qs.stringify(obj);
console.log('search:',search);
