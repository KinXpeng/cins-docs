---
title: Usually
order: 1
nav:
  title: Usually
  order: 1
---

## Address Bar Parameters

### A single parameter

```ts
/**
 * Get Address Bar Parameters
 * @param  { string } key Gets the name of the parameter
 * @return { string|null } The parameter value
 * */
const getRouteParam = (key: string): string | null => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  if (urlSearchParams.has(key)) {
    return urlSearchParams.get(key);
  }

  const hashParams = new URLSearchParams(window.location.hash.substr(1));
  if (hashParams.has(key)) {
    return hashParams.get(key);
  }

  const state = window.history.state;
  if (state && typeof state === 'object' && key in state) {
    return state[key];
  }

  const entries = window.location.search
    .slice(1)
    .split('&')
    .map((entry) => entry.split('='));
  for (const [entryKey, entryValue] of entries) {
    if (decodeURIComponent(entryKey) === key) {
      return decodeURIComponent(entryValue);
    }
  }
  return null;
};
```

### Multiple parameters

```ts
/**
 * Analytical URL parameters
 * @param { string } url
 * @return { object }
 * */
const getParamsAsJson = (url: string): object => {
  const queryString = url.split('?')[1];
  if (!queryString) return {};
  const params = new URLSearchParams(queryString);
  const result: { [key: string]: string } = {};
  params.forEach((value, key) => (result[key] = value));
  return result;
};
```

## json to get parameter

```ts
/**
 * Convert the data of json to URL parameters
 * @param { object } json
 * @return { string }
 * */
// 示例
let json = {
  id: 1,
  name: 'test',
  address: '北京市',
  sex: true,
  other: 'xxxxx',
};
// result ==> id=1&name=test&address=北京市&sex=true&other=xxxxx
const jsonToParams = (json: object): string => {
  const paramsArray = [];
  for (const [key, value] of Object.entries(json)) {
    paramsArray.push([key, value]);
  }
  const params = new URLSearchParams(paramsArray);
  return params.toString();
};
```

## Check data type

- Supports multiple types of verification
- Method 1 supports only the first seven types
  - string
  - number
  - boolean
  - null
  - undefined
  - object
  - array
  - date
  - regexp
  - map
  - set

### Method 1

```ts
/**
 * Check data type
 * @param { unknown } value
 * @return { string } type
 * */
const typeOf = (value: unknown): string => {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
};
```

### Method 2

```ts
/**
 * Check data type
 * @param { unknown } value
 * @return { string } type
 * */
const getType = (value: unknown): string => {
  if (typeof value === 'object') {
    if (value === null) {
      return 'null';
    }
    if (Array.isArray(value)) {
      return 'array';
    }
    if (value instanceof Date) {
      return 'date';
    }
    if (value instanceof RegExp) {
      return 'regexp';
    }
    if (value instanceof Map) {
      return 'map';
    }
    if (value instanceof Set) {
      return 'set';
    }
    return 'object';
  }
  return typeof value;
};
```

## Debounce

```ts
/**
 * Debounce
 * @param { Function } function Function
 * @param { number } time The time interval
 * */
const debounce = (() => {
  let timer: NodeJS.Timeout | null = null;
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
 * @param { Function } function Function
 * @param { number } time The time interval
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

### Method 1

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

### Method 2

```ts
/**
 * uuid Output format can be specified
 * @return uuid
 * */
const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
```

### Method 3

```ts
/**
 * uuid Generate a 32-bit uuid
 * @return uuid
 * */
const uuid = () => {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 32; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23];
  const uuid = s.join('');
  return uuid;
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

```ts
/**
 * Page sharing
 * @param {string} url - Links to share
 * @param {string} text - Text to be shared
 * @param {string} title - Titles to share
 * @param {File[]} files - An array of File objects to share
 * */
interface ShareData {
  url: string;
  text: string;
  title: string;
  files: File[];
}

const shareQuote = async (shareData: ShareData): Promise<void> => {
  try {
    await navigator.share(shareData);
  } catch (error) {
    console.error(error);
  }
};
```

