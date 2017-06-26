/**
*
*项目接口
*
**/

const Tongji={
	/**
	*获取事件分析数据
	*query 参数
	*siteid 查询站点ID
	**/
	custom(req,res){
		const siteid=req.query.siteid;
		const sendData={
			code:200,
			message:'查询成功',
			data:[],
		};

		if(!siteid){
			sendData.code=500;
			sendData.message='请提供站点ID';
			res.json(sendData);
			return ;
		}

		const page =req.query.page || 0;
		const pageSize=req.query.pageSize || 10;

		let 

	}
}