/**
 * 爬虫
 * 关键：分析目标页面结构
 * 正则表达式
 */
const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path')

// request('http://img.zcool.cn/community/018d4e554967920000019ae9df1533.jpg@900w_1l_2o_100sh.jpg')
// // 下载图片
// .pipe(fs.createWriteStream('./download/test.jpg'))

request('https://www.zcool.com.cn/',(err,res,body)=>{
    // console.log(body);
    let $ = cheerio.load(body)
    
    $('.slide-container img').each((idx,ele)=>{
        let imgurl = $(ele).attr('src');
        imgurl = imgurl.replace(/@[a-z\d]+$/,'');
        let obj = path.parse(imgurl);
        console.log(imgurl);
        request(imgurl).pipe(fs.createWriteStream(`./download/${obj.name}${obj.ext}`));
    })
});

// async/await写法
function spider(){
    return Promise((resolve,reject)=>{
        request('https://www.zcool.com.cn/',(err,res,body)=>{
            // 请求失败
            if(err){
                return reject(err);
            }
            
            resolve(body);
        });
    })
}

/**
 * try{}catch(err){}
 */
(async ()=>{
    try{
        // await得到promise对象状态为Resolved时的结果
        let data = await spider()
    }catch(err){
        console.log(err);
    }

})();