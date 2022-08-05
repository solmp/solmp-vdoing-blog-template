// 额外页面模块
module.exports = {
  // windowLB:
  // `<img src="/img/LB-img.jpg" class="LB-img"
  //       style="width: 130px;height: 130px;opacity: 0.8;
  //       margin-bottom: -4px;padding-bottom:0;position: fixed;
  //       bottom: 0;left: 0.5rem;z-index: 1;" alt="">`
}

// 官方文档：https://doc.xugaoyi.com/pages/a20ce8/#%E8%87%AA%E5%AE%9A%E4%B9%89html%E6%A8%A1%E5%9D%97
/** 插入自定义html模块 (可用于插入广告模块等)
 * {
 *   homeSidebarB: htmlString, 首页侧边栏底部
 *
 *   sidebarT: htmlString, 全局左侧边栏顶部
 *   sidebarB: htmlString, 全局左侧边栏底部
 *
 *   pageT: htmlString, 全局页面顶部
 *   pageB: htmlString, 全局页面底部
 *   pageTshowMode: string, 页面顶部-显示方式：未配置默认全局；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *   pageBshowMode: string, 页面底部-显示方式：未配置默认全局；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *
 *   windowLB: htmlString, 全局窗口左下角②
 *   windowRB: htmlString, 全局窗口右下角②
 * }
 *
 * ①注：在.md文件front matter配置`article: false`的页面是自定义页，未配置的默认是文章页（首页除外）。
 * ②注：windowLB 和 windowRB：1.展示区块宽高最大是200*200px。2.请给自定义元素定一个不超过200px的固定宽高。3.在屏宽小于960px时无论如何都不会显示。
 */
// 位置测试
// module.exports = {
//     homeSidebarB:   `<div style="width:100%;height:100px;color:#000000;background: #1c80bd;text-align: center;">homeSidebarB测试</div>`,
//     sidebarT:       `<div style="width:100%;height:100px;color:#000000;background: #1c80bd;text-align: center;">sidebarT测试</div>`,
//     sidebarB:       `<div style="width:100%;height:100px;color:#000000;background: #1c80bd;text-align: center;">sidebarB测试</div>`,
//     pageT:          `<div style="width:100%;height:100px;color:#000000;background: #1c80bd;text-align: center;">pageT测试</div>`,
//     pageB:          `<div style="width:100%;height:100px;color:#000000;background: #1c80bd;text-align: center;">pageB测试</div>`,
//     windowLB:       `<div style="width:100%;height:100px;color:#000000;background: #1c80bd;text-align: center;">windowLB测试</div>`,
//     windowRB:       `<div style="width:100%;height:100px;color:#000000;background: #1c80bd;text-align: center;">windowRB测试</div>`,
// }
