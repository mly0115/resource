// diseaseDrugDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  events:[],
  hidden:false,
  timeout: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var that = this
    
    var icd = options.icd
    var icd_name=options.icd_name
  
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
    
        that.setData({
          events: res.data.body,
          hidden:true
        })

        wx.reportAnalytics('diseasequery', {
          icd_code: icd,
          icd_name: icd_name
        })
      },
      fail: function (err) {
        console.log(err)
        that.setData({
          timeout: true,
          hidden: true
        })
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