var express=require('express');
var app=express();

var mysql= require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});

connection.connect();

 
 //查询
app.get('/user/select',function(req,res){
  connection.query('SELECT * FROM  `user` LIMIT 0 , 30', function (error, results, fields) {
    if (error) throw error;
    res.json(results); //数据发送
  });

})

//增加
app.get('/user/add',function(req,res){
  connection.query('INSERT INTO `user`(`name`, `age`) VALUES ("xxx",20)', function (error, results) {
    if (error) throw error;
    res.json(results); //数据发送
  });
})


var server=app.listen(8081,function(){
  var host=server.address().address;
  var port=server.address().port;
  console.log("启动成功");
})

