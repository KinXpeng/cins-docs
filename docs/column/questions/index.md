---
title: 常见问题
order: 2
nav:
  title: 专栏
  order: 3
---

## 史上“最佳”异常处理

```ts
try {
  // any code
} catch (e) {
  location.href = `https://www.baidu.com/s?wd=${e.message}`;
  // location.href = `https://stackoverflow.com/search?q=js+${e.message}`;
}
```

## 页面中 js 加载失败

```js
// 注意将此段代码写在头部的script中，优先执行
// 1.何时重试
// 2.如何重试

// 需要替换的域名
const domains = ['https://aaa.com', 'https://bbb.com', 'https://ccc.com'];
// 最大重试次数
const maxRetry = 3;
// 某个js已经重试的信息（下标及次数）
const retryInfo = {};
window.addEventListener(
  'error',
  (e) => {
    const tag = e.target;
    if (tag.tagName === 'SCRIPT' && !(e instanceof ErrorEvent)) {
      // script加载失败
      const url = new URL(tag.src);
      if (!retryInfo[url.pathname]) {
        // 判断是否重试过
        retryInfo[url.pathname] = {
          times: 0, // 重试的次数
          nextIndex: 0, // 下一次重试的域名下标
        };
      }
      const info = retryInfo[url.pathname];
      // 阻塞页面后续的加载
      document.write(`<script src="${url.toString()}">\<\/script>`);

      // const script = document.createElement('script')
      // url.host = domains[info.nextIndex]
      // script.src = url.toString()
      // document.body.insertBefore(script, tag)

      // 重试次数及下标更改
      info.times++;
      info.nextIndex = (info.nextIndex + 1) % domains.length;
    }
  },
  true,
);
```
