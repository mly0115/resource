// detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drug_name:"",
    product_name:"",
    events: [],
    timeout:false,
    hidden:false,
    haveNet:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var drug_code = options.drug_code
    var drug_name = options.drug_name
    var product_name = options.product_name
    
    if (product_name){
      that.setData({
        drug_name: drug_name,
        product_name: product_name
      })
    }else{
      that.setData({
        drug_name: drug_name,
      })
    }
    var detaildata=[
      {
        

      }
    ]
    that.setData({
      events: detaildata,
      hidden: true
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