---
title: 小程序
order: 0
nav:
  title: 精选
  order: 2
---

## uniapp 中使用 webview

#### h5 页面返回小程序

- 引入 uni 的 SDK（[获取 SDK](https://github.com/KinXpeng/cins-docs/tree/main/utils)，也可在 uniapp 官网获取。）

  ```js
  import '@/utils/uni-webview.js'; // uni-webview SDK

  // uniapp SDK
  const userAgent = navigator.userAgent;
  ```

- 具体使用

  ```js
  // 跳转
  if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
    // 判断是否为微信小程序环境
    let params = {
      msg: '测试数据',
    };
    // 传递json数据时注意编码
    wx.miniProgram.navigateTo({
      url: `/pages/navigation/navigation?data=${encodeURIComponent(
        JSON.stringify(params),
      )}`,
    });

    // 小程序中的tab页不可跳转（例如跳转到首页）
    wx.miniProgram.navigateTo({
      // 错误例子
      url: '/pages/index/index',
    });

    wx.miniProgram.navigateBack(); // 正确例子
  }
  ```

#### h5 页面进入多层后回到首页

```js
// 首先同样需要上述引入SDK

// 监听是否回到首页
history.pushState(null, null, document.URL);
// 点击小程序返回时会触发popstate事件
window.addEventListener(
  'popstate',
  () => {
    if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
      // 微信小程序环境
      wx.miniProgram.navigateBack({
        delta: history.length,
      });
    }
  },
  false,
);
```
