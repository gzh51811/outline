// 获取全局数据
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:false,
    type:null,
    hasMore:true,
    datalist:[],
    page:1,
    size:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({type}) {
    console.log(type);//21

    this.setData({
      type
    });

    // 修改页面标题
    let current = app.globalData.types.filter(item=>item.type==type)[0];
    if (current) {
      let title = current.title;
      wx.setNavigationBarTitle({
        title
      })
    }

    //获取分类数据
    this.getData({
      data:{
         offset:0
      }
    });
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
    // 加载更多
    if(this.data.hasMore){
      this.getData({
        data: {
          offset: (this.data.page - 1) * this.data.size
        }
      });
      
      this.setData({
        loading: true,
        page: this.data.page + 1
      });
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 获取分类数据
  getData({
    url = 'http://tingapi.ting.baidu.com/v1/restserver/ting',
    data
  }) {
      wx.request({
        url,
        data:{
          method: 'baidu.ting.billboard.billList',
          type:this.data.type,
          size: 10,
          ...data
        },
        success: ({data:{song_list}}) => {
          if(!song_list) {
            this.setData({
              loading:false,
              hasMore:false
            });

            return;
          }

         this.setData({
           datalist: [...this.data.datalist, ...song_list],
           loading:false
         })
        },
        fail(err) {
          
        }
      });

  }
})