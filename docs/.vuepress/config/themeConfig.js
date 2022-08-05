const nav = require('./nav.js');
const htmlModules = require('./htmlModules.js');
const {readEachFileWords} = require('../webSiteInfo/readFile.js');

// 主题配置
module.exports = {
  nav: nav,                       // 顶部导航栏
  sidebarDepth: 2,                // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/logo.png',          // 导航栏logo
  repo: 'https://github.com/solmp/solmp-vdoing-blog-template',  // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10,       // 搜索结果显示最大数
  lastUpdated: '上次更新',          // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  editLinks: false,               // 关闭编辑按钮,此编辑无实际意义
  sidebarHoverTriggerOpen: true,  // 侧边栏自动隐藏
  searchPlaceholder: "按下 𝑺 搜索", // 可选：搜索栏占位文本，默认："$ grep ..."

  //*** 以下配置是Vdoing主题改动和新增的配置 ***//
  // 当.md文件的front matter不存在extendFrontmatter内相应的字段时，将在运行开发服务dev或打包build时自动添加，但不会覆盖已有的数据。
  // https://doc.xugaoyi.com/pages/a20ce8/#extendfrontmatter
  extendFrontmatter: {
    titleTag: '原创',
  },

  pageButton: false, // 是否显示快捷翻页按钮，默认true

  sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

  // 博客站点信息（首页）
  blogInfo: {
    blogCreate: '2022-08-03', // 博客创建时间
    indexView: true,  // 开启首页的访问量和排名统计，默认 true（开启）
    pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
    mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
    totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
    eachFileWords: readEachFileWords([''], 300, 160),  // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
    moutedEvent: '.tags-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
    readingTime: true,  // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
    // 下面两个选项：第一次获取访问量失败后的迭代时间
    indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
    pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
    // 说明：获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
  },

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'solmp', // 必需
    link: 'https://github.com/solmp', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: '/img/coding.gif',
    name: 'Sol',
    slogan: '沧海为水 一树菩提',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/solmp',
      },
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:solmp163@163.com',
      },
      {
        iconClass: 'icon-rss',
        title: '订阅',
        link: 'https://solmp.vercel.app/rss.xml',
      },
    ],
  },
  htmlModules,
  footer: {
    // 页脚信息
    createYear: 2022, // 博客创建年份
    // copyrightInfo:
    //     '| <a href="https://www.foreverblog.cn/" class="d-inline-block text-muted" target="_blank" rel="external nofollow"><img src="#" alt="点击查看十年之约" style="width:auto;height:11px;"> | <a rel="nofollow " target="_blank" href="https://beian.miit.gov.cn/">浙ICP备xxx号</a>', // 博客版权信息，支持a标签
  },
}
