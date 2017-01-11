var redis = require("redis");

var client = redis.createClient("6379",'120.25.69.229');

client.auth('liuzhen88');
client.on('error',function(err){
	console.log("redis连接错误");
	console.log(err);
});

client.select('4',function(err){
	if(err){
		console.log("数据库连接db3失败");
		console.log(err);
	}
	console.log("client redis db4 is success");
});

module.exports = client;