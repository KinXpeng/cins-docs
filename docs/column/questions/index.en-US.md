---
title: Questions
order: 2
nav:
  title: Column
  order: 3
---

## "Best" exception handling ever

```ts
try {
  // any code
} catch (e) {
  location.href = `https://www.baidu.com/s?wd=${e.message}`;
  // location.href = `https://stackoverflow.com/search?q=js+${e.message}`;
}
```

## Failed to load js on the page

```js
// Note that this code is written in the header script and executed first
// 1.When to try again
// 2.How to retry

// Indicates the domain name you want to replace
const domains = ['https://aaa.com', 'https://bbb.com', 'https://ccc.com'];
// Maximum retry times
const maxRetry = 3;
// Information that a js has retried (subscript and number of times)
const retryInfo = {};
window.addEventListener(
  'error',
  (e) => {
    const tag = e.target;
    if (tag.tagName === 'SCRIPT' && !(e instanceof ErrorEvent)) {
      // script loading failure
      const url = new URL(tag.src);
      if (!retryInfo[url.pathname]) {
        // Check whether a retry has been performed
        retryInfo[url.pathname] = {
          times: 0, // Number of tries
          nextIndex: 0, // Subscript of the domain name for the next retry
        };
      }
      const info = retryInfo[url.pathname];
      // Block subsequent page loading
      document.write(`<script src="${url.toString()}">\<\/script>`);

      // const script = document.createElement('script')
      // url.host = domains[info.nextIndex]
      // script.src = url.toString()
      // document.body.insertBefore(script, tag)

      // Retry times and index changes
      info.times++;
      info.nextIndex = (info.nextIndex + 1) % domains.length;
    }
  },
  true,
);
```
