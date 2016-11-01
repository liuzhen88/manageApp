var express = require('express');
var router = express.Router();
var service = require('../service/save');
var gdzjService = require('../service/gdzj');
var kcService = require('../service/kcService');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/saveApp',function(req,res){
	service.saveApp(req,res,function(data){
		res.send(data);
	});
});

router.post('/saveGdzj',function(req,res){
	gdzjService.saveApp(req,res,function(data){
		res.send(data);
	});
});

router.post('/saveKc',function(req,res){
	kcService.saveApp(req,res,function(data){
		res.send(data);
	});
});

router.get('/getUploadData',function(req,res){
	service.getUploadData(req,res,function(data){
		res.send(data);
	});
});

router.get('/getUploadDataByGdzj',function(req,res){
	gdzjService.getUploadData(req,res,function(data){
		res.send(data);
	});
});

router.get('/getUploadDataByKc',function(req,res){
	kcService.getUploadData(req,res,function(data){
		res.send(data);
	});
});

module.exports = router;
