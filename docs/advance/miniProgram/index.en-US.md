---
title: Mini program
order: 2
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
