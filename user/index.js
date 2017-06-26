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
const router=require('./router');
	
var app = express();

/*
*
*db middleware
*
*/
app.use((req,res,next)=>{
	req.getConnection=db.getConnection;
	next();
})

app.use(express.static('./public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


/**
*
*路由挂载
*@type{[type]}
**/

// app.user('/api',router);

//捕获404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
app.use((err,req,res,next)=>{
	res.locals.message=err.message;
	res.locals.error=req.app.get('env')==='development'?err:{};
	res.status(err.status||500);
	res.send(err.message);
})


// var server = app.listen(config.port, function () {
 
//   var host = server.address().address
//   var port = server.address().port
 
//   console.log(`应用实例，访问地址为 http:, ${config.port}`.red)
 
// })


const server =app.listen(config.port,()=>{
	console.warn(`app listening at port:${config.port}`.yellow);
});