---
title: More
order: 2
nav:
  title: Usually
  order: 1
---

## More common methods

- Copy the text to the clipboard
- Turn numbers into Chinese uppercase
- Matching text discoloration
- Color conversion
- Determines if the function passed in is marked async

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
const numberToUppercase = (
  val: any,
  unit = '仟佰拾亿仟佰拾万仟佰拾元角分',
  v = '',
): string => {
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
  let v = text.replace(
    new RegExp(val, 'gi'),
    `<span style='color: ${color}'>${val}</span>`,
  );
  return v;
};
```

## Color conversion

```ts
/**
 * Color conversion function
 * @method hexToRgb hex conversion rgb
 * @method rgbToHex rgb conversion Hex
 * @method getDarkColor Depth color value
 * @method getLightColor Lighten the color value
 */
const useChangeColor = () => {
  // str string
  const hexToRgb = (str: string): any => {
    let hexs: any = '';
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(str)) {
      console.log('Incorrect hex was entered.');
      return '';
    }
    str = str.replace('#', '');
    hexs = str.match(/../g);
    for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16);
    return hexs;
  };
  // r Stand for red | g Stand for green | b Stand for blue
  const rgbToHex = (r: any, g: any, b: any): string => {
    let reg = /^\d{1,3}$/;
    if (!reg.test(r) || !reg.test(g) || !reg.test(b)) {
      console.log('Incorrect rgb was entered.');
      return '';
    }
    let hexs = [r.toString(16), g.toString(16), b.toString(16)];
    for (let i = 0; i < 3; i++)
      if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`;
    return `#${hexs.join('')}`;
  };
  // color string | level from 0 - 1
  const getDarkColor = (color: string, level: number): string => {
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(color)) {
      console.log('Incorrect hex was entered.');
      return '';
    }
    let rgb = useChangeColor().hexToRgb(color);
    for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - level));
    return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
  };
  // color  | level from 0 - 1
  const getLightColor = (color: string, level: number): string => {
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(color)) {
      console.log('Incorrect hex was entered.');
      return '';
    }
    let rgb = useChangeColor().hexToRgb(color);
    for (let i = 0; i < 3; i++)
      rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
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

## Determines if the function passed in is marked async

```ts
/**
 * Determines if the function passed in is marked async
 * @param { Function } func Incoming function
 * @return { Boolean }
 */
const isAsyncFunction = (func) => {
  return func[Symbol.toStringTag] === 'AsyncFunction';
};
```
