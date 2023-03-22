---
title: Usually
order: 2
nav:
  title: Usually
  order: 1
---

## Introduction

- A collection of methods that are commonly used but not very informative.
- There are multiple solutions, and there are separate menus for those that fall into one category.
- Although the methods are common and simple, they are useful.
- Summary is not easy, don't spray if you don't like.

## Address Bar Parameters

### A single parameter

```ts
/**
 * Get Address Bar Parameters
 * @param name Gets the name of the parameter
 * @return value The parameter value
 * */
const urlParams = (name: string): string | null => {
  const url = window.location.href;
  const search = url && url.split('?')[1];
  const obj = new URLSearchParams(search);
  if (obj.get(name)) {
    return obj.get(name);
  } else {
    return '';
  }
};
```

### Multiple parameters

```ts
/**
 * Analytical URL parameters
 * @return Object
 * */
const getSearchParams = () => {
  const url = window.location.href;
  const search = url && url.split('?')[1];
  const searchParams: any = new URLSearchParams(search);
  const paramsObj: any = {};
  for (const [key, value] of searchParams.entries()) {
    paramsObj[key] = value;
  }
  return paramsObj;
};
```

## json to get parameter

```ts
/**
 * Convert the data of json to URL parameters
 * @param { IJson } obj
 * @return { string }
 * */

// 示例
interface IJson {
  id: number;
  name: string;
  address: string;
  sex: boolean;
  other: string;
}
let dataobj: IJson = {
  id: 1,
  name: 'test',
  address: '北京市',
  sex: true,
  other: 'xxxxx',
};
// result ==> id=1&name=test&address=北京市&sex=true&other=xxxxx
const jsonToString = (obj: IJson): string => {
  const _length: number = Object.keys(obj).length | 0;
  let _str: string = '';
  if (!_length) return _str;
  for (let key in obj) {
    _str += key + '=' + obj[key as keyof typeof dataobj] + '&';
  }
  _str = _str.slice(0, _str.length - 1);
  return _str;
};
```

## Check data type

```ts
/**
 * Check data type
 * @param obj data
 * @return string type
 * */
const typeOf = (obj: any): string => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
```

## Debounce

```ts
/**
 * Debounce
 * @param function Function
 * @param time The time interval
 * */
const debounce = (() => {
  let timer: any = null;
  return (callback: () => void, wait: number = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();
```

## Throttle

```ts
/**
 * Throttle
 * @param function Function
 * @param time The time interval
 * */
const throttle = (() => {
  let last: number = 0;
  return (callback: () => void, wait: number = 800) => {
    let now = +new Date();
    if (now - last > wait) {
      callback();
      last = now;
    }
  };
})();
```

## Cell phone number desensitization

```ts
/**
 * Cell phone number desensitization
 * @param mobile Phone number 13122223333 -> 131****3333
 * @return mobile Desensitized cell phone number
 * */
const hideMobile = (mobile: number | string) => {
  return String(mobile).replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
};
```

## Case and case conversion

```ts
/**
 * Case and case conversion
 * @param str The string to be converted
 * @param type 1-All uppercase 2-All lowercase 3-Capitalize the first letter
 * @return str
 * */
const turnCase = (str: string, type: number) => {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      return str[0].toUpperCase() + str.substring(1).toLowerCase();
    default:
      return str;
  }
};
```

## Andoird or ios

```ts
/**
 * Andoird or ios
 * @return type
 * */
const getOSType = (): string => {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
    return 'ios';
  }
  if (isAndroid) {
    return 'android';
  }
  return 'other';
};
```

## Generate uuid

```ts
/**
 * uuid
 * @return uuid
 * */
const uuid = () => {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url); // Release this url
  return uuid.substring(uuid.lastIndexOf('/') + 1);
};
```

## Listens to the current window state

```js
document.addEventListener('visibilitychange', () => {
  console.log(document.visibilityState); // visible/hidden
});
```

## Web Share API

- navigator.share()：Return a promise that will resolve if the share is successfu. This interface calls the native sharing mechanism and takes the data you want to share as an argument. Note that it can only be called when the user presses a link or button. In other words, it requires transient activation.

```js
/**
 * Page to share
 * @param url Links to share
 * @param text Text to share
 * @param title Titles to share
 * @param files Represents an array of File objects to share
 * */

// let shareData = {
//   url:url,
//   text:text,
//   title:title,
//   files:files
// };

const shareQuote = async (shareData) => {
  try {
    await navigator.share(shareData);
  } catch (error) {
    console.error(error);
  }
};
```

## Deep clone

### JSON.parse

```js
/**
 * @param { object | array} obj
 **/
obj = JSON.parse(JSON.stringify(obj));
```

### hash

```js
/**
 * Deep clone
 * @param { object } obj
 * @return { object } obj
 */
const deepClone = (obj, hash = new WeakMap()) => {
  if (obj == null) {
    return;
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  // The above special types are returned by direct copy
  if (hash.has(obj)) {
    return hash.get(obj); // Look up the table, there is no duplicate copy, to solve the circular redundancy
  }
  let newobj = {};
  // Recursively copy the coexistence table
  hash.set(obj, newobj);
  for (let i in obj) {
    if (obj[i] instanceof Object) {
      newobj[i] = deepClone(obj[i], hash);
    } else {
      newobj[i] = obj[i];
    }
  }
  return newobj;
};
```

### Map

```js
/**
 * @param { object | array} obj
 **/
const deepClone = (obj) => {
  const objectMap = new Map();
  const _deepClone = (value) => {
    const type = typeof value;
    if (type !== 'object' || type === null) {
      return value;
    }
    if (objectMap.has(value)) {
      return objectMap.get(value);
    }
    const result = Array.isArray(value) ? [] : {};
    objectMap.set(value, result);
    for (const key in value) {
      result[key] = _deepClone(value[key]);
    }
    return result;
  };
  return _deepClone(obj);
};
```

### MessageChannel

```js
/**
 * @param { object | array} obj
 *  deepClone({ a: 1, b: [{ c: 1 }] }).then((res) => {
 *    console.log(res);
 *  });
 **/
const deepClone = (obj) => {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel();
    port1.postMessage(obj);
    port2.onmessage = (msg) => {
      resolve(msg.data);
    };
  });
};
```

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

### Method 1

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

### Method 2

```ts
/**
 * Digital amount to Chinese amount
 * @param {number} num The number to be converted
 * @return {string}  Returns the processed string
 */
const toChineseNumber = (num: number): string => {
  if (isNaN(num)) {
    return '请输入有效的数字！';
  }
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ];
  const head = num < 0 ? '负' : '';
  num = Math.abs(num);
  let s = '';
  for (let i = 0; i < fraction.length; i++) {
    s += (
      digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i]
    ).replace(/零./, '');
  }
  s = s || '整';
  num = Math.floor(num);
  for (
    let i = 0;
    i < unit[0].length && num > 0;
    i++, num = Math.floor(num / 10)
  ) {
    let p = '';
    for (
      let j = 0;
      j < unit[1].length && num > 0;
      j++, num = Math.floor(num / 10)
    ) {
      p = digit[num % 10] + unit[1][j] + p;
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零');
};

// Example usage
console.log(toChineseNumber(123456789.12)); // 输出 "壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元壹角贰分"
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
