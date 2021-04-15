// pages/main-SXY/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seban:[
      {
        img:"/images/main-shangxueyuan/pingtaicaozuo icon  96＊96@2x.png",
        info:"平台操作"
      },
      {
        img:"/images/main-shangxueyuan/xinshourumen icon96＊96@2x.png",
        info:"新手入门"
      },
      {
        img:"/images/main-shangxueyuan/jinjiexuexi icon96＊96@2x.png",
        info:"进阶学习"
      },
      {
        img:"/images/main-shangxueyuan/guizezhongxin icon96＊96@2x.png",
        info:"规则中心"
      },
      {
        img:"/images/main-shangxueyuan/meirifenxiang icon96＊96@2x.png",
        info:"每日分享"
      },
    ],
    shopkeeper:[
      {
        icon:'/images/main-shangxueyuan/fensi icon32＊32@2x.png',
        title:'店主涨粉秘籍',
        right_title:'更多',
        icon_right:'/images/main-shangxueyuan/jinru icon 拷贝 2@2x.png',
        img:'/images/main-shangxueyuan/kechengfengmian1@2x.png',
        title_main:'店主涨粉必修课',
        introduce:"店主学习如何快速吸粉、涨粉",
        introduce_mian:"课程介绍：通过讲师的讲解，如何快 速有效的吸引粉丝进入店铺消费和"
    },    {
      icon:'/images/main-shangxueyuan/baodian icon32＊32@2x.png',
      title:'店主卖货宝典',
      right_title:'更多',
      icon_right:'/images/main-shangxueyuan/jinru icon 拷贝 2@2x.png',
      img:'/images/main-shangxueyuan/kechengfengmian2@2x.png',
      title_main:'店主涨粉必修课',
      introduce:"店主学习如何快速吸粉、涨粉",
      introduce_mian:"课程介绍：通过讲师的讲解，如何快 速有效的吸引粉丝进入店铺消费和"
  },    {
    icon:'/images/main-shangxueyuan/dianzhurongyv icon32＊32@2x.png',
    title:'店主荣誉排行榜',
    right_title:'更多',
    icon_right:'/images/main-shangxueyuan/jinru icon 拷贝 2@2x.png',
    img:'/images/main-shangxueyuan/kechengfengmian3@2x.png',
    title_main:'店主涨粉必修课',
    introduce:"店主学习如何快速吸粉、涨粉",
    introduce_mian:"课程介绍：通过讲师的讲解，如何快 速有效的吸引粉丝进入店铺消费和"
},   {
  icon:'/images/main-shangxueyuan/shiji icon32＊32@2x.png',
  title:'店铺最新事迹',
  right_title:'更多',
  icon_right:'/images/main-shangxueyuan/jinru icon 拷贝 2@2x.png',
  img:'/images/main-shangxueyuan/kechengfengmian4@2x.png',
  title_main:'店主涨粉必修课',
  introduce:"店主学习如何快速吸粉、涨粉",
  introduce_mian:"课程介绍：通过讲师的讲解，如何快 速有效的吸引粉丝进入店铺消费和"
}]
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
  onShow:function (params) {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1  // 数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，消息中心页面为1
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

  }
})