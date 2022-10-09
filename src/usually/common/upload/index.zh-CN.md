---
nav:
  title: 上传
  path: /usually
---

## 上传

```ts
/*
  上传统一方法
  @params type 上传文件类型 string
  @params flag 是否支持多个文件上传  boolean
  @params size 上传文件大小(单位为KB) number
*/
const upload = (type: string, flag: boolean, size: number) => {
  return new Promise((resolve, reject) => {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    if (flag) input.multiple = true;
    input.accept = type;
    input.onchange = ({ target }) => {
      const files = (target as EventTarget & { files: FileList }).files;
      let overSize = true; // 默认不超出
      if (size) {
        // 限制大小
        for (let key in files) {
          if (files[key].size && files[key].size / 1024 > size) {
            overSize = false;
          }
        }
      }
      if (overSize) {
        resolve(files);
      } else {
        reject('上传大小超出限制！');
      }
    };
    input.click();
  });
};
```