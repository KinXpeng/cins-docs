---
title: Cache
order: 5
nav:
  title: Usually
  order: 1
---

## Browser cache

### Session & Local

```ts
// Use example
Storage.set('key', { name: 'John Doe' }); // set localStorage
Storage.set('key', { name: 'John Doe' }, true); // set sessionStorage
const value = Storage.get('key'); // get localStorage
const value = Storage.get('key', true); // get sessionStorage
Storage.remove('key'); // remove localStorage
Storage.remove('key', true); // remove sessionStorage
Storage.clear(); // clear localStorage
Storage.clear(true); // clear sessionStorage

const Storage = {
  // Set cache
  set(key: string, val: any, isSession: boolean = false) {
    const storage = isSession ? window.sessionStorage : window.localStorage;
    storage.setItem(key, JSON.stringify(val));
  },
  // Fetch cache
  get(key: string, isSession: boolean = false) {
    const storage = isSession ? window.sessionStorage : window.localStorage;
    const json = storage.getItem(key);
    return JSON.parse(json);
  },
  // Remove cache
  remove(key: string, isSession: boolean = false) {
    const storage = isSession ? window.sessionStorage : window.localStorage;
    storage.removeItem(key);
  },
  // Remove all cache
  clear(isSession: boolean = false) {
    const storage = isSession ? window.sessionStorage : window.localStorage;
    storage.clear();
  },
};
```

### LocalStorage

```ts
/**
 * window.localStorage
 * @method set
 * @method get
 * @method remove
 * @method clear
 */
const Local = {
  // Set permanent cache
  set<T>(key: string, val: T) {
    window.localStorage.setItem(key, JSON.stringify(val));
  },
  // Get permanent cache
  get<T>(key: string): T | null {
    const json = window.localStorage.getItem(key);
    return json ? JSON.parse(json) : null;
  },
  // Remove permanent cache
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
  // Remove all permanent caches
  clear() {
    window.localStorage.clear();
  },
};
```

### SessionStorage

```ts
/**
 * window.sessionStorage
 * @method set
 * @method get
 * @method remove
 * @method clear
 */
const Session = {
  // Set temporary cache
  set<T>(key: string, val: T) {
    window.sessionStorage.setItem(key, JSON.stringify(val));
  },
  // Get temporary cache
  get<T>(key: string): T | null {
    const json = window.sessionStorage.getItem(key);
    return json ? JSON.parse(json) : null;
  },
  // Remove temporary cache
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  },
  // Remove all temporary cache
  clear() {
    window.sessionStorage.clear();
  },
};
```

## Cookie

### Set Cookie

```ts
/**
 * @param {string} name
 * @param {string} value
 * @param {number} expiresInMinutes
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

### Get Cookie

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

### Clear Cookie

```ts
/**
  @param {string} name 
*/
const clearCookie = (name: string) => {
  set(name, '', -1);
};
```
