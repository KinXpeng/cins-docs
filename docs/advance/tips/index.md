---
title: 小技巧
order: 3
nav:
  title: 进阶
  order: 2
---

## 图片大小自适应

- html 部分

```html
<template>
  <div>
    <img src="./1.jpg" />
  </div>
</template>
```

- css 部分

```css
<style>
  div {
    display: flex;
    align-items: center;
  }
  /* vmin：取 vw 和 vh 较小的值 */
  /* vmax：取 vw 和 vh 较大的值 */
  img {
    width: 100vmin;
    height: 100vmin;
  }
</style>
```
