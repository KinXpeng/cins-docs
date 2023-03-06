---
title: Cache
order: 5
nav:
  title: Usually
  order: 1
---

## LocalStorage

```ts
/**
 * window.localStorage
 * @method set
 * @method get
 * @method remove
 * @method clear
 */
const Local = {
  // set
  set(key: string, val: any) {
    window.localStorage.setItem(key, JSON.stringify(val));
  },
  // get
  get(key: string) {
    let json = <string>window.localStorage.getItem(key);
    return JSON.parse(json);
  },
  // remove
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
  // clear
  clear() {
    window.localStorage.clear();
  },
};
```

## SessionStorage

```ts
/**
 * window.sessionStorage
 * @method set
 * @method get
 * @method remove
 * @method clear
 */
const Session = {
  // set
  set(key: string, val: any) {
    window.sessionStorage.setItem(key, JSON.stringify(val));
  },
  // get
  get(key: string) {
    let json = <string>window.sessionStorage.getItem(key);
    return JSON.parse(json);
  },
  // remove
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  },
  // clear
  clear() {
    window.sessionStorage.clear();
  },
};
```

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
