---
nav:
  title: 缓存
  path: /usually
---

## 浏览器永久缓存

```ts
/**
 * window.localStorage 浏览器永久缓存
 * @method set 设置永久缓存
 * @method get 获取永久缓存
 * @method remove 移除永久缓存
 * @method clear 移除全部永久缓存
 */
const Local = {
  // 设置永久缓存
  set(key: string, val: any) {
    window.localStorage.setItem(key, JSON.stringify(val));
  },
  // 获取永久缓存
  get(key: string) {
    let json = <string>window.localStorage.getItem(key);
    return JSON.parse(json);
  },
  // 移除永久缓存
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
  // 移除全部永久缓存
  clear() {
    window.localStorage.clear();
  },
};
```

## 浏览器临时缓存

```ts
/**
 * window.sessionStorage 浏览器临时缓存
 * @method set 设置临时缓存
 * @method get 获取临时缓存
 * @method remove 移除临时缓存
 * @method clear 移除全部临时缓存
 */
const Session = {
  // 设置临时缓存
  set(key: string, val: any) {
    window.sessionStorage.setItem(key, JSON.stringify(val));
  },
  // 获取临时缓存
  get(key: string) {
    let json = <string>window.sessionStorage.getItem(key);
    return JSON.parse(json);
  },
  // 移除临时缓存
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  },
  // 移除全部临时缓存
  clear() {
    window.sessionStorage.clear();
  },
};
```

## Cookie

### 设置 Cookie

```ts
/*
  @params cname cookie名称 
  @params cvalue cookie的值
  @params extime 过期时间
*/
const set = (cname: string, cvalue: string, extime: number) => {
  //默认30分钟
  if (!extime) {
    extime = 30;
  }
  var d = new Date();
  d.setTime(d.getTime() + extime * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};
```

### 获取 Cookie

```ts
/*
  @params name cookie名称 
  @return cookie的值
*/
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

### 清除 Cookie

```ts
/*
  @params name cookie名称 
*/
const clear = (name: string) => {
  set(name, '', -1);
};
```
