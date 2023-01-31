---
nav:
  title: 常用方法
  path: /usually
---

## 分组一

- 汇集了一些常用但是内容不是很多的方法。
- 关于有多种解决方式，归纳为一类的方法有单独菜单汇总。
- 虽然方法都很常见且比较简单，但是很实用。
- 汇总不易，不喜勿喷。

## 地址栏参数

### 单个参数

```ts
/**
 * 获取地址栏参数
 * @param name 获取参数的name
 * @return value 参数值
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

### 多个参数

```ts
/**
 * 解析URL参数
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

## json 转 get 参数

```ts
/**
 * 将json数据转换为URL参数
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
// 结果 ==> id=1&name=test&address=北京市&sex=true&other=xxxxx
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

## 校验数据类型

```ts
/**
 * 校验数据类型
 * @param obj 数据
 * @return string type
 * */
const typeOf = (obj: any): string => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
```

## 防抖

```ts
/**
 * 防抖
 * @param function 需要防抖的函数
 * @param time 防抖时间间隔
 * */
const debounce = (() => {
  let timer: any = null;
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
 * @param function 需要节流的函数
 * @param time 节流时间间隔
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

## 监听当前窗口状态

```js
document.addEventListener('visibilitychange', () => {
  console.log(document.visibilityState); // visible/hidden
});
```

## Web Share API

- navigator.share()：返回一个 promise，如果分享成功的话，该 promise 将会 resolve。该接口会调用原生分享机制，并接收你想分享的数据作为参数。注意，它只能在用户按下链接或按钮时调用。也就是说，它需要 transient activation（瞬时激活）。

```js
/**
 * 页面分享
 * @param url 要分享的链接
 * @param text 要分享的文本
 * @param title 要分享的标题
 * @param files 表示要分享的File对象数组
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

## 深拷贝

### JSON.parse 的方式

```js
/**
 * @param { object | array} obj
 **/
obj = JSON.parse(JSON.stringify(obj));
```

### hash 的方式

```js
/**
 * 深拷贝
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
  //将以上几种特殊类型直接copy返回
  if (hash.has(obj)) {
    return hash.get(obj); //查表,存在就不重复拷贝，解决循环冗余
  }
  let newobj = {};
  //递归拷贝并存表
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

### Map 的方式

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

### MessageChannel 的方式

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
