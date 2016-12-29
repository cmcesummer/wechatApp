//index.js
//获取应用实例
var app = getApp() //这句话就是获取小程序实例的意思
Page({
  data: {  //页面上的数据
    motto: 'Hello World',
    userInfo: {},
    myText: 'hehe1',
    myText2:'hehe2',
    arrPeople:[{name:'sb1',age:11},{name:'sb2',age:12},{name:'sb3',age:13}],
    requestAjax: '',
    myImg: null,
    objectArray: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'},
    ],
  },
  switch: function(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat (this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  //事件处理函数  bindbindtap 是点击事件
  bindViewTap: function() {
    wx.navigateTo({   //微信内置函数，用于页面跳转。
      url: '../logs/logs'
    })
  },

  bindtapButton: function() {
    this.setData({    //this.setData 跟react类似 重设 mymyText的值
      myText: '123'
    })
    var that = this;
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        that.setData({
          myImg: res.tempFilePaths
        })
      }
    })
  },

  onLoad: function () {    //页面加载完成后调用的方法

    console.log('onLoad')
    var that = this  // this.setDate() this的指向

    wx.request({
      url: 'https://raw.githubusercontent.com/jiangzy27/how_to_react/master/score.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res.data);
        that.setData({requestAjax:res.data.data});
      },
      fail: function() {
        // fail
      }
    })

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){  //这个是在app.js全局配置的函数，表示获取用户信息。
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

  }
})
