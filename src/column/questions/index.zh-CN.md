---
nav:
  title: 专栏
  path: /column
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
