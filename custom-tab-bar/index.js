// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#FF1C6C",
    "list": [{
        "pagePath": "/pages/main-HY/index",
        "text": "货源",
        "iconPath": "/images/tabbar/货源icon48＊48@2x.png",
        "selectedIconPath": "/images/tabbar/货源icon@2x.png"
      },
      {
        "pagePath": "/pages/main-SXY/index",
        "text": "商学院",
        "iconPath": "/images/tabbar/商学院icon@2x.png",
        "selectedIconPath": "/images/tabbar/商学院icon48＊48@2x.png"
      },
      {
        "pagePath": "/pages/main-DZZX/index",
        "text": "店主中心",
        "iconPath": "/images/tabbar/店主中心icon@2x.png",
        "selectedIconPath": "/images/tabbar/店主中心icon48＊48@2x.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // switchTab(e) {
    //   const idx = e.currentTarget.dataset.index
    //   const path = e.currentTarget.dataset.path
    //   this.setData({
    //     selected: idx
    //   })
    //   if (this.data.selected==0) {
    //     wx.switchTab({
    //       url: '/pages/main-HY/index',
    //     })
    //   }else if(this.data.selected==1){
    //     wx.switchTab({
    //       url: '/pages/main-SXY/index',
    //     })
    //   }else{
    //     wx.switchTab({
    //       url: '/pages/main-DZZX/index',
    //     })
    //   }
    //   console.log(this.data.selected, idx)
    // },
    switchTab(e) {
      let that = this
      const idx = e.currentTarget.dataset.index
      const path = e.currentTarget.dataset.path
      // 跳转页面
      wx.switchTab({
         url: path,
      })
      that.setData({
        selected: idx
      })
    }
  }

})