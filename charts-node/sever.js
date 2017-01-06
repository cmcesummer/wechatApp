const ws = require('nodejs-websocket');

let server = ws.createServer(conn => {
	conn.on('text', data => {
		if(data == "stock"){
			setInterval(() =>{
				var arr = [];
				for(var i=0;i<6;i++){
				   var count = (Math.ceil((Math.random()*100))/100).toFixed(2);
				   arr.push(count);
				}
				var obj = {data:arr};
				conn.send(JSON.stringify(obj));
				console.log(JSON.stringify(obj));
			},2000);
 		}
	})
	
}).listen(8000,() => {
	console.log('open 8000')
});