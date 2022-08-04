const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');


module.exports = {
    theme: 'vdoing', // 使用npm包主题
    // theme: require.resolve('../../theme-vdoing'), // 使用本地主题
    title: "SolのWorld",
    description: '观察、思考、学习、构建知识体系',
    base: '/', // 格式：'/<仓库名>/'， 默认'/'
    markdown: {
        lineNumbers: true, // 代码行号
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
    },
    head,
    plugins,
    themeConfig,
}
