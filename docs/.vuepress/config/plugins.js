// set your global feed options - override in page frontmatter `feed`
const feed_options = {
  canonical_base: 'https://solmp-vdoing-blog-template.vercel.app',
  count: 5000,
};

const autometa_options = {
  site: {
    name: 'Sol',
  },
  canonical_base: 'https://solmp-vdoing-blog-template.vercel.app',
};

// 插件配置
module.exports = [
  // 百度自动推送
  'vuepress-plugin-baidu-autopush',
  // 鼠标点击后散开小星星
  'cursor-effects',
  // 全文搜索插件
  'fulltext-search',
  // 阅读顶部进度条
  'reading-progress',

  // 自定义插件
  [
    {
      name: 'custom-plugins',
      globalUIComponents: ["PageInfo", "BlockToggle"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],

  // 音乐插件
  // 配置文档：https://moefyit.github.io/moefy-vuepress/packages/meting.html
  [
    'meting',
    {
      meting: {
        server: 'netease',  // 音乐平台，可选值： "netease" | "tencent" | "kuwo" | "kugou" | "baidu"
        type: 'playlist',   // 资源类型，可选值： "song" | "album" | "artist" | "playlist"
        mid: '7574437002',  // 资源 ID
      },
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        autoplay: false,        // 是否自动播放
        order: 'list',            // 设置播放器的初始顺序模式，可选值： 'list' | 'random'
        lrcType: 3,             // 设置 lrc 歌词解析模式，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
        preload: 'metadata',    // 设置音频的预加载模式，可选值：'none' | 'metadata' | 'auto'
      },
      defaultCover: 'img/LB-img.jpg',
    },
  ],

  // 网页头动态变化
  [
    'vuepress-plugin-dynamic-title',
    {
      hideIcon: 'img/favicon.svg',
      hideText: '👀看不到我👀',
      recoverTime: 2000,
    },
  ],

  // rss 配置
  ['feed', feed_options],

  // meta优化 https://github.com/webmasterish/vuepress-plugin-autometa
  ['autometa', autometa_options],

  // 代码块复制按钮
  [
    'one-click-copy',
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功 🎉', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],

  // 代码块演示
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],

  // 放大图片
  [
    'vuepress-plugin-zooming',
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],

  // 百度统计
  [
    'vuepress-plugin-baidu-tongji',
    {
      hm: '3b0bef84a7e20c8b89b36895371e22cd',
    },
  ],

  // 提供mermaid图表支持
  'vuepress-plugin-mermaidjs',
  [
    'sitemap', {
    hostname: 'https://solmp-vdoing-blog-template.vercel.app',
    exclude: ["/404.html"],
  },
  ],

  // 站点地图
  'robots', {
    host: "https://solmp-vdoing-blog-template.vercel.app",
    disallowAll: false,
    allowAll: true,
    sitemap: "/sitemap.xml",
  },

  // gitalk评论 - 插件：vuepress-plugin-comment
  // [
  //     'vuepress-plugin-comment',
  //     {
  //         choosen: 'gitalk',
  //         options: {
  //             clientID: '4c78cef35eb185dca419',
  //             clientSecret: '5e04f838f50e50c764d705f7fa01816a17cdaf39',
  //             repo: 'solmp.github.io', // GitHub 仓库
  //             owner: 'solmp', // GitHub仓库所有者
  //             admin: ['solmp'], // 对仓库有写权限的人
  //             // distractionFreeMode: true,
  //             pagerDirection: 'last', // 'first'正序 | 'last'倒序
  //             id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
  //             title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
  //             labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
  //             body:
  //                 '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
  //         },
  //     },
  // ],

  // waline评论 - 插件：vuepress-plugin-comment-plus
  [
    'vuepress-plugin-comment-plus',
    {
      choosen: 'waline',
      // options选项中的所有参数，会传给Waline的配置
      options: {
        el: '#valine-vuepress-comment',
        serverURL: 'https://solmp-blog-comment-waline.vercel.app/', //  例如 "https://***.vercel.app/"
        path: '<%- frontmatter.commentid || frontmatter.permalink %>',
        emoji: [
          'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
          'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
        ],
        placeholder: "请留言"
      }
    }
  ],

  // "上次更新"时间格式
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
