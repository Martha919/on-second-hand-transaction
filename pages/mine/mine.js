var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    /*this.data.num++;
    if(this.data.num%2==0){
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
    else{
      if (app.data.userInfo == null) {
        wx.showModal({
          title: '您尚未登录',
          content: "请先登录并完善个人信息",
          showCancel: false,
          success: function () {
            wx.switchTab({
              url: '/pages/my/my',
            })
          }
        })
      } else {
        wx.navigateTo({
          url: '/pages/add/add',
        })
      }
    }
    */
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})