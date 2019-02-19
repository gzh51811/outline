/**
 * path模块
 * 
 */
const path = require('path');

let currentPath = 'F:\\mydoc\\kphone\\class\\gz_h5_1811\\Nodejs\\src\\home.html'

let result = path.parse(currentPath);
console.log(result);