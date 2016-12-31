//index.js
//获取应用实例
var getLocation = require('../../utils/util.js');
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    location:{}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  location: function() {
    var that = this;
    console.log(this.data.location.latitude,this.data.location.longitude)
    wx.openLocation({
      latitude: that.data.location.latitude, // 纬度，范围为-90~90，负数表示南纬
      longitude: that.data.location.longitude // 经度，范围为-180~180，负数表示西经
    })
  },
  openmap:function() {
    wx.chooseLocation({
      success: function(res){
        console.log(res)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        console.log(res)
        that.setData({
          location:{
           latitude:res.latitude,
           longitude:res.longitude
          }
        })
      }
    })
  }
})
