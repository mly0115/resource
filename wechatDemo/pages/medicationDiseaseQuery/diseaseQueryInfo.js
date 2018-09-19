// drugQuery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    events: [
      
    ],
    input_value: "",
    hidden: true,
    hotSearch: [],
    hotHit: false,
    noDisease: false,
    haveDisease: false,
    timeout:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      hotSearch: [{ icode: 'a1', iname: '神经衰弱'},
        { icode: 'a2', iname: '偏头痛' },
        { icode: 'a3', iname: '高血压' },
        { icode: 'a5', iname: '痛风' },]
    })
  },
  getDiseaseInfo: function () {
    var that = this
    var diseasedata = [{
      icd_code: "1",
      icd_name: "1型病"
    }, {
      icd_code: "11",
      icd_name: "11型病"
    }]
    var searchName = that.data.input_value.trim()
    that.setData({
      haveDisease: false,
      noDisease: false,
    })
    if (searchName) {
      that.setData({
        hidden: !that.data.hidden,
        hotHit: true,
        events: diseasedata,
        hidden: true,
        haveDisease: true,
        noDisease: false,
      })
    } else {
      that.setData({
        hotHit: false,
        noDisease: true,
        hidden:true
      })
    }
  },
  getInputValue: function (e) {
    var that = this
    var value = e.detail.value.trim()
      that.setData({
        input_value : value
      })
      that.getDiseaseInfo()
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