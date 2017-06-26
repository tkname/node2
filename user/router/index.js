/**
*
*跟路由处理
*$type {Object}
**/

const express=require('express');
const hocodo=require('./hocodo');
const wanda=require('./wanda');
const houma =require('./huoma');

const router=express.Router();

//设置跨域访问
router.all('*',(req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
	res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
	res.header('X-Powered-By','codecook');
	next();
});

router.get('/',(req,res)=>{
	res.send('created by: codecook');
});

router.use('/hocodo',hocodo);
router.use('/wanda',wanda);
router.use('/houma',houma);

module.exports=router;