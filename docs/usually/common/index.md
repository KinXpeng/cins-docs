---
title: 常用
order: 1
nav:
  title: 常用
  order: 1
---

## 介绍

- 汇集了一些常用但是内容不是很多的方法。
- 关于有多种解决方式，归纳为一类的方法有单独菜单汇总。
- 虽然方法都很常见且比较简单，但是很实用。
- 汇总不易，不喜勿喷。

## 地址栏参数

### 单个参数

```ts
/**
 * 获取地址栏参数(支持hash和history路由)
 * @param {string} key 获取参数的name
 * @return {string|null} 参数值
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

### 多个参数

```ts
/**
 * 解析URL参数
 * @param {string} url
 * @return {object}
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

## json 转 get 参数

```ts
/**
 * 将json数据转换为URL参数
 * @param {object} json
 * @return {string}
 * */
// 示例
let json = {
  id: 1,
  name: 'test',
  address: '北京市',
  sex: true,
  other: 'xxxxx',
};
// 结果 ==> id=1&name=test&address=北京市&sex=true&other=xxxxx
const jsonToParams = (json: object): string => {
  const paramsArray = [];
  for (const [key, value] of Object.entries(json)) {
    paramsArray.push([key, value]);
  }
  const params = new URLSearchParams(paramsArray);
  return params.toString();
};
```

## 校验数据类型

- 支持多种类型的校验
- 方法一仅支持前 7 种类型
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

### 方法一

```ts
/**
 * 校验数据类型
 * @param {unknown} value 数据
 * @return {string} type
 * */
const typeOf = (value: unknown): string => {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
};
```

### 方法二

```ts
/**
 * 校验数据类型
 * @param {unknown} value 数据
 * @return {string} type
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

## 防抖

```ts
/**
 * 防抖
 * @param {Function} function 需要防抖的函数
 * @param {number} time 防抖时间间隔
 * */
const debounce = (() => {
  let timer: NodeJS.Timeout | null = null;
  return (callback: () => void, wait: number = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();
```

## 节流

```ts
/**
 * 节流
 * @param {Function} function 需要节流的函数
 * @param {number} time 节流时间间隔
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

## 手机号脱敏

```ts
/**
 * 手机号脱敏
 * @param mobile 手机号 13122223333 -> 131****3333
 * @return mobile 已脱敏的手机号
 * */
const hideMobile = (mobile: number | string) => {
  return String(mobile).replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
};
```

## 大小写转换

```ts
/**
 * 大小写转换
 * @param str 待转换的字符串
 * @param type 1-全大写 2-全小写 3-首字母大写
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

## 判断手机是 Andoird 还是 IOS

```ts
/**
 * 判断手机是Andoird还是IOS
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

## 生成 uuid

### 方法一

```ts
/**
 * uuid
 * @return uuid
 * */
const uuid = () => {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url); //释放这个url
  return uuid.substring(uuid.lastIndexOf('/') + 1);
};
```

### 方法二

```ts
/**
 * uuid 可指定输出格式
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

### 方法三

```ts
/**
 * uuid 生成32位uuid
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

## 监听当前窗口状态

```js
document.addEventListener('visibilitychange', () => {
  console.log(document.visibilityState); // visible/hidden
});
```

## Web Share API

- navigator.share()：返回一个 promise，如果分享成功的话，该 promise 将会 resolve。该接口会调用原生分享机制，并接收你想分享的数据作为参数。注意，它只能在用户按下链接或按钮时调用。也就是说，它需要 transient activation（瞬时激活）。

```ts
/**
 * 页面分享
 * @param {string} url - 要分享的链接
 * @param {string} text - 要分享的文本
 * @param {string} title - 要分享的标题
 * @param {File[]} files - 要分享的File对象数组
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

## 深拷贝

### JSON.parse 的方式

```ts
/**
 * 对象或数组深拷贝
 * @param {object|array} obj 要深拷贝的对象或数组
 * @return 返回深拷贝后的对象或数组
 */
const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};
```

### hash 的方式

```ts
/**
 * 深拷贝
 * @param {object} obj 要拷贝的对象
 * @param hash 哈希表，用于解决循环引用的问题
 * @return 返回拷贝后的新对象
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

### Map 的方式

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

### MessageChannel 的方式

```js
/**
 * @param {object | array} obj
 *  deepClone({a: 1, b: [{c: 1}]}).then((res) => {
 *    console.log(res);
 * });
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

## 复制文本到剪贴板

```ts
/**
 * @param {string} 文本内容
 */
const copyToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text);
};
```

## 数字转中文大写

### 方法一

```ts
/**
 * 数字转中文大写
 * @param val 当前值字符串
 * @param unit 默认：仟佰拾亿仟佰拾万仟佰拾元角分
 * @returns 返回处理后的字符串
 */
