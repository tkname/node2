var express = require('express');
var app = express();
var fs=require('fs');

// console.log(app);

// app.get('/index.html', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.html" );
// })

app.use(express.static('./user-a,d,u,s'));
app.use(express.static('public'));

// app.get('/select', function (req, res) {
//    // res.sendFile( __dirname + "/" + "select" );
// 	fs.readFile("user.txt",function(err,data){
// 		if(err){
// 			console.log(data.toString());
// 		}

// 		res.json(data);
// 		console.log(data[0].id);
// 		// for(var i=0;i<data.length;i++){

// 		// }
// 	})
// })


// var port=8082;
// //创建请求 
// var server=app.listen(port,function(){
// 	var host=server.address().address;
// 	var port=server.address().port;
// 	console.log("启动成功"+port);
// })


var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})