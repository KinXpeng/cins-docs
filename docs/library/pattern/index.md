---
title: CSS
order: 1
nav:
  title: 精选
  order: 2
---

## 输入框抖动

```css
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(-2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.apply-shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
```

## 文字描边

```css
.stroke-text {
  color: transparent;
  font-size: 40px;
  /* 仅适用于部分浏览器 */
  -webkit-text-stroke: 2px #f60;
}
```

## 网站变成灰色效果

```css
/* 页面变灰的css */
.silence {
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
```

## CSS 伪类实现提示语图标效果

```css
.pseudo-text {
  position: relative;
  left: 40px;
  height: 40px;
  font-size: 30px;
  line-height: 40px;
}
.pseudo-text::before {
  position: absolute;
  top: 4px;
  left: -40px;
  width: 34px;
  height: 34px;
  background: url(https://kinxpeng.oss-cn-beijing.aliyuncs.com/image/cins-docs/schedul_warning.png)
    center/cover;
  content: '';
}
```

## CSS 节流

```css
/* 使用节流 */
.throttle-button .button-wrap .ant-throttle {
  animation: throttle 2s step-end forwards;
}
.throttle-button .button-wrap .ant-throttle:active {
  animation: none;
}

/* 节流样式 */

@keyframes throttle {
  from {
    pointer-events: none;
  }
  to {
    pointer-events: all;
  }
}
```

## 超出多行省略

```css
/* 默认超出一行 */
.ellipsis-overflow {
  width: 200px;
  padding: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: 1px solid #eee;
}
.ellipsis {
  display: -webkit-box;
  width: 200px;
  padding: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  border: 1px solid #eee;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.ellipsis-double {
  -webkit-line-clamp: 2;
}
.ellipsis-triple {
  -webkit-line-clamp: 3;
}
```
