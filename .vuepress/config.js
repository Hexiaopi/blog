const plugins = require('./config/plugins')

module.exports = {
  title: "何小进童鞋",
  description: '个人博客',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],

  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      {
        text: '文档',
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco', link: '/docs/' }
        ]
      },
      {
        text: '联系我',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/hexiaopi', icon: 'reco-github' }
        ]
      }
    ],
    // sidebar: {
    //   '/docs/theme-reco/': [
    //     '',
    //     'theme',
    //     'plugin',
    //     'api'
    //   ]
    // },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    sidebarDepth: 1,
    // 最后更新时间
    lastUpdated: '最近更新时间',
    // 作者
    author: 'hexiaopi',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    //record: 'xxxx',
    // 项目开始时间
    startYear: '2022',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'uneT3yd27cgSQnzXs6U0lUxj-gzGzoHsz',// your appId
      appKey: 'BscTftedJDk0mUJVokDYbOEH', // your appKey
    }
  },
  plugins,
  markdown: {
    lineNumbers: true
  }
}  
