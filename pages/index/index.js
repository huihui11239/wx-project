//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '点击以下，案例名字，即可跳转',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onPullDownRefresh(){
    console.log("下拉刷新")
  },
  onReachBottom() {
    console.log("上拉触底")
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我是标题hhh',
      path: '/page/user?id=123'
    }
  },
  onPageScroll(){
   console.log( "当页面滚动时")
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goPaomadeng: function () {
    wx.navigateTo({
      url: '../paomadeng/paomadeng'
    })
  },
  goFuxuankuang: function () {
    wx.navigateTo({
      url: '../fuxuankuang/fuxuankuang'
    })
  },
  goHuidingbu: function () {
    wx.navigateTo({
      url: '../huidingbu/huidingbu'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
