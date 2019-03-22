export default (date,fmt='YYYY-MM-DD')=>{
    date = new Date(date);
    // 预订字符对应时间
    var o = {
        "M+": date.getMonth() + 1, //月份 12
        "D+": date.getDate(), //日 21
        "h+": date.getHours(), //小时 17
        "m+": date.getMinutes(), //分 3
        "s+": date.getSeconds(), //秒 20
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };

    // 匹配年份
    // 年份比较特殊，所以单独处理
    // test方法如果返回true，RegExp.$1得到匹配的字符
    if(/(Y+)/.test(fmt)){
        // 得到fmt字符串中Y字符对应的年份
        // YYYY => 2017
        // YY => 17
        var res = String(date.getFullYear()).substr(4 - RegExp.$1.length);
                                      // '2017'.substr(4-'YYYY'.length)

        // 替换年份
        fmt = fmt.replace(RegExp.$1,res);
    }

    for(var str in o){
        // 创建正则时设定分组，以便获取匹配到的字符
        // RegExp.$1
        var reg = new RegExp('(' + str + ')');//  /(M+)/

        // 如果有匹配则把fmt中匹配到的字符替换成o中对应的时间，根据fmt中的字符决定是否补0
        // YYYYMMDD => 20170813
        // YYYY-MM-DD hh:mm:ss => 2017-08-13 20:12:30
        if(reg.test(fmt)){
            // 得到匹配字符对应的时间
            var res = RegExp.$1.length>1 ? ('00' + o[str]).substr(String(o[str]).length) : o[str];
            fmt = fmt.replace(RegExp.$1,res);
        }
    }

    return fmt;
}