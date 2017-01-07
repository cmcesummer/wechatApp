Page({
    toindex:() => {
        wx.navigateTo({   
            url: '../index/index'
        })
    },
    tocharts:() => {
        wx.navigateTo({
            url:'../wcharts/wcharts'
        })
    },
    toupload: () => {
        wx.navigateTo({
          url: '../upload/upload'
        })
    }

})