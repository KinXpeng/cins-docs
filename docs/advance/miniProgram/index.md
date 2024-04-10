---
title: 小程序
order: 4
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

## 使用 uniapp 打包后启动应用会弹出 Html5+ Runtime 的弹框

```js
// 在manifest.json源码视图里面的app-plus里面添加如下代码即可解决
"app-plus" : {
  "compatible":{
    "ignoreVersion":true   // 可选，Boolean类型，是否忽略版本兼容检查提示
  },
}
```

## uniapp 打包的 app 如何退出程序

```js
// #ifdef APP-PLUS
plus.runtime.quit();
return true; // 禁止返回到上一个界面
// #endif
```

## ios 苹果端长按屏幕会出现"拷贝，查询，翻译"3 项小菜单

屏蔽方式： css 屏蔽

```js
-webkit-touch-callout: none;
/* iOS Safari */
-webkit-user-select: none;
/* Chrome/Safari/Opera */
-moz-user-select: none;
/* Firefox */
-ms-user-select: none;
/* IE10+ */
user-select: none;
/* Standard syntax */
```

## 微信公众号实现分享朋友和朋友圈

#### 安装 weixin-js-sdk

```js
npm install weixin-js-sdk --save
```

#### 局部引入

```js
import wx from 'weixin-js-sdk';
```

#### 调用

```js
wx.config({
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: '', // 必填，公众号的唯一标识
  timestamp: '', // 必填，生成签名的时间戳
  nonceStr: '', // 必填，生成签名的随机串
  signature: '', // 必填，签名，见附录1
  // surl: res.data.url, //自己添加的，debug为true的时候可以网页打印出对应的URL是否正确
  jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
});

// const link = location.href + '&origin=share'
const link = 'xxxxx';
wx.ready(() => {
  // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
  wx.updateAppMessageShareData({
    title: '', // 分享标题
    desc: '', // 分享描述
    link: link, // 该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
    imgUrl: '', // 分享图标
    success: (res) => {},
    cancel: function () {
      // 用户取消分享后执行的回调函数
    },
  });

  // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
  wx.updateTimelineShareData({
    title: '', // 分享标题
    link: link, // 该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
    imgUrl: '', // 分享图标
    success: (res) => {},
    cancel: function () {
      // 用户取消分享后执行的回调函数
    },
  });
});
```
