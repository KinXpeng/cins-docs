---
nav:
  title: Column
  path: /column
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
