// express_cookie.js 文件
var express      = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())
 
app.get('/', function(req, res) {
	req.cookies["name"]="xiaoming";
  console.log("Cookies: ", req.cookies)
})
 
app.listen(8081)

console.log("启动成功");