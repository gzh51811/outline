// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: true,//是否显示输入框
    keyword: "沙漠骆驼",//输入框关键字
    datalist: []//搜索结果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)

    this.setData({
      keyword:options.keyword || '沙漠骆驼'
    })

    this.getData()
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

  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      keyword: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      keyword: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      keyword: e.detail.value
    });

    this.getData()
  },
  getData() {
    
      wx.request({
        url:'http://tingapi.ting.baidu.com/v1/restserver/ting',
        data:{
          method:'baidu.ting.search.catalogSug',
          query:this.data.keyword
        },
        success: res => {
          console.log(res.data)

          this.setData({
            datalist:res.data.song
          })
        },
        fail(err) {
          
        }
      })

  },
})