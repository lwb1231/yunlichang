// pages/main-HY/index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navData:[
        {
            text: '云店推荐'
        },
        {
            text: '时令水果'
        },
        {
            text: '肉禽蛋类'
        },
        {
            text: '粮油副食'
        },
        {
            text: '海鲜水产'
        },
        {
            text: '休闲食'
        },
        {
            text: '其他商品'
        },
        {
            text: '其他商品'
        },
        {
            text: '其他商品'
        },
        {
          text: ''
      }
    ],
    currentTab: 0,
    navScrollLeft: 0,
    icon:"../../images/main/分类icon16＊16@2x.png",
     // 轮播图
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '/images/main/banner.jpg'
      }, {
        link: '/pages/logs/logs',
        url: '/images/main/banner.jpg'

      }, {
        link: '/pages/index/index',
        url: '/images/main/banner.jpg'

      }
    ],
    serve:[{
      icon:'/images/main/一件代发icon24＊24@2x.png',
      text:'一件代发'

    },
    {
      icon:'/images/main/售后无忧icon24＊24@2x.png',
      text:'售后无忧'
    },
    {
      icon:'/images/main/源头直供icon24＊24@2x.png',
      text:'源头直供'
    }],
    seban:[
      {
        img:"/images/main/店主必选icon64＊64@2x.png",
        info:"店主必选"
      },
      {
        img:"/images/main/引流福利icon64＊64@2x.png",
        info:"引流福利"
      },
      {
        img:"/images/main/精选好货icon64＊64@2x.png",
        info:"精选好货"
      },
      {
        img:"/images/main/热销爆品icon64＊64@2x.png",
        info:"热销爆品"
      },
      {
        img:"/images/main/品牌优选icon64＊64@2x.png",
        info:"品牌优选"
      },
    ],
    todayli:[
      {
        tit:"今日热销",
        conlist:[
          "/images/main/hot1.png",
          "/images/main/hot2.png",
        ]
      },
      {
        tit:"每日特价",
        conlist:[
          "/images/main/hot3.png",
          "/images/main/hot4.png",
        ]
      },
      {
        tit:"高拥必买",
        conlist:[
          "/images/main/hot5.png",
          "/images/main/hot6.png",
        ]
      },
      {
        tit:"大牌特卖",
        conlist:[
          "/images/main/hot7.png",
          "/images/main/hot8.png",
        ]
      },
    ],
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 4000,  //间隔时间
    duration: 1000,  //滑动时间
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
   //事件处理函数
   onLoad: function () {
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
                app.globalData.userInfo = res.userInfo
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        })
    }
    wx.getSystemInfo({
        success: (res) => {
            this.setData({
                pixelRatio: res.pixelRatio,
                windowHeight: res.windowHeight,
                windowWidth: res.windowWidth
            })
        },
    })       
},
switchNav(event){
    var cur = event.currentTarget.dataset.current; 
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
        navScrollLeft: (cur - 2) * singleNavWidth
    })      
    if (this.data.currentTab == cur) {
        return false;
    } else {
        this.setData({
            currentTab: cur
        })
    }
},
switchTab(event){
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
        currentTab: cur,
        navScrollLeft: (cur - 2) * singleNavWidth
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
  onShow:function (params) {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0  // 数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，消息中心页面为1
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