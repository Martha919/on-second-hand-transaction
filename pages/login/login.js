// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit: function (e) {
    // console.log(e.detail.value);
    wx.request({
      // url: 'https://www.parcruz.site/api/face', //仅为示例，并非真实的接口地址
      url: app.globalData.url.login,
      data: {
        username: e.detail.value.no,
        password: e.detail.value.pwd
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        if (res.statusCode == 200) {
          //访问正常
          if (res.data.error == true) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000,
            })
          } else {
            //缓存
            wx.setStorage({
              key: "student",
              data: res.data.student
            });
            wx.showToast({
              title: "登录成功",
              icon: 'success',
              duration: 20000,
              success: function () {
                setTimeout(function () {
                  wx.switchTab({
                    url: '../teachers/teachers',
                  })
                }, 2000)
              }
            })
          }
        }

      }
    })
  }
})