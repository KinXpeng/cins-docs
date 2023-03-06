import { defineConfig } from 'dumi';

function withGH(uri: string): string {
  const prefix = process.env.gh ? '/dumi-theme-chakra/' : '/';
  return [prefix, uri].join('');
}

export default defineConfig({
  base: withGH(''),
  publicPath: withGH(''),
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'cins',
    logo: withGH('cins-docs.png'),
    social: {
      github: {
        name: 'cins-docs',
        link: 'https://github.com/KinXpeng/cins-docs'
      },
    },
    footer: `Copyright © ${new Date().getFullYear()} cins.cc`
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
