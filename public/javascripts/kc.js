$(function(){
	var apk = "";
	var fileName = "";
	$("#upload").change(function(e){
		var file = e.target.files[0];
		fileName = file.name;
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(e){
			var source = this.result;
			apk = source;
		}
	});
	$("#submit").click(function(){
		var versionCode = $("#versionCode").val();
		var versionName = $("#versionName").val();
		var msg = $("#msg").val();
		if(!versionCode || !versionName || !msg){
			alert('请填写完整信息');
			return;
		}
		if(apk == ""){
			alert("请上传apk文件");
			return;
		}
		alert('准备上传');
		$.ajax({
			url:"http://120.25.69.229:7000/users/saveKc",
			type:'post',
			dataType:"json",
			data:{
				versionCode:versionCode,
				versionName:versionName,
				msg:msg,
				fileName:fileName,
				apk:apk
			},
			success:function(data){
				alert('上传成功');
				apk = "";
				window.location.reload();
			}
		})
	});
});