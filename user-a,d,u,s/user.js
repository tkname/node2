var express = require('express');
var app = express();
var fs=require('fs');

// console.log(app);

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/select', function (req, res) {
   // res.sendFile( __dirname + "/" + "select" );
	fs.readFile("user.txt",function(err,data){
		if(err){
			console.log(data.toString());
		}

		res.json(data);
		console.log(data[0].id);
		// for(var i=0;i<data.length;i++){

		// }
	})
})


var port=8082;
//创建请求 
var server=app.listen(port,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("启动成功"+port);
})