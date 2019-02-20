/**
 * Stream数据流
 * 读取流：fs.createReadStream(path)
 * 写入流：fs.createWriteStream(path)
 */

 const fs = require('fs');

//  创建读取流
let readerStream = fs.createReadStream('laoxie.txt');

// 创建一个可写流 
var writerStream = fs.createWriteStream('./data/laoxie.txt');

 // 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);