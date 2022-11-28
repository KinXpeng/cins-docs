---
nav:
  title: Usually
  path: /usually
---

## Various methods commonly used

- A collection of methods that are commonly used but not very informative.
- There are multiple solutions, and there are separate menus for those that fall into one category.
- Although the methods are common and simple, they are useful.
- Summary is not easy, don't spray if you don't like.

## Cookie

### Set Cookie

```ts
/**
 * @params cname cookie name
 * @params cvalue cookie value
 * @params extime expiration time
 */
const set = (cname: string, cvalue: string, extime: number) => {
  // default 30 minutes
  if (!extime) {
    extime = 30;
  }
  var d = new Date();
  d.setTime(d.getTime() + extime * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};
```

### Get Cookie

```ts
/**
 * @params name cookie name
 * @return cookie value
 * */
const get = (name: string): string => {
  const nameString = name + '=';
  const value = document.cookie.split(';').filter((item) => {
    return item.includes(nameString);
  });
  if (value.length) {
    return value[0].substring(nameString.length, value[0].length);
  } else {
    return '';
  }
};
```

### Clear Cookie

```ts
/*
  @params name cookie name
*/
const clear = (name: string) => {
  set(name, '', -1);
};
```

## Upload

```ts
/**
  Unified Upload Method
  @params type Upload File Type string
  @params flag Whether multiple files can be uploaded  boolean
  @params size Upload file size（The unit is KB） number
*/
const upload = (type: string, flag: boolean, size: number) => {
  return new Promise((resolve, reject) => {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    if (flag) input.multiple = true;
    input.accept = type;
    input.onchange = ({ target }) => {
      const files = (target as EventTarget & { files: FileList }).files;
      let overSize = true; // Default not exceeding
      if (size) {
        // Limit the size of the
        for (let key in files) {
          if (files[key].size && files[key].size / 1024 > size) {
            overSize = false;
          }
        }
      }
      if (overSize) {
        resolve(files);
      } else {
        reject('Upload size out of limit!');
      }
    };
    input.click();
  });
};
```

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

## Array objects are de-weighted according to fields

```ts
/**
 * Array objects are de-weighted according to fields
 * @param arr The array to be removed
 * @param key Based on the name of the field to be deleted
 * @return arr
 * */
const uniqueArrayObject = (arr: Array<any> = [], key: string) => {
  if (arr.length === 0) return;
  let list: Array<any> = [];
  const map: any = {};
  arr.forEach((item) => {
    if (!map[item[key]]) {
      map[item[key]] = item;
    }
  });
  list = Object.values(map);
  return list;
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

## Fuzzy search

```ts
/**
 * Fuzzy search
 * @param list The original array
 * @param keyWord Keywords for query
 * @param attribute The array needs to retrieve attributes
 * @return arr
 * */
const fuzzyQuery = (list: Array<any>, keyWord: string, attribute: string) => {
  const reg = new RegExp(keyWord);
  const arr = [];
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][attribute])) {
      arr.push(list[i]);
    }
  }
  return arr;
};
```

## Traverse the tree nodes

```ts
/**
 * Traverse the tree nodes
 * @param data Tree data
 * @param callback The callback function
 * @param childrenName Array of child nodes
 * */
const foreachTree = (
  data: Array<any>,
  callback: (params: any) => void,
  childrenName = 'children',
) => {
  for (let i = 0; i < data.length; i++) {
    callback(data[i]);
    if (data[i][childrenName] && data[i][childrenName].length > 0) {
      foreachTree(data[i][childrenName], callback, childrenName);
    }
  }
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
