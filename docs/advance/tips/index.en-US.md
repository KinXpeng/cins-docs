---
title: Tips
order: 3
nav:
  title: Advance
  order: 2
---

## Picture size adaptive

- html

```html
<template>
  <div>
    <img src="./1.jpg" />
  </div>
</template>
```

- css

```css
<style>
  div {
    display: flex;
    align-items: center;
  }
  /* vmin：Take the smaller values vw and vh */
  /* vmax：Take the larger values vw and vh */
  img {
    width: 100vmin;
    height: 100vmin;
  }
</style>
```
