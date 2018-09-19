// diseaseDrugDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    events: [],
    timeout: false,
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.switchTab({
      url: '../drugDirectory/drugDirectoryInfo',
      success: function (e) {
        var page = getCurrentPages().pop()
        if (page == undefined || page == null) {
          return
        }
        page.onShow()
      }
    }) 
    

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
    var that = this
    wx.request({
      url: '',
      method: 'POST',
      dataType: 'json',
      data: {
        head: "",
        body: ""
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
          // console.log(res)
        that.setData({
          events: res.data.body,
          hidden: true,
          timeout: false
        })
      },
      fail: function (err) {
        console.log(err)
        that.setData({
          timeout: true,
          hidden: true,
          events:[]
        })
      }

    })

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