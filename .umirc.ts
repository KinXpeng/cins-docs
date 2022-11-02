import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'cins',
  favicon:
    'https://kinxpeng.oss-cn-beijing.aliyuncs.com/image/cins-docs/logo_net.png?versionId=CAEQOBiBgMDLq.DsnRgiIGE2YzFkZDY4Njc2ZDQ5MzdhMWU5ZTM5YWE1NzM0YjYx',
  logo: 'https://kinxpeng.oss-cn-beijing.aliyuncs.com/image/cins-docs/logo_net.png?versionId=CAEQOBiBgMDLq.DsnRgiIGE2YzFkZDY4Njc2ZDQ5MzdhMWU5ZTM5YWE1NzM0YjYx',
  // base: '/',
  outputPath: 'docs-dist',
  // publicPath:'./',
  mode: 'site',
  // 开启mfsu
  mfsu: {},
  // 多语言配置方式如下
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ],
  navs: {
    // 多语言 key 值需与 locales 配置中的 key 一致
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      // {
      //   title: 'Secondary navigation',
      //   // path: '链接是可选的',
      //   // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      //   children: [
      //     { title: '第一项', path: 'https://d.umijs.org' },
      //     { title: '第二项', path: '/guide' },
      //   ],
      // },
      {
        title: 'GitHub',
        path: 'https://github.com/KinXpeng/cins-npm',
      },
    ],
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      // {
      //   title: '我有二级导航',
      //   path: '链接是可选的',
      //   可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      //   children: [
      //     { title: '第一项', path: 'https://d.umijs.org' },
      //     { title: '第二项', path: '/guide' },
      //   ],
      // },
      {
        title: 'GitHub',
        path: 'https://github.com/KinXpeng/cins-npm',
      },
    ],
  },
  // 菜单配置
  menus: {
    '/library': [
      {
        title: 'Changelog',
        path: '/library/changelog',
        children: [
          // 菜单子项（可选）
          'library/changelog/index.md',
        ],
      },
      {
        title: 'CSS',
        path: '/library/css',
        // children: ['library/css/index.md'],
      },
    ],
    '/zh-CN/library': [
      // 省略，配置同上
      {
        title: '更新日志',
        path: '/library/changelog',
        children: [
          // 菜单子项（可选）
          'library/changelog/index.zh-CN.md',
        ],
      },
      {
        title: 'CSS',
        path: '/library/css',
        // children: [
        //   // 菜单子项（可选）
        //   'library/css/index.zh-CN.md',
        // ],
      },
    ],

    '/usually': [
      {
        title: 'Introduction',
        path: '/usually/introduction',
      },
      {
        title: 'Common',
        path: '/usually/common',
      },
      {
        title: 'Regex',
        path: '/usually/regex',
      },
      {
        title: 'Location',
        path: '/usually/location',
      },
      {
        title: 'Date & Time',
        path: '/usually/datetime',
      },
      {
        title: 'Http',
        path: '/usually/http',
      },
    ],
    '/zh-CN/usually': [
      // 省略，配置同上
      {
        title: '介绍',
        path: '/usually/introduction',
        children: [
          // 菜单子项（可选）
          'usually/introduction/index.zh-CN.md',
        ],
      },
      {
        title: '常用',
        path: '/usually/common',
      },
      {
        title: '正则',
        path: '/usually/regex',
      },
      {
        title: '位置',
        path: '/usually/location',
      },
      {
        title: '日期时间',
        path: '/usually/datetime',
      },
      {
        title: '请求',
        path: '/usually/http',
      },
    ],
  },

  // more config: https://d.umijs.org/config
});
