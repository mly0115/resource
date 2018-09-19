//获取应用实例
var app = getApp()
// import tempObj from '../templates/drug_item'
//index.js
//获取应用实例
// var indexObj = {
//   onShow() {
//     console.log("onShow")
//   }
// }
// indexObj["selectDrugName"] = tempObj.selectDrugName
// Page(indexObj)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaIndex: 0,
    // area: ['北京', '广州', '上海', '深圳'],
    inputA_code: "",
    inputA_value: "",
    inputB_code: "",
    inputB_value: "",
    flag: "0",//0-标识药物A，1-标识为药物B
    events: [
    ],
    result:[],
    hidden: true,
    resultDisplay1:false,//单药相互作用分析结果展示
    resultDisplay2: false,//两药相互作用分析结果展示
    drugBsearch:false,//B药品搜索
    timeout:false,
    noDrug:false,
    haveDrug: false
  },
  addDrugSearch:function(){
    var that = this
    that.setData({
      drugBsearch:true,
      inputB_code: "",
      inputB_value: "",
    })
  },
  subDrugSearch:function(e){
    var that = this
    that.setData({
      drugBsearch: false,
      inputB_code: "",
      inputB_value: "",
      inputA_code: "",
      inputA_value: "",
    })
  },
  getInputAValue: function (e) {
    var that = this
    var value = e.detail.value.trim()
    that.setData({
      inputA_value: value
    })
    console.log(that.data.inputA_value)
    that.getDrugAInfo()
  },
  getInputBValue: function (e) {
    var that = this
    var value = e.detail.value.trim()
    that.setData({
      inputB_value: value
    })
    that.getDrugBInfo()
  },
  selectDrugName:function(e){
    var that = this
    that.setData({
      hidden: true
    })
    var drug_code = e.dtail
    var drug_code  = e.currentTarget.dataset.code
    var drug_name = e.currentTarget.dataset.name
    console.log('drugcode is :' + drug_code)
    console.log('drug_name is :' + drug_name)
    if(that.data.flag == 1){
      that.setData({
        inputB_code: drug_code,
        inputB_value: drug_name,
        events: []
      })
    }else{
      that.setData({
        inputA_code: drug_code,
        inputA_value: drug_name,
        events: []
      })
    }
  },
  getDrugAInfo: function () {
    var that = this
    var searchName = that.data.inputA_value.trim()
    //console.log()
    
    that.setData({
      hidden: false,
      noDrug: false,
      resultDisplay1:false,
      resultDisplay2: false,
      haveDrug:false,
      timeout: false
    })
    if (searchName != ''){
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
        if (res.data.body.length != 0) {
        that.setData({
          events: res.data.body,
          flag: '0',
          hidden: true,
          noDrug: false,
          haveDrug: true
        })
        } else {
          that.setData({
            events: res.data.body,
            flag: '0',
            hidden: true,
            noDrug:true,
            haveDrug:false,
            inputA_value:"",
            inputA_code:"",
          })
        }
        console.log(that.data.events)
      } ,
      fail: function (err) {
        console.log(err)
        that.setData({
          timeout: true,
          hidden: true,
          noDrug:false,
          haveDrug: false,
        })
      }
    })
    }else{
      that.setData({
        timeout: false,
        hidden: true,
        flag: '0',
        noDrug: true,
        haveDrug: false,
        inputA_value: "",
        inputA_code: "",
      })
    }
  },
  getDrugBInfo: function () {
    var that = this
    var searchName = that.data.inputB_value.trim()
    //console.log()
    that.setData({
      hidden: false,
      noDrug: false,
      resultDisplay1: false,
      resultDisplay2: false,
      haveDrug: false,
      timeout:false
    })
    if (searchName != '') {
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
        if (res.data.body.length != 0) {
          that.setData({
            events: res.data.body,
            flag: '1',
            hidden: true,
            noDrug:false,
            haveDrug: true
          })
        } else {
          that.setData({
            events: res.data.body,
            flag: '1',
            hidden: true,
            noDrug: true,
            haveDrug: false,
            inputB_value: "",
            inputB_code: "",
          })
        }
      },
      fail: function (err) {
        console.log(err)
        that.setData({
          timeout: true,
          hidden: true,
          noDrug:false,
          haveDrug: false,
        })
      }
    })
    } else {
      that.setData({
        timeout: false,
        hidden: true,
        flag: '1',
        noDrug: true,
        haveDrug: false,
        inputB_value: "",
        inputB_code: "",
      })
    }
  },
//比对分析结果
  getDrugInteration: function () {
    var that = this
    var drugA_code = that.data.inputA_code
    var drugA_name = that.data.inputA_value
    var drugB_code = that.data.inputB_code
    var drugB_name = that.data.inputB_value
    // if (drugA_code == ''){
    //     // this.input.focus()
    //     return ""
    // } 
    // if (drugB_code == '') {
    //     return ""
    // }
    if (drugA_code != '' && drugA_name != '' && drugB_code != '' && drugB_name != ''){
    //console.log(searchName)
    //console.log()
    
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
        console.log(res)
        if (res.data.body.length == 0){
          var result = "两药品无相互作用"
          var obj = result
          res.data.body[0] = {result}
        }
        that.setData({
          events:[],
          result: res.data.body,
          resultDisplay2:true,
          resultDisplay1: false,
        })
      }
    })
    } else if (drugA_code == '' && drugA_name == ''&& drugB_code == '' && drugB_name == ''){
      that.setData({
        events: [],
        resultDisplay1: false,
        resultDisplay2: false,
      })
    }else{
      
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
          console.log(res)
          if (res.data.body.length == 0) {
            var effect = "没有与之相互作用的药物"
            var obj = effect
            res.data.body[0] = { effect }
          }
          that.setData({
            events: [],
            result: res.data.body,
            resultDisplay1: true,
            resultDisplay2: false,
          })
          console.log(that.data.result)
        }
      })
  }
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getDrugList: function (e) {
    var that = this
    var value = e.detail.value
    if (value == '1') {
      that.setData({
        events: [
          {
            e_id: "drug=asplpj",
            title: "阿司匹林片剂"
          },
          {
            e_id: "drug=aspljn",
            title: "阿司匹林胶囊"
          }
        ]
      })
    } else if (value == '2') {
      that.setData({
        events: [
          {
            e_id: "drug=blfpj",
            title: "布洛芬片剂"
          },
          {
            e_id: "drug=blfjn",
            title: "布洛芬胶囊"
          }
        ]
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
