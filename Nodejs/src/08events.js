/**
 * 事件模块
 * * 创建实例：events.EventEmitter()
 * * 自定义事件：on()
 * * 触发事件：emit()
 */
const events = require('events');

// 实例化一个事件实例 
let eventEmitter = new events.EventEmitter();

// 绑定事件及事件的处理程序
eventEmitter.on('laoxie',()=>{
    console.log('hello laoxie');

    eventEmitter.emit('jingjing');
});

eventEmitter.on('jingjing',()=>{
    console.log('hello laoxie');
});

setTimeout(()=>{
    // 请求数据成功后触发事件
    eventEmitter.emit('laoxie');
},5000);
