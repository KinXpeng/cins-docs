---
nav:
  title: Mini program
  path: /library
---

## The webview is used in uniapp

#### h5 page return applet

- uni sdk（[Get SDK](https://github.com/KinXpeng/Note/tree/master/WEB/utils),It is also available on uniapp.）

  ```js
  import '@/utils/uni-webview.js'; // uni-webview SDK

  // uniapp SDK
  const userAgent = navigator.userAgent;
  ```

- Specific use

  ```js
  // 跳转
  if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
    // Determine whether it is wechat mini program environment
    let params = {
      msg: 'testdata',
    };
    // Pay attention to encoding when passing json data
    wx.miniProgram.navigateTo({
      url: `/pages/navigation/navigation?data=${encodeURIComponent(JSON.stringify(params))}`,
    });

    // The tab page in the applet cannot be redirected (e.g. to the home page).
    wx.miniProgram.navigateTo({
      // Wrong example
      url: '/pages/index/index',
    });

    wx.miniProgram.navigateBack(); // Correct example
  }
  ```

#### h5 Go to the home page after entering multiple layers

```js
// The sdk also needs to be imported

// Monitor whether to return to the home page
history.pushState(null, null, document.URL);
// The popstate event is triggered when the applet is clicked back
window.addEventListener(
  'popstate',
  () => {
    if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
      // Wechat mini program environment
      wx.miniProgram.navigateBack({
        delta: history.length,
      });
    }
  },
  false,
);
```
