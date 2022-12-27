---
nav:
  title: 常用方法
  path: /usually
---

## 分组二

- 汇集了一些常用但是内容不是很多的方法。
- 关于有多种解决方式，归纳为一类的方法有单独菜单汇总。
- 虽然方法都很常见且比较简单，但是很实用。
- 汇总不易，不喜勿喷。

## 复制文本到剪贴板

```ts
/**
 * @param { string } 文本内容
 */
const copyToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text);
};
```

## 筛选对象属性

```js
/**
 * @param { Object } 对象
 * @param { string } 属性名（多个属性以逗号隔开）
 * @return { Object } 筛选后的对象
 * pickAttrs({a:1,b:2,c:3},'a','b') ==>>>> { a: 1, b: 2 }
 */
const pickAttrs = (obj, ...props) => {
  return Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k)));
};
```
