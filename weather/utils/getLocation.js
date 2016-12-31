//wx.getLocation 方法给我们返回一个我们当前位置的经纬度信息。 如果成功，我们将信息传回给 callback， 如果失败我们给 callback 传回 false
function getLocation(callback) {
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
          console.log(res)
        callback(true, res.latitude, res.longtitude)
      },
      fail: function() {
        callback(false);
      }
    })
}

module.exports = {
  getLocation: getLocation
}