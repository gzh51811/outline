//index.js
//获取应用实例
const app = getApp();
console.log(app)

Page({
  data: {
    list_hot: [],
    list_new: [],
    recommends: [],
    keyword: '',
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function() {
    //通过微信接口获取用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          // console.log('用户信息：', res)
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    //获取百度热门音乐
    this.getData({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        method: 'baidu.ting.billboard.billList',
        type: 2,
        size: 10,
        offset: 0
      }
    }).then(({song_list})=>{
      let recommends = song_list.sort((a,b)=>{
        return b.hot - a.hot
      }).slice(0,5);
      
      this.setData({
        recommends,
        keyword: recommends[0].title
      });
    })
  },
  //ajax请求封装
  getData({
    url,
    data
  }) {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        success: res => {
          resolve(res.data);
        },
        fail(err) {
          reject(err)
        }
      });
    })

  },

  gotoSearch() {
    wx.navigateTo({
      url: '/pages/search/search?keyword=' + this.data.keyword,
    })
  }
})