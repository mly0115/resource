// diseaseDrugDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    events: [],
    timeout: false,
    hidden: false,
    diseaseDatas: [],
    noDisease: false,
    haveDisease: true,
    inputData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.switchTab({
      url: '../clinicalPathway/clinicalPathwayInfo',
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
    // wx.setNavigationBarTitle({ title: classify_name })
    
    if (that.data.inputData == null || that.data.inputData==""){
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
            diseaseDatas: res.data.body,
            hidden: true,
            haveDisease: true,
            noDisease: false,
          })
        },
        fail: function (err) {
          console.log(err)
          that.setData({
            timeout: true,
            hidden: true,
            haveDisease: false,
            noDisease: false,
          })
        }

      })

    }
 

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

  },
  getInputValue: function (e) {
    var that = this
    var value = e.detail.value.trim()
    var diseaseData = that.data.diseaseDatas
    var searchData = new Array()
    var sdiseaseData

    that.setData({
      inputData:value
    })

    if (value != null && value != "") {
      for (var i = 0; i < diseaseData.length; i++) {
        sdiseaseData = diseaseData[i]
        if (sdiseaseData.clinicalPathwayName.indexOf(value) >= 0) {
          searchData.push(sdiseaseData)
        }
      }

      if (searchData.length > 0) {
        that.data.events = null
        that.setData({
          events: searchData,
          noDisease: false,
          haveDisease: true,
        })
      } else {
        that.setData({
          events: [],
          noDisease: true,
          haveDisease: false
        })
      }

    } else {

      var restDiseaseData = that.data.diseaseDatas
      that.setData({
        events: restDiseaseData,
        haveDisease: true,
        noDisease: false,
      })
    }



    // that.setData({
    //   input_value: value
    // })

  }
})