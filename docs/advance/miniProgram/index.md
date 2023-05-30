---
title: 小程序
order: 2
nav:
  title: 进阶
  order: 2
---

## uniapp 中使用 webview

#### h5 页面返回小程序

- 引入 uni 的 SDK（[获取 SDK](https://github.com/KinXpeng/cins-docs/tree/main/utils)，也可在 uniapp 官网获取。）

  ```ts
  import '@/utils/uni-webview.js'; // uni-webview SDK

  // uniapp SDK
  const userAgent = navigator.userAgent;
  ```

- 具体使用

  ```ts
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

    wx.miniProgram.switchTab({
      // 正确例子
      url: '/pages/index/index',
    });

    wx.miniProgram.navigateBack(); // 正确例子
  }
  ```

#### h5 页面进入多层后回到首页

```ts
// 首先同样需要上述引入SDK

// 消除页面所有的回退动作
history.pushState(null, null, document.URL);

// 小程序返回时添加监听popstate事件
window.addEventListener('popstate', fallbackEvent, false);

// 离开当前页面时移除监听事件（可以监听路由的变化来移除，不移除会对其它的页面有影响）
window.removeEventListener('popstate', fallbackEvent, false);

// 回退事件
const fallbackEvent = () => {
  if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
    // 微信小程序环境
    wx.miniProgram.navigateBack({
      delta: history.length,
    });
  }
};
```
