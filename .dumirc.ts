import { defineConfig } from 'dumi';

function withGH(uri: string): string {
  const prefix = process.env.gh ? '/dumi-theme-chakra/' : '/';
  return [prefix, uri].join('');
}

export default defineConfig({
  base: withGH(''),
  publicPath: withGH(''),
  outputPath: 'docs-dist',
  esbuildMinifyIIFE: true, // 修复tab页问题
  themeConfig: {
    name: 'CINS',
    logo: withGH('cins-docs.png'),
    prefersColor: { default: 'auto' }, // 主题跟随系统
    social: {
      github: {
        name: 'cins-docs',
        link: 'https://github.com/KinXpeng/cins-docs'
      },
    },
    footer: `Copyright © ${new Date().getFullYear()} cins.cc`,
    // 通知
    // announcementBar: {
    //   isCloseable: true,
    //   id: 'notice',
    //   content: 'cins文档2.0全新出场！！！',
    //   backgroundColor: '#f9fafc',
    //   // textColor:''
    // },
    thumbBackground: true,
    settingPanelVisible: true,
    hero: {
      showVersionBadge: false
    },
  },
  locales: [
    {
      id: 'zh-CN',
      name: '中文'
    },
    {
      id: 'en-US',
      name: '英文'
    }
  ],
});
