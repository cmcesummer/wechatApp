// pages/upload/upload.js
Page({
  data:{
    imgList:[]
  },
  //上传图片
  uploadImg() {   //注意 这里不能使用 箭头函数  等我下周做一个es6的this总结提交到public的knowledge去
  // 箭头函数 中的　this 它会指向最近一层作用域内的 this
    var that = this ;
    console.log(this)
    wx.chooseImage({
      success: function(res){
        console.log(res)
        var tempFilePath = res.tempFilePaths;
        wx.uploadFile({
          url: 'http://localhost:8000/postformdata',
          filePath:tempFilePath[0],
          name:'my_upload',///这个前后台名称需要保持一致，别乱写。相当于字段么
          // header: {}, // 设置请求的 header
          formData: {
            'user':'test'    //？？？？？
          }, // HTTP 请求中其他额外的 form data
          success: function(res){
              console.log(res.data)
              var json = JSON.parse(res.data);
              var arr =  that.data.imgList;
              arr.push(json.path);
              that.setData({
                imgList:arr
              });
              wx.showToast({
                title:'success',
                icon:'success',
                duration:2000
              })
          },// success
          fail: function(err) {
              console.log(err);
          }
        })//uploadFile
      },// success
      fail: function(err) {
        console.log(err)
      }// fail
    })
  },

  //预览图片
  previewImg(e) {  //es6 方法可以这么写，解构赋值吧应该是叫
      const index = e.target.dataset.imgId  ;   //获取图片的id
      const that = this;
      console.log(index);
      wx.previewImage({
        current: that.data.imgList[index], // 当前显示图片的链接，不填则默认为 urls 的第一张
        urls: that.data.imgList,
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  } ,

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})