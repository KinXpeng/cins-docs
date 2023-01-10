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

## 数字转中文大写

```ts
/**
 * 数字转中文大写
 * @param val 当前值字符串
 * @param unit 默认：仟佰拾亿仟佰拾万仟佰拾元角分
 * @returns 返回处理后的字符串
 */
const numberToUppercase = (val: any, unit = '仟佰拾亿仟佰拾万仟佰拾元角分', v = ''): string => {
  // 当前内容字符串添加 2个0，为什么??
  val += '00';
  // 返回某个指定的字符串值在字符串中首次出现的位置，没有出现，则该方法返回 -1
  let lookup = val.indexOf('.');
  // substring：不包含结束下标内容，substr：包含结束下标内容
  if (lookup >= 0) val = val.substring(0, lookup) + val.substr(lookup + 1, 2);
  // 根据内容 val 的长度，截取返回对应大写
  unit = unit.substr(unit.length - val.length);
  // 循环截取拼接大写
  for (let i = 0; i < val.length; i++) {
    v += '零壹贰叁肆伍陆柒捌玖'.substr(val.substr(i, 1), 1) + unit.substr(i, 1);
  }
  // 正则处理
  v = v
    .replace(/零角零分$/, '整')
    .replace(/零[仟佰拾]/g, '零')
    .replace(/零{2,}/g, '零')
    .replace(/零([亿|万])/g, '$1')
    .replace(/零+元/, '元')
    .replace(/亿零{0,3}万/, '亿')
    .replace(/^元/, '零元');
  // 返回结果
  return v;
};
```

## 匹配文字变色

```ts
/**
 * 匹配文字变色（搜索时）
 * @param val 当前值字符串
 * @param text 要处理的字符串值
 * @param color 搜索到时字体高亮颜色
 * @returns 返回处理后的字符串
 */
const textColor = (val: string, text = '', color = 'red'): string => {
  // 返回内容，添加颜色
  let v = text.replace(new RegExp(val, 'gi'), `<span style='color: ${color}'>${val}</span>`);
  // 返回结果
  return v;
};
```

## 颜色转换

```ts
/**
 * 颜色转换函数
 * @method hexToRgb hex 颜色转 rgb 颜色
 * @method rgbToHex rgb 颜色转 Hex 颜色
 * @method getDarkColor 加深颜色值
 * @method getLightColor 变浅颜色值
 */
const useChangeColor = () => {
  // str 颜色值字符串
  const hexToRgb = (str: string): any => {
    let hexs: any = '';
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(str)) {
      console.log('输入错误的hex');
      return '';
    }
    str = str.replace('#', '');
    hexs = str.match(/../g);
    for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16);
    return hexs;
  };
  // r 代表红色 | g 代表绿色 | b 代表蓝色
  const rgbToHex = (r: any, g: any, b: any): string => {
    let reg = /^\d{1,3}$/;
    if (!reg.test(r) || !reg.test(g) || !reg.test(b)) {
      console.log('输入错误的rgb颜色值');
      return '';
    }
    let hexs = [r.toString(16), g.toString(16), b.toString(16)];
    for (let i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`;
    return `#${hexs.join('')}`;
  };
  // color 颜色值字符串 | level 变浅的程度，限0-1之间
  const getDarkColor = (color: string, level: number): string => {
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(color)) {
      console.log('输入错误的hex颜色值');
      return '';
    }
    let rgb = useChangeColor().hexToRgb(color);
    for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - level));
    return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
  };
  // color 颜色值字符串 | level 加深的程度，限0-1之间
  const getLightColor = (color: string, level: number): string => {
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(color)) {
      console.log('输入错误的hex颜色值');
      return '';
    }
    let rgb = useChangeColor().hexToRgb(color);
    for (let i = 0; i < 3; i++) rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
    return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
  };
  return {
    hexToRgb,
    rgbToHex,
    getDarkColor,
    getLightColor,
  };
};
```
