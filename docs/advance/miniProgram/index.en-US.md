---
title: Mini program
order: 4
nav:
  title: Advance
  order: 2
---

## The webview is used in uniapp

#### h5 page return applet

- uni sdk（[Get SDK](https://github.com/KinXpeng/cins-docs/tree/main/utils),It is also available on uniapp.）

  ```ts
  import '@/utils/uni-webview.js'; // uni-webview SDK

  // uniapp SDK
  const userAgent = navigator.userAgent;
  ```

- Specific use

  ```ts
  // 跳转
  if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
    // Determine whether it is wechat mini program environment
    let params = {
      msg: 'testdata',
    };
    // Pay attention to encoding when passing json data
    wx.miniProgram.navigateTo({
      url: `/pages/navigation/navigation?data=${encodeURIComponent(
        JSON.stringify(params),
      )}`,
    });

    // The tab page in the applet cannot be redirected (e.g. to the home page).
    wx.miniProgram.navigateTo({
      // Wrong example
      url: '/pages/index/index',
    });

    wx.miniProgram.switchTab({
      // Correct example
      url: '/pages/index/index',
    });

    wx.miniProgram.navigateBack(); // Correct example
  }
  ```

#### h5 Go to the home page after entering multiple layers

```ts
// Firstly, it is also necessary to introduce the SDK as mentioned above.

// Eliminate all fallback actions on the page
history.pushState(null, null, document.URL);

// Add a listening pop state event when the mini program returns
window.addEventListener('popstate', fallbackEvent, false);

// Remove listening events when leaving the current page (can be removed by listening to changes in routing, not removing will have an impact on other pages)
window.removeEventListener('popstate', fallbackEvent, false);

// Fallback Event
const fallbackEvent = () => {
  if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
    // WeChat Mini Program Environment
    wx.miniProgram.navigateBack({
      delta: history.length,
    });
  }
};
```

## After packaging with Uniapp, launching the application will pop up an Html5+runtime pop-up box

```js
// Add the following code to the app plus in the manifest. json source view to solve the problem
"app-plus" : {
  "compatible":{
    "ignoreVersion":true   // Optional, Boolean type, ignore version compatibility check prompt
  },
}
```

## How to exit a program with a uniapp packaged app

```js
// #ifdef APP-PLUS
plus.runtime.quit();
return true; // Prohibit returning to the previous interface
// #endif
```

## Long press the iOS Apple app screen to display three small menus: "Copy, Search, and Translate"

Shielding method: CSS shielding

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

## WeChat official account realizes sharing friends and circle of friends

#### Install weixin-js-sdk

```js
npm install weixin-js-sdk --save
```

#### Local introduction

```js
import wx from 'weixin-js-sdk';
```

#### Call

```js
wx.config({
  debug: true, // Turn on debugging mode, and the return values of all API calls will be alerted on the client side. To view the incoming parameters, you can open them on the PC side, and the parameter information will be displayed through the log. It will only be printed on the PC side.
  appId: '', // Required, the unique identifier of the official account.
  timestamp: '', // Required, timestamp for generating signature.
  nonceStr: '', // Required, generate a random string for signature generation.
  signature: '', // Required, signature, see Appendix 1.
  // surl: res.data.url, // I added it myself, and when the debug is true, I can print the corresponding URL on the webpage to see if it is correct.
  jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
});

// const link = location.href + '&origin=share'
const link = 'xxxxx';
wx.ready(() => {
  // Customize the sharing content of the "Share with Friends" and "Share with QQ" buttons (1.4.0)
  wx.updateAppMessageShareData({
    title: '', // title
    desc: '', // describe
    link: link, // The link domain name or path must be consistent with the official account JS security domain name corresponding to the current page).
    imgUrl: '', // Share icon
    success: (res) => {},
    cancel: function () {
      // Callback function executed after user cancels sharing.
    },
  });

  // Customize the sharing content of the "Share to Moments" and "Share to QQ Space" buttons (1.4.0)
  wx.updateTimelineShareData({
    title: '', // title
    link: link, // The link domain name or path must be consistent with the official account JS security domain name corresponding to the current page.
    imgUrl: '', // Share icon.
    success: (res) => {},
    cancel: function () {
      // Callback function executed after user cancels sharing.
    },
  });
});
```
