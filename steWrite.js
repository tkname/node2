var fs=require("fs");
var zlib=require("zlib");

var data="this is shuju1321325";

//创建一个可读流
var readerStream=fs.createReadStream("input.txt");

//创建一个可以写入的流，写入到文件output.txt
var writeStream=fs.createWriteStream('input2.txt');

console.log(data.toString());

//使用utf8编码写入数据  数据写入
// writeStream.write(data,'utf8'); 

//管道读写操作
//读取input.txt文件内容，并将内容写入到ouput.txt文件中
readerStream.pipe(writeStream);


//标记文件末尾
// writeStream.end();

readerStream.on("error",function(err){
	console.log(err.stack);
})

console.log("执行完毕");
