// components/recommend/index.js
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
    swiperCurrent: 0,
    navbar: [{
      title: '推荐',
      name: '猜你喜欢'
    }, {
      title: '销量',
      name: '30天热销'
    }, {
      title: '佣金',
      name: '超高佣金'
    }, {
      title: '筛选',
      name: '快速选货'
    }, ],
    currentTab: 0,
    commodity_list: [{
        img: '/images/main/矩形 9@2x.png',
        icon: '/images/main/上架店铺icon@2x.png',
        text: '坚果礼盒徐福记糖果开心果巴旦木酥心糖干 果零食组合你啊年货节日大礼包2138g吉祥 如意',
        piece: '1558',
        individual: '208'
      },
      {
        img: '/images/main/矩形 9@2x.png',
        icon: '/images/main/上架店铺icon@2x.png',
        text: '坚果礼盒徐福记糖果开心果巴旦木酥心糖干 果零食组合你啊年货节日大礼包2138g吉祥 如意',
        piece: '1558',
        individual: '208'
      }, {
        img: '/images/main/矩形 9@2x.png',
        icon: '/images/main/上架店铺icon@2x.png',
        text: '坚果礼盒徐福记糖果开心果巴旦木酥心糖干 果零食组合你啊年货节日大礼包2138g吉祥 如意',
        piece: '1558',
        individual: '208'
      }
    ],
    commission: [{
        title: '预赚金额',
        earnings: '￥12.7',
      },
      {
        title: '佣金比例',
        earnings: '32%',
      },
      {
        title: '销售价',
        earnings: '￥39.9',
      }
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    navbarTap: function (e) {
      this.setData({
        currentTab: e.currentTarget.dataset.idx
      })
    },
  }
})