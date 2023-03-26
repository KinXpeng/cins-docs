---
title: 缓存
order: 5
nav:
  title: 常用
  order: 1
---

## 浏览器缓存

### Session 和 Local 合并

```ts
// 使用示例
Storage.set('key', { name: 'John Doe' }); // 设置 localStorage 缓存
Storage.set('key', { name: 'John Doe' }, true); // 设置 sessionStorage 缓存
const value = Storage.get('key'); // 获取 localStorage 缓存
const value = Storage.get('key', true); // 获取 sessionStorage 缓存
Storage.remove('key'); // 移除 localStorage 缓存
Storage.remove('key', true); // 移除 sessionStorage 缓存
Storage.clear(); // 清空 localStorage 缓存
Storage.clear(true); // 清空 sessionStorage 缓存

const Storage = {
  // 设置缓存
  set(key: string, val: any, isSession: boolean = false) {
    const storage = isSession ? window.sessionStorage : window.localStorage;
    storage.setItem(key, JSON.stringify(val));
  },
  // 获取缓存
  get(key: string, isSession: boolean = false) {
    const storage = isSession ? window.sessionStorage : window.localStorage;
    const json = storage.getItem(key);
    return JSON.parse(json);
  },
  // 移除缓存
  remove(key: string, isSession: boolean = false) {
    const storage = isSession ? window.sessionStorage : window.localStorage;
    storage.removeItem(key);
  },
  // 移除全部缓存
  clear(isSession: boolean = false) {
    const storage = isSession ? window.sessionStorage : window.localStorage;
    storage.clear();
  },
};
```

### 浏览器永久缓存

```ts
/**
 * window.localStorage 浏览器永久缓存
 * @method set 设置永久缓存
 * @method get 获取永久缓存
 * @method remove 移除永久缓存
 * @method clear 移除全部永久缓存
 */
const Local = {
  // 设置临时缓存
  set<T>(key: string, val: T) {
    window.localStorage.setItem(key, JSON.stringify(val));
  },
  // 获取临时缓存
  get<T>(key: string): T | null {
    const json = window.localStorage.getItem(key);
    return json ? JSON.parse(json) : null;
  },
  // 移除临时缓存
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
  // 移除全部临时缓存
  clear() {
    window.localStorage.clear();
  },
};
```

### 浏览器临时缓存

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
  set<T>(key: string, val: T) {
    window.sessionStorage.setItem(key, JSON.stringify(val));
  },
  // 获取临时缓存
  get<T>(key: string): T | null {
    const json = window.sessionStorage.getItem(key);
    return json ? JSON.parse(json) : null;
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
/**
 * @param {string} name cookie名称
 * @param {string} value cookie的值
 * @param {number} expiresInMinutes 过期时间
 */
const setCookie = (
  name: string,
  value: string,
  expiresInMinutes: number = 30,
): void => {
  const expirationDate = new Date(
    Date.now() + expiresInMinutes * 60 * 1000,
  ).toUTCString();
  document.cookie = `${name}=${value};expires=${expirationDate};path=/`;
};
```

### 获取 Cookie

```ts
/**
 * @param {string} name
 * @return {string}
 */
const getCookie = (name: string): string => {
  const nameString = name + '=';
  const value = document.cookie
    .split(';')
    .find((item) => item.trim().startsWith(nameString));
  return value ? value.substring(nameString.length) : '';
};
```

### 清除 Cookie

```ts
/**
  @param {string} name 
*/
const clearCookie = (name: string) => {
  set(name, '', -1);
};
```
