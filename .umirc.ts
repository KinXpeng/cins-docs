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
        path: 'https://github.com/KinXpeng/cins-docs',
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
        path: 'https://github.com/KinXpeng/cins-docs',
      },
    ],
  },
  // 菜单配置
  menus: {
    '/guide': [
      {
        title: 'Guide',
        path: '/guide/what',
        children: [
          // 菜单子项（可选）
          'guide/what/introduction/index.md',
        ],
      },
      {
        title: 'Changelog',
        path: '/guide/changelog',
      },
    ],
    '/zh-CN/guide': [
      // 省略，配置同上
      {
        title: '指南',
        path: '/guide/what',
        children: [
          // 菜单子项（可选）
          'guide/what/introduction/index.zh-CN.md',
        ],
      },
      {
        title: '更新日志',
        path: '/guide/changelog',
      },
    ],

    '/library': [
      {
        title: 'Winnow',
        path: '/library/overview',
        children: [
          // 菜单子项（可选）
          'library/overview/introduction/index.md',
        ],
      },
      {
        title: 'CSS',
        path: '/library/css',
        // children: ['library/css/index.md'],
      },
      {
        title: 'Mini program',
        path: '/library/mini-program',
      },
      {
        title: 'Widgets',
        path: '/library/widgets',
      },
    ],
    '/zh-CN/library': [
      // 省略，配置同上
      {
        title: '精选',
        path: '/library/overview',
        children: [
          // 菜单子项（可选）
          'library/overview/introduction/index.zh-CN.md',
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
      {
        title: '小程序',
        path: '/library/mini-program',
      },
      {
        title: '小组件',
        path: '/library/widgets',
      },
    ],

    '/usually': [
      {
        title: 'Introduction',
        path: '/usually/introduction',
        children: [
          // 菜单子项（可选）
          'usually/introduction/index.md',
        ],
      },
      {
        title: 'Common',
        path: '/usually/common',
        children: [
          // 菜单子项（可选）
          'usually/common/group_first/index.md',
          'usually/common/group_second/index.md',
        ],
      },
      {
        title: 'Regex',
        path: '/usually/regex',
      },
      {
        title: 'File',
        path: '/usually/file',
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
      {
        title: 'Array Object',
        path: '/usually/array',
      },
      {
        title: 'Cache',
        path: '/usually/cache',
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
        children: [
          // 菜单子项（可选）
          'usually/common/group_first/index.zh-CN.md',
          'usually/common/group_second/index.zh-CN.md',
        ],
      },
      {
        title: '正则',
        path: '/usually/regex',
      },
      {
        title: '文件',
        path: '/usually/file',
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
      {
        title: '数组对象',
        path: '/usually/array',
      },
      {
        title: '缓存',
        path: '/usually/cache',
      },
    ],

    '/column': [
      {
        title: 'Column',
        path: '/column/introduction',
        children: [
          // 菜单子项（可选）
          'column/introduction/index.md',
        ],
      },
      // {
      //   title: 'SEO',
      //   path: '/column/seo',
      // },
    ],

    '/zh-CN/column': [
      // 省略，配置同上
      {
        title: '专栏',
        path: '/column/introduction',
        children: [
          // 菜单子项（可选）
          'column/introduction/index.zh-CN.md',
        ],
      },
      {
        title: 'SEO',
        path: '/column/seo',
      },
    ],
  },

  // more config: https://d.umijs.org/config
});
