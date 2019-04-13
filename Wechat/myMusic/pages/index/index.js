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
    tabs: app.globalData.types,
    activeIndex: 0,
    tabWidth: 100,
    tabData: {}
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function() {
    //进入页面获取第一个tab的数据
    let {
      tabs,
      activeIndex
    } = this.data;
    this.getTabData(tabs[activeIndex].type);

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
      // url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        method: 'baidu.ting.billboard.billList',
        type: 2,
        size: 10,
        offset: 0
      }
    }).then(({
      song_list
    }) => {
      let recommends = song_list.sort((a, b) => {
        return b.hot - a.hot
      }).slice(0, 5);

      this.setData({
        recommends,
        keyword: recommends[0].title
      });
    })

    // 设置tabWidth宽度
    //tab样式
    wx.getSystemInfo({
      success: res => {
        let {
          tabs,
          activeIndex
        } = this.data;
        let tabWidth = res.windowWidth / tabs.length;
        this.setData({
          tabWidth,
          sliderOffset: tabWidth * activeIndex
        });
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:'千锋好声音',
      path:'pages/index/index'
    }
  },

  //ajax请求封装
  getData({
    url ='http://tingapi.ting.baidu.com/v1/restserver/ting',
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
  },

  // tab改变处理函数
  handlerTabChange(e) {
    console.log(e)
    let {idx,type} = e.currentTarget.dataset;
    this.setData({
      activeIndex: idx,
      sliderOffset: this.data.tabWidth * idx
    });

    //获取数据
    this.data.tabData[type] == this.getTabData(type);
  },

  //获取tab数据
  getTabData(type) {
    // 新歌榜
    this.getData({
      data: {
        method:'baidu.ting.billboard.billList',
        type,
        size: 3
      }
    }).then(data => {
      let list = data.song_list;

      this.setData({
        tabData: {
          ...this.data.tabData,
          [type]: list
        }
      });
    });
  },

  //跳转到列表
  gotoList(e){
    let {type} = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/list/list?type=' + type,
    })
  }
})