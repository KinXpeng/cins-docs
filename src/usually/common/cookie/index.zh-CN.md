---
nav:
  title: Cookie
  path: /usually
---

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
