// pages/listPage/listPage.js
Page({
  data:{
    list:[],
    page: 1,
    bottomList:[],
    isLoading: true
  },
  listAjax(type,page) {
     let that = this;
      wx.request({
        url: 'http://127.0.0.1:9999/listPage/' + page,
        method: 'GET', 
        success: function(res) {
            let data = res.data.data;
            if(type == 'onLoad') {
              that.setData({
                  list: data
              })
            } else if(type == 'pullDown') {
                that.setData({
                    isLoading:false
                 })
                setTimeout(function(){
                  wx.stopPullDownRefresh();
                  that.setData({
                      list: data,
                      isLoading: true
                  })
                }, 1500)
            } else if(type == 'bottom') {
                that.setData({
                  isLoading:false
                })
                setTimeout(function(){
                  that.setData({
                     bottomList: data,
                     isLoading:true
                  })  
                },1000)
            }
        }
      })
  },
  onPullDownRefresh() {
    this.listAjax('pullDown',1);
  },
  onReachBottom() {
    let page = this.data.page + 1;
    let oldList = this.data.list;
    this.listAjax('bottom',page);
    let data = this.data.bottomList
    console.log(data);
    let newList = oldList.concat(data);
    console.log(newList);
    this.setData({
      page:page,
      list:newList
    })
  },
  onLoad(options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.listAjax('onLoad',1);
  }
})

