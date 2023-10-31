---
title: CSS框架
order: 8
nav:
  title: 进阶
  order: 2
---

## Windi CSS 介绍

Windi CSS 是下一代工具优先的 `CSS框架` 。当项目越来越大时，使用 Tailwind CSS 最初的编译时间达到了 3s，而热更新的时间也超过了 1s，可以说 Windi CSS 是一个原子化的 CSS 框架，可以细致化地编码 CSS，是一个可以让我们快速上手的组件库，它包含了几乎所有的 css 样式，可以不需要再去繁琐的写 css 样式，只需短短的几个 class 即可；它的许多新特性给我们带来了极大的方便，而且也带来了更快地加载体验。

## 官方文档

<a href="https://windicss.org/" target="_blank">Windi CSS 官方文档</a>

<a href="https://cn.windicss.org/" target="_blank">Windi CSS 中文文档</a>

基础用法可参考<a href="https://www.tailwindcss.cn/" target="_blank">Tailwind CSS</a>

## 进阶用法

### 边框

```js
// 边框宽度
border-[1px]  // border-width:1px
border-b-[1px] // border-bottom-width:1px

// 边框颜色
border-[#000] // border-color:#000

// 边框样式
border-solid // border-style:solid

// 边框弧度
rounded-full // border-radius:50%
rounded-[10px] // border-radius:10px
rounded-t-[10px] // border-top-radius:10px
rounded-br-[10px] // border-bottom-right-radius: 10px
```

### 背景色

```js
// 常用
bg-black // background-color:black;
bg-white

// 自定义颜色
bg-[#f60]
```

### 字体

```js
// 字体大小
text-[24px] // font-size:24px;

// 字体颜色
text-[#f60] // color:#f60;

// 行高
leading-[20px] // line-height:20px;

// 粗细
font-[600] // font-weight:600;
```
