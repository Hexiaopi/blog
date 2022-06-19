module.exports = [
  [
    '@vuepress-reco/vuepress-plugin-bgm-player',
    {
      audios: [
        {
          name: '什么鸟日子',
          artist: '蒙太奇',
          url: 'https://music.163.com/song/media/outer/url?id=159952',
          cover: 'http://p2.music.126.net/EjqWXiVoCqchNac5Jco7kQ==/109951167343255308.jpg?param=130y130'
        },
        {
          name: '夜空中最亮的星',
          artist: '逃跑计划',
          url: 'https://music.163.com/song/media/outer/url?id=25706282',
          cover: 'http://p1.music.126.net/Eef2K2KV9dT3XUA6_Ve-Rw==/109951165543196748.jpg?param=130y130'
        },
      ],
      autoplay: false, //是否自动播放
      autoShrink: true, //是否自动缩小
      floatPosition: 'left', //指定浮窗模式浮动在哪一侧
      // 播放器位置
      position: {
        left: '1rem',
        bottom: '1rem',
        'z-index': '99999'
      }
    }
  ],
  [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    {
      theme: ['koharu', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
      clean: false,
      messages: {
        welcome: '欢迎光临本舍',
        home: '',
        theme: '',
        close: ''
      },
      modelStyle: {
        position: "fixed",
        right: "5vw",
        bottom: "0",
        opacity: "0.9",
        zIndex: 99999
      }
    }
  ]
]