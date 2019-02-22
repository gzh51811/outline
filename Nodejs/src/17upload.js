const path = require('path');
const fs = require("fs");
const express = require("express");
// const bodyParser = require('body-parser');//urlencoded,json
const multer = require('multer');

// 创建磁盘存储引擎（自定义存储方式）
var storage = multer.diskStorage({
    // 设置存储目录，// 如果目录不存在，则报错
    destination: function (req, file, cb) {
        try{
            fs.accessSync('./uploads')
        }catch(err){
            fs.mkdir('./uploads')
        }
        
        cb(null, './uploads')
    },

    // 自定义文件名
    filename: function (req, file, cb) {
        console.log('file',file);
        let ext = path.extname(file.originalname)
        cb(null, file.fieldname + '-' + Date.now() + ext)
    }
})

// 配置参数
const upload = multer({
    // 上传文件的保存路径,路径不存在会自动创建
    // dest: 'uploads/' 
    storage
});


const app = express();

// 静态资源服务器
app.use(express.static('./'));

// 引入配置文件中的端口
const {PORT} = require('./config.json');


// 路由
app.post('/upload',upload.array('goods', 5),(req,res)=>{
    res.send('上传文件成功');
})

// 监听端口
app.listen(PORT,()=>{
    console.log('server is running on port %s',PORT);
});