const plugins = require('./config/plugins')

module.exports = {
  title: "何小进童鞋个人学习笔记",
  description: '个人博客',
  base: '/blog/',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],

  theme: 'reco',
  themeConfig: {
    noFoundPageByTencent: false,
    type: 'blog',
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    codeTheme: 'tomorrow', // default 'tomorrow'
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      {
        text: '关于我',
        icon: 'reco-message',
        items: [
          { text: 'Profile', link: '/about/profile', icon: 'reco-other' },
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
        title: '阮一峰的个人网站',
        desc: '阮老师的博客网站，非常推荐',
        link: 'https://www.ruanyifeng.com'
      }
      // {
      //   title: 'vuepress-theme-reco',
      //   desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      //   avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   link: 'https://vuepress-theme-reco.recoluan.com'
      // },
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
    record: '皖ICP备2022000616号-1',
    // 备案号链接
    recordLink: 'https://beian.miit.gov.cn/',
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

    // valineConfig: {
    //   appId: 'uneT3yd27cgSQnzXs6U0lUxj-gzGzoHsz',// your appId
    //   appKey: 'BscTftedJDk0mUJVokDYbOEH', // your appKey
    // }
    vssueConfig: {
      platform: "github",
      owner: "Hexiaopi",
      repo: "blog",
      clientId: "9d2b2a23623f252a0294",
      clientSecret: "d42dbaf3b7dbc9aa6dd55ba11b89d4111ea8ffc5",
    }
  },
  plugins,
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3, 4]
    }
  }
}  
