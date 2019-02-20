// 第三方模块，必须先安装
const tar = require('tar');

// console.log(process.argv);
let parmas = process.argv[2];//--create=data,01home.js
// let dir = process.argv[2];
if(parmas.startsWith('--create')){
    let args = parmas.split('=')[1];
    args = args.split(',')
    // @压缩
    tar.c( //tar.create()
    {
        gzip: true,
        file: './zip/my-tarball.tgz' //压缩文件名
    },

    // 需要压缩的文件或文件夹
    args
    ).then(() => {
        console.log('压缩完成')
    });
}else if(parmas === '--extract'){
    // @解压
    tar.x(  // or tar.extract(
        {
        file: './zip/my-tarball.tgz',
        cwd:'./unzip'
        }
    ).then(()=> {
        console.log('解压完成')
    })
}



