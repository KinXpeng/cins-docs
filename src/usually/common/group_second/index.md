---
nav:
  title: Usually
  path: /usually
---

## Group Second

- A collection of methods that are commonly used but not very informative.
- There are multiple solutions, and there are separate menus for those that fall into one category.
- Although the methods are common and simple, they are useful.
- Summary is not easy, don't spray if you don't like.

## Copy the text to the clipboard

```ts
/**
 * @param { string } text content
 */
const copyToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text);
};
```

## Filter object attributes

```js
/**
 * @param { Object } object
 * @param { string } attrName
 * @return { Object } The filtered object
 * pickAttrs({a:1,b:2,c:3},'a','b') ==>>>> { a: 1, b: 2 }
 *
 */
const pickAttrs = (obj, ...props) => {
  return Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k)));
};
```
