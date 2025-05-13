const EventEmitter = require('events');

// 创建事件发射器实例
const eventEmitter = new EventEmitter();

// 定义事件处理函数
function onEvent(data) {
    console.log(`事件被触发，数据为：${data}`);
}

// 注册事件监听器
eventEmitter.on('myEvent', onEvent);

// 触发事件
eventEmitter.emit('myEvent', '这是传递给事件的参数');