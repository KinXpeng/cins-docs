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

## Turn numbers into Chinese uppercase

```ts
/**
 * Turn numbers into Chinese uppercase
 * @param val string
 * @param unit
 * @returns
 */
const numberToUppercase = (val: any, unit = '仟佰拾亿仟佰拾万仟佰拾元角分', v = ''): string => {
  val += '00';
  let lookup = val.indexOf('.');
  if (lookup >= 0) val = val.substring(0, lookup) + val.substr(lookup + 1, 2);
  unit = unit.substr(unit.length - val.length);
  for (let i = 0; i < val.length; i++) {
    v += '零壹贰叁肆伍陆柒捌玖'.substr(val.substr(i, 1), 1) + unit.substr(i, 1);
  }
  v = v
    .replace(/零角零分$/, '整')
    .replace(/零[仟佰拾]/g, '零')
    .replace(/零{2,}/g, '零')
    .replace(/零([亿|万])/g, '$1')
    .replace(/零+元/, '元')
    .replace(/亿零{0,3}万/, '亿')
    .replace(/^元/, '零元');
  return v;
};
```

## Matching text discoloration

```ts
/**
 * Matching text discoloration
 * @param val
 * @param text
 * @param color
 * @returns
 */
const textColor = (val: string, text = '', color = 'red'): string => {
  let v = text.replace(new RegExp(val, 'gi'), `<span style='color: ${color}'>${val}</span>`);
  return v;
};
```
