var express = require('express');
var router = express.Router();
var service = require('../service/save');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/saveApp',function(req,res){
	service.saveApp(req,res,function(data){
		res.send(data);
	});
});

module.exports = router;
