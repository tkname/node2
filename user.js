var express=require('express');
var app=express();
var fs=require('fs');

var user={
	"user4":{
		"name":"mohit",
		"password":"password4",
		"profession":"reacher",
		"id":4
	}
}

app.get('/listUsers/:id',function(req,res){
	fs.readFile(__dirname+"/"+"data/user.json",'utf8',function(err,data){
		data=JSON.parse(data);
		// data["user4"]=user["user4"];
		// data=data["user"+req.params.id];
		 delete data["user" + req.params.id];
		console.log(data);
		res.end(JSON.stringify(data));
	});
})

var server=app.listen(8081,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("应用实例，访问地址为http://%s:%s",host,port);
})