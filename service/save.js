var redisServer = require('./redis');
var fs = require('fs');

function saveApp(req, res, cb){
	var versionCode = req.body.versionCode;
	var versionName = req.body.versionName;
	var msg = req.body.msg;
	var source = req.body.apk;
	var fileName = req.body.fileName;
	var base64Data = source.replace(/^data:\/\w+;base64,/, "");
	var dataBuffer = new Buffer(base64Data, 'base64');	
	fs.writeFile(fileName,'/',function(err){
		if(err){
			cb(err);
		}else{
			var obj = {
				versionCode:versionCode,
				versionName:versionName,
				msg:msg,
				apk:'http://120.25.69.229:9000/manageApp/'+fileName
			};
			var arr = [];
			arr.push(obj);
			redisServer.get('app',function(err,docs){
				if(err){
					console.log(err);
					cb(err);
				}else{
					var data = JSON.parse(docs);
					if(!docs || docs.length == 0){
						redisServer.set('app',JSON.stringify(arr),function(err){
							if(err){
								console.log(err);
								cb(err);
							}else{
								var context = {'code':'200','message':'ok'};
								cb(context);
							}
						})
					}else{
						var newArr = docs.concat(arr);
						redisServer.set('app',JSON.stringify(newArr),function(err){
							if(err){
								console.log(err);
								cb(err);
							}else{
								var context = {'code':'200','message':'ok'};
								cb(context);
							}
						});
					}
				}
			})
		}
	})
}

module.exports = {
	saveApp:saveApp
}