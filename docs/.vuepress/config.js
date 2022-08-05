const head = require('./config/head.js');
const markdown = require('./config/markdown.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing',    // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题
  title: "SolのWorld", //站点标题
  description: '观察、思考、学习、构建知识体系',
  base: '/',          // 部署站点的基础路径, 默认是 /, 格式：'/<仓库名>/'
  head: head,         // 全局头部信息配置
  markdown: markdown, // markdown 相关配置
  plugins,            // 插件配置
  themeConfig,        //主题配置
}

