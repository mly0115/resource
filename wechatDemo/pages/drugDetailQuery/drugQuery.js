// drugQuery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    events: [
      
    ],
    hidden:true,
    hotSearch:[],
    hotHit:false,
    noDrug:false,
    haveDrug:false,
    timeout:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      hotSearch:[{dcode:'00',pname:'百多邦',dname:'莫匹罗星软膏'},
      {dcode:'01',pname:'开瑞坦',dname:'录雷他定片'},
      {dcode:'02',pname:'拜新同',dname:'硝苯地平控释片'},
     ]
    })
  },
// 获取输入框内容
  getInputValue: function (e) {
    var that = this
    var value = e.detail.value.trim()
    console.log('blurValue=' + e.detail.value)
    that.setData({
      input_value: value
    })
    that.getDrugInfo()
  },
  // 搜索结果
  getDrugInfo: function () {
    var that = this
    var searchName = ""
    searchName = that.data.input_value
   var drugdata = [
     {
       drug_code:'0',
       drug_name:'1型药'
     },
     {
       drug_code: '1',
       drug_name: '2型药'
     }
   ]
    // 将搜索结果列表和未找到提示隐藏--haveDrug：搜索结果列表；noDrug：未找到提示
    that.setData({
      haveDrug: false,
      noDrug: false,
    })
    // 如果输入框内容不为空，请求后台，否则显示
  if (searchName!='') {
        that.setData({
          hidden:!that.data.hidden,
          hotHit: true,
          haveDrug: true,
          noDrug: false,
          timeout: false,
          events: drugdata,
          hidden: true

        })
  }else{
      that.setData({
        hotHit: false,
        noDrug: true,
        events: [],
        hidden: true
      })
  }
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