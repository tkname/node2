/**
*程序主入口
*@author test
*
**/
const express = require('express'); //调用exrpess框架
const colors=require('colors');		//控制台色彩
const bodyParser=require('body-parser'); //设定类型
const multer=require('multer');			 //处理表单
const config=require('./config');		//配置文件
const db=require('./database');			//数据库链接
	
var app = express();

// console.log(Config.port);

var server = app.listen(config.port, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s",  Config.port)
 
})