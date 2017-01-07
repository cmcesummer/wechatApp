const express = require ('express');

const formidable = require('formidable'); //处理form-data型post

const app = express();

const fs = require('fs');

//处理静态资源
app.use(express.static('./'));  //?  这里不是很懂用途

app.post('/postformdata', function(req, res) {
	var form = new formidable.IncomingForm(); //输入流
	form.encoding = 'utf-8';
	form.uploadDir = 'upload/' ; //  设置上传目录
	form.parse(req, function(err, fields, files) {  //解析请求    这里几个参数不是很懂
		if(err) {
			res.send(err);
			return
		}
		var avatarName = Date.now() + '.jpg';
		var newPath = form.uploadDir + avatarName; //新路径 时间戳为名字
		//fs.renameSync(oldPath,newPath)
		fs.renameSync(files.my_upload.path, newPath) 
		res.send({
			code:200,
			path:'http://127.0.0.1:8000/' + newPath
		})
	})
})

app.listen(8000, function() {
	console.log('port 8000 is open')
})

