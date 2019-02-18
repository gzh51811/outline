// 一些代码
console.log('common公共文件');

var username = 'laoxie';

// 暴露接口
// module.exports的优先级比exports高
module.exports = {
    // 对象属性的简写
    // 把变量名作为属性名，把变量值作为属性值
    username,
    age:18,

    // 对象方法的简写
    // 等效于：get:function(){}
    get(){
        return username;
    }
}

// exports.username = username;
// exports.age = 18;
// exports.gender = '男';