const numberToUppercase = (
  val: any,
  unit = '仟佰拾亿仟佰拾万仟佰拾元角分',
  v = '',
): string => {
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

### 方法二

```ts
/**
 * 数字金额转中文金额
 * @param {number} num 需要转换的数字
 * @return {string} 返回处理后的字符串
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

// 示例用法
console.log(toChineseNumber(123456789.12)); // 输出 "壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元壹角贰分"
```

## 匹配文字变色

```ts
/**
 * 匹配文字变色（搜索时）
 * @param {string} val 当前值字符串
 * @param {string} text 要处理的字符串值
 * @param {string} color 搜索到时字体高亮颜色
 * @return 返回处理后的字符串
 */
const textColor = (val: string, text = '', color = 'red'): string => {
  // 返回内容，添加颜色
  const v: string = text.replace(
    new RegExp(val, 'gi'),
    `<span style='color: ${color}'>${val}</span>`,
  );
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
    for (let i = 0; i < 3; i++)
      if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`;
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

## 判断传入的函数是否标记了 async

```ts
/**
 * 判断传入的函数是否标记了async
 * @param {Function} func 传入的函数
 * @return {Boolean}
 */
const isAsyncFunction = (func) => {
  return func[Symbol.toStringTag] === 'AsyncFunction';
};
```

## 开启/退出全屏

- 开启全屏

  ```ts
  /**
   * 开启全屏
   * @param {HTMLElement} element 开启全屏的dom元素
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

- 退出全屏

  ```ts
  /**
   * 退出全屏
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

## 大整数相加

```ts
/**
 * 大整数相加（padStart 限于es2017以上）
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

## 进制转换

```ts
/**
 * @param {number} num
 * @param {number} n
 * @return {string}
 * */
// 将 10 进制转换成 n 进制，可以使用 toString(n)
const toDecimal = (num, n = 10) => num.toString(n);
// 假设数字10要转换成2进制
toDecimal(10, 2); // '1010'

// 将 n 进制转换成 10 进制，可以使用 parseInt(num, n)
// 10的2进制为1010
const toDecimalism = (num, n = 10) => parseInt(num, n);
toDecimalism(1010, 2);
```

## 元素滚动

```ts
/**
 * @param {HTMLElement} element
 * */
// 如果你希望将一个元素顺滑的滚动到可视区域的起点
const scrollToTop = (element) =>
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
scrollToTop(document.body);

// 如果你希望将一个元素顺滑的滚动到可视区域的终点
const scrollToBottom = (element) =>
  element.scrollIntoView({ behavior: 'smooth', block: 'end' });
scrollToBottom(document.body);
```

## 文本粘贴

```ts
/**
 * 当你需要复制文本到粘贴板上
 * @param {string} text
 * */
const copy = (text) =>
  navigator.clipboard?.writeText && navigator.clipboard.writeText(text);
copy('你需要粘贴的文本');
```

## 强制等待

```ts
/**
 * 当你需要等待一段时间，但又不想写在 setTimeout 函数中，造成回调地狱
 * @param {string} text
 * */
const sleep = async (t) => new Promise((resolve) => setTimeout(resolve, t));
sleep(2000).then(() => {
  console.log('time');
});
```
