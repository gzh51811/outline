/**
 * 文件系统操作
 * fs模块
 *  * readFile()
 *  * readFileSync()
 *  * writeFile()   写入文件，文件不存在则自动创建
 *  * appendFile()  追加内容（在原来内容的后面插入内容）
 */
const fs = require('fs');

console.log('start');
// 读取文件内容
// fs.readFile('laoxie.txt',(err, data)=>{
//     if(err){
//         console.log('读取文件错误');
//         return;
//     }
    
//     console.log(data.toString());
// });
let data = fs.readFileSync('laoxie.txt');
console.log(data.toString());



// 写入文件内容
//每次写入文本都会覆盖之前的文本内容
// fs.writeFile('about.txt', '有啥不一样',  err =>{ //会覆盖原来的内容
fs.appendFile('./data/about.txt', '，有啥不一样',  err =>{//追加到原来内容的后面
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
 });

//  fs.readFile('./data/city.json',(err,data)=>{
//     console.log(JSON.parse(data.toString()));
//  })

// 解构对象中的data属性并赋值给citylist变量
 let {data:citylist} = require('./data/city.json');
 console.log(citylist)
console.log('end');