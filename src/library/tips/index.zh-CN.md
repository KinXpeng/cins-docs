---
nav:
  title: 精选
  path: /library
---

## 图片大小自适应

```js
<template>
  <div>
    <img src="./1.jpg" />
  </div>
</template>

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