## Deep clone

### JSON.parse

```ts
/**
 * @param { object | array} obj
 * @return
 **/
const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};
```

### hash

```ts
/**
 * Deep copy
 * @param {object} obj The object to copy
 * @param hash
 * @returns Returns the new object after copy
 */
const deepClone = <T>(obj: T, hash = new WeakMap<any, any>()): T => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj) as unknown as T;
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj) as unknown as T;
  }

  if (hash.has(obj)) {
    return hash.get(obj);
  }

  let newobj: any = Array.isArray(obj) ? [] : {};

  hash.set(obj, newobj);

  for (let key in obj) {
    const value = obj[key];
    if (typeof value === 'object' && value !== null) {
      newobj[key] = deepClone(value, hash);
    } else {
      newobj[key] = value;
    }
  }

  return newobj;
};
```

### Map

```ts
/**
 * 深拷贝
 * @param {object|array} obj 要拷贝的对象
 * @returns 返回拷贝后的对象
 */
const deepClone = <T>(obj: T): T => {
  const objectMap = new Map();
  const _deepClone = (value: any): any => {
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
 * @param {string} val
 * @param {string} text
 * @param {string} color
 * @return
 */
const textColor = (val: string, text = '', color = 'red'): string => {
  const v: string = text.replace(
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

## Turn on/off full screen

- Turn on full screen

  ```ts
  /**
   * Turn on full screen
   * @param {HTMLElement} element Enable full screen dom elements
   * @return void
   * */
  const launchFullscreen = (element: HTMLElement) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen();
    }
  };
  ```

- Exit Full Screen

  ```ts
  /**
   * Exit Full Screen
   * @return void
   * */
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    }
  };
  ```

## Addition of large integers

```ts
/**
 * Addition of large integers(PadStart is limited to es2017 and above)
 * @param {string} a
 * @param {string} b
 * @return {string}
 * */
const sum = (a: string, b: string): string => {
  let result = '';
  const len = Math.max(a.length, b.length);
  a = a.padStart(len, '0');
  b = b.padStart(len, '0');
  let carry = 0;
  for (let i = len - 1; i >= 0; i--) {
    const n = +a[i] + +b[i] + carry;
    carry = Math.floor(n / 10);
    result = (n % 10) + result;
  }
  if (carry) result = '1' + result;
  return result;
};

console.log(sum('1236128461285412414', '723542341244')); // =>>> "1236129184827753658"
```

## Base conversion

```ts
/**
 * @param {number} num
 * @param {number} n
 * @return {string}
 * */
// To convert decimal to n, you can use toString (n)
const toDecimal = (num, n = 10) => num.toString(n);
// Assuming the number 10 needs to be converted to binary
toDecimal(10, 2); // '1010'

// Convert n to 10, using parseInt (num, n)
// The binary of 10 is 1010
const toDecimalism = (num, n = 10) => parseInt(num, n);
toDecimalism(1010, 2);
```

## Element scrolling

```ts
/**
 * @param {HTMLElement} element
 * */
// If you want to smoothly scroll an element to the starting point of the visible area
const scrollToTop = (element) =>
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
scrollToTop(document.body);

// If you want to smoothly scroll an element to the end of the visible area
const scrollToBottom = (element) =>
  element.scrollIntoView({ behavior: 'smooth', block: 'end' });
scrollToBottom(document.body);
```

## Text paste

```ts
/**
 * When you need to copy text onto the clipboard
 * @param {string} text
 * */
const copy = (text) =>
  navigator.clipboard?.writeText && navigator.clipboard.writeText(text);
copy('The text you need to paste');
```

## Forced waiting

```ts
/**
 * When you need to wait for a period of time but do not want to write it in the setTimeout function, causing a callback to hell
 * @param {string} text
 * */
const sleep = async (t) => new Promise((resolve) => setTimeout(resolve, t));
sleep(2000).then(() => {
  console.log('time');
});
```
