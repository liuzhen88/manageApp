var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload',function(req,res){
	res.render('./upload',{});
});

router.get('/gdzj',function(req,res){
	res.render('./gdzj',{});
});

module.exports = router;
