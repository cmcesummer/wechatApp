
const express = require('express');

const fs = require('fs');

const app = express();

app.use(express.static('./'));

app.get('/listPage', (req, res) => {
	res.send({
		code: 200,
		data: [
			{img:'http://localhost:9999/image/1.jpg',title:'网购床垫种类繁杂不乏浑水摸鱼',content:'网上买电器，买家具，甚至买建材，都早已不是什么新鲜事，消费者对此似乎都已经习以为常了。'},
			{img:'http://localhost:9999/image/2.jpg',title:'鞋子摆放也有风水，快来看看吧！',content:'网上买电器，买家具，甚至买建材，都早已不是什么新鲜事，消费者对此似乎都已经习以为常了。'},
			{img:'http://localhost:9999/image/3.jpg',title:'书房风水布置有三宝：书桌+衣柜+桌椅',content:'网上买电器，买家具，甚至买建材，都早已不是什么新鲜事，消费者对此似乎都已经习以为常了。'},
			{img:'http://localhost:9999/image/4.jpg',title:'床垫保养小技巧，快来看看收藏吧！',content:'网上买电器，买家具，甚至买建材，都早已不是什么新鲜事，消费者对此似乎都已经习以为常了。'},
			{img:'http://localhost:9999/image/5.jpg',title:'购买沙发时需要谨慎，不然要吃大亏了啊',content:'网上买电器，买家具，甚至买建材，都早已不是什么新鲜事，消费者对此似乎都已经习以为常了。'}
		]
	})
})