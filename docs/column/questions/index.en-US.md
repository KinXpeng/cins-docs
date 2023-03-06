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
