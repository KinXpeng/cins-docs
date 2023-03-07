---
title: CSS
order: 1
nav:
  title: Winnow
  order: 2
---

## Input box jitter

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

## Stroke of text

```css
.stroke-text {
  color: transparent;
  font-size: 40px;
  -webkit-text-stroke: 2px #f60;
}
```

## The site turns gray

```css
.silence {
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
```

## Pseudo class to achieve the prompt icon effect

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

## CSS Throttle

```css
.throttle-button .button-wrap .ant-throttle {
  animation: throttle 2s step-end forwards;
}
.throttle-button .button-wrap .ant-throttle:active {
  animation: none;
}

@keyframes throttle {
  from {
    pointer-events: none;
  }
  to {
    pointer-events: all;
  }
}
```

## Beyond multiline omission

```css
/* default */
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
