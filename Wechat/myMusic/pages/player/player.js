// pages/player/player.js
// import octicons from '../../node_modules/octicons';
/*
  使用npm模块步骤：
  1.勾选npm选项
  2.安装npm模块
  3.工具->构建npm
  4.require引入模块
*/
let octicons = require('octicons');
console.log(octicons);
console.log(octicons.play.toSVG({width:20}))

// 微信小程序模块化与引入
// require()
// import
// PS：引入只能使用相对路径
let app = getApp();
let common = require('../../common/common.js');
import {svg2base64 as com} from '../../common/common.js';
console.log(common, com)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    data: {},
    player: null,
    author_songlist:[],
    status:'播放',
    playIcon: app.svg2base64(octicons.play.toSVG({ width: 20 })),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      id = '613237527'
    } = options;

    this.setData({
      id
    });

    // get song info
    this.getData().then(data => {
      console.log('info', data);

      this.setData({
        data: {
          ...data.bitrate,
          ...data.songinfo
        }
      })

      // 设置页面标题
      let {
        data: songinfo
      } = this.data;
      wx.setNavigationBarTitle({
        title: songinfo.album_title
      });

      //获取歌手的歌曲
      this.getData({
        data: {
          method: 'baidu.ting.artist.getSongList',
          tinguid: songinfo.ting_uid,
          limits: 6,
          use_cluster: 1,
          order: 2
        }
      }).then(data=>{
        console.log(data)
        this.setData({
          author_songlist:data.songlist
        })
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    this.data.player.stop()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 获取分类数据
  getData({
    url = 'http://tingapi.ting.baidu.com/v1/restserver/ting',
    data = {}
  } = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data: {
          method: 'baidu.ting.song.play',
          songid: this.data.id,
          ...data
        },
        success(res) {
          resolve(res.data)
        },
        fail(err) {
          reject(err)
        }
      });
    })


  },

  // 歌曲播放/暂停
  handlePlay() {
    let {
      player,
      data
    } = this.data;

    if (!player) {
      player = wx.createInnerAudioContext();
      //播放歌曲
      player.src = data.show_link;
      player.autoplay = true;

      // 事件
      player.onPlay(() => {
        console.log('播放')
        this.setData({
          status:'暂停',
          playIcon: app.svg2base64(octicons['primitive-square'].toSVG({ width: 20 }))
        })
      })

      player.onPause(() => {
        console.log('暂停')
        this.setData({
          status: '播放',
          playIcon: app.svg2base64(octicons['play'].toSVG({ width: 20 }))
        })
      });

      
    }


    console.log(player.paused)
    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }

    this.setData({
      player
    })

  },
  handleDownload() {
    wx.downloadFile({
      url: this.data.data.lrclink, //仅为示例，并非真实的资源
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.showToast({
            title: '下载完毕',
            icon: 'success',
            duration: 3000
          });

        }

      }
    })
  }
})