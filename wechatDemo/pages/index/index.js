//index.js
//获取应用实例
var app = getApp()


Page({
  data: {
    motto: 'Hello World',
    imgUrls: [
      //'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://pic.58pic.com/58pic/14/01/50/88A58PIC3si_1024.jpg',
      'http://img67.zyzhan.com/9/20170914/636409789391838513382.jpg',
      'http://img06.tooopen.com/images/20161031/tooopen_sy_184239997126.jpg'
      //'../image/homepage3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    hidden: true,
    circular:true,
    events: [
      {
        e_id: "news",
        //date: "2017-08-16", 
        title: "信息提示FAQ"
      }
    ],

    //log
    logos: [{
      e_url:"../drugDetailQuery/drugQuery",
      image: "../image/logo1.png",
      title: "药品查询"
    }, {
      e_url: "../medicationDiseaseQuery/diseaseQueryInfo",
      image: "../image/logo2.png",
      title: "疾病用药查询"
      }, {
        e_url: "../drugInteraction/drugInteraction",
        image: "../image/logo3.png",
        title: "相互作用"
      }
    ],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  tapName: function (event) {
    console.log(event.currentTarget.id)
     wx.navigateTo({
       url: event.currentTarget.id
     });
  },
  getCode2: function() {
    var that = this;    
    wx.request({
      url: '', 
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          motto: res.data.code
        })
      }
    })
  }
})
