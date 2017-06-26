/**
*
*路由
*
**/

const express=require('express');

const router=express.Router();

router.get('/',(req,res)=>{
	res.send('Hocode server');
})

module.exports=router;