// detail-one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    events: [
     
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.drug_code)
    console.log(options.drug_name)
  },
  tttt: function (e) {
   var that = this
   that.setData({
     events: [
       {
         e_id: "one",
         date: "2017-08-16",
         title: "见证药品“国家谈判”成效"
       },
       {
         date: "2017-08-16",
         title: "药物临床试验报告 造假最高可判五年"
       }
     ]
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