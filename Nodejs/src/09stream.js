/**
 * Stream数据流
 * 读取流：fs.createReadStream(path)
 * 写入流：fs.createWriteStream(path)
 */

 const fs = require('fs');

 //
//  fs.readFile('laoxie.txt',(err,data)=>{
//     //  Buffer：类似与数组的二进制数据
//      console.log(data);
//  });

// 以数据流的方式读取文件
let readerStream = fs.createReadStream('./data/region.json');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

let data = '';
readerStream.on('data',chunk=>{
    data +=chunk.toString()
    // console.log('chunk:',chunk.toString());
})

readerStream.on('end',()=>{
    console.log('end',data);
})


// fs.writeFile('jingjing2.txt','大家好，我想静静',()=>{

// })

var writerStream = fs.createWriteStream('jingjing2.txt');

// 使用 utf8 编码写入数据
writerStream.write('hello','UTF8');
writerStream.write('jingjing','UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});