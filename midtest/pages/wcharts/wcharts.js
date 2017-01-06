// pages/wcharts/wcharts.js
const wxCharts = require('wxCharts.js');
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.connectSocket({
      url: "ws://127.0.0.1:8000",
      success: function(res) {
        console.log('success')
      }
    });
    wx.onSocketOpen(function() {
      wx.sendSocketMessage({
        data: 'stock',
        success: function(res){
          console.log('open')
        }
      })
    });
    wx.onSocketError(function() {
      console.log('fail')
    });
    wx.onSocketMessage(function(data) {
      console.log(data)
      data = JSON.parse(data.data);
      console.log(data);
      //canvas
      new wxCharts({
          canvasId:'lineCanvas',
          type: 'line',
          categories:['2012', '2013', '2014', '2015', '2016', '2017'],
          series:[{
            name: '成交量1',
            data: data.data,//websocket接收到的数据;
            format: val => {
              if(typeof val =='string') {
                val = parseFloat(val)
              };
              return val.toFixed(2) + 'W';
            }
          },{
             name: '成交量2',
             data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
             format: function (val) {
              return val.toFixed(2) + '万';
             }
          }] ,//series
          yAxis: {
            title: '成交金额 (万元)',
            format: function (val) {
              return val.toFixed(2);
            },
            min: 0
          },
          width:320,
          height:200
      })//wxCharts

    })//onSocketMessage


  }//onLoad


})//Page