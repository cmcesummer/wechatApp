//login.js
Page({
    data:{
        userName: '',
        userPass: ''
    },
    formSubmit: function(e) {
        console.log(e.detail.value);
        let data = e.detail.value;
        if(data.userName && data.userPass) {
            wx.setStorageSync('userName',data.userName);
            wx.setStorageSync('userPass', data.userPass);
        }
       
    },
    onLoad: function() {
        let name = wx.getStorageSync('userName');
        let password = wx.getStorageSync('userPass');
        console.log(password)
        if(name) {
            this.setData({
                userName: name
            })
        }
        if(password) {
            this.setData({
                userPass: password
            })
        }
    }
})