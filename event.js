//引入事件模块
var events=require('events');

//创建eventEmitter 对象
var eventEmitter=new events.EventEmitter();

//创建事件处理程序
var connectHander=function connected(arr){
	console.log("链接成功"+arr);
	eventEmitter.emit("data");
}

//绑定事件处理程序
eventEmitter.on("start",connectHander);

//使用匿名函数绑定 data 事件
eventEmitter.on("data",function(){
	console.log("数据接收成功");
});

//事件触发
eventEmitter.emit("start","你说你说你说");


console.log("程序执行over");

