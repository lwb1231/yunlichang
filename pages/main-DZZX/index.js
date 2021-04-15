// pages/index-DZZX/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    portrait: [{
      img: '/images/main-dianzhuzhongxin/touxiang@2x.png',
      user_name: '做大做强',
      num: '0/1500金币',
    }],
    user_property1: [{
      icon: '/images/main-dianzhuzhongxin/nianduzongzichan icon26＊20@2x.png',
      img: '/images/main-dianzhuzhongxin/yiwen@2x.png',
      title: '年度总资产',
      num: '12000.5(元)'
    }, ],
    user_property2: [{
      icon: '/images/main-dianzhuzhongxin/nianduzongzichan icon26＊20@2x.png',
      img: '/images/main-dianzhuzhongxin/yiwen@2x.png',
      title: '待结算金额',
      num: '00.0(元)'
    }, ],
    user_property3: [{
      icon: '/images/main-dianzhuzhongxin/nianduzongzichan icon26＊20@2x.png',
      img: '/images/main-dianzhuzhongxin/yiwen@2x.png',
      title: '月营业额',
      num: '12000.5(元)'
    }, ],
    user_property4: [{
      icon: '/images/main-dianzhuzhongxin/nianduzongzichan icon26＊20@2x.png',
      img: '/images/main-dianzhuzhongxin/yiwen@2x.png',
      title: '可提现余额',
      num: '12000.5(元)'
    }, ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (params) {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2 // 数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，消息中心页面为1
      })
    }
  },
  btn() {
    console.log("我是提现按钮")
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