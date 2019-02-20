/**
 * 压缩与解压
 * 压缩: zlib.createGzip()
 * 解压: zlib.createGunzip()
 */
const zlib = require('zlib');
const fs = require('fs');

// @压缩
// 1. 读取需要压缩的文件
// fs.createReadStream('jingjing2.txt')  //返回数据流
// .pipe(zlib.createGzip()) //2.压缩文件
// .pipe(fs.createWriteStream('jingjing.zip')) //3.输出压缩后的文件


// @解压
// 1.读取压缩包
fs.createReadStream('jingjing.txt.zip')

// 解压
.pipe(zlib.createGunzip())

// 输出
.pipe(fs.createWriteStream('./unzip/jingjing3.txt'));