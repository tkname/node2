const express =require('express');
const tongji=require('../../controller/tongji');

const router=express.Router();

router.get('/',(req,res)=>{
	res.send("wanda server");
})

/**
*
*获取事件分析数据
*
**/

router.get('/custom',tongji.custom);
router.get('/visit',tongji.visit);

module.exports=router;