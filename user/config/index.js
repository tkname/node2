/****
*App配置信息
*@type{object}
**/

const Config={
	port:3000, //服务器运行端口
	db:{//数据库配置信息
		minisite:{
			host:'localhost',
			user:'root',
			pass:'root',
			database:['test','web']
		}
	}
}

module.exports=Config;