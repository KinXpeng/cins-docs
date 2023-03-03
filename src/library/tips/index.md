---
nav:
  title: Winnow
  path: /library
---

## Picture size adaptive

```html
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

<div>
  <img src="./1.jpg" />
</div>
```
