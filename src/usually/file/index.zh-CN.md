---
nav:
  title: 文件
  path: /usually
---

## 上传

```ts
/**
  上传统一方法
  @param type 上传文件类型 string
  @param flag 是否支持多个文件上传  boolean
  @param size 上传文件大小(单位为KB) number
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

## File 转 base64

```ts
/**
 * 获取文件的Base64
 * @param file  {File}  文件
 */
const fileToBase64 = (file: any) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = ({ target }) => {
      // resolve(e.target.result)
      const result = (target as EventTarget & { result: string }).result;
      resolve(result);
    };
  });
};
```

## imgUrl 转 base64

```ts
const imgUrlToBase64 = (url: string) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject('请传入url内容');
    }

    if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(url)) {
      // 图片地址
      const image = new Image();
      // 设置跨域问题
      image.setAttribute('crossOrigin', 'anonymous');
      // 图片地址
      image.src = url;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx: any = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
        // 获取图片后缀
        const ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        // 转base64
        const dataUrl = canvas.toDataURL(`image/${ext}`);
        resolve(dataUrl || '');
      };
    } else {
      // 非图片地址
      reject('非(png/jpe?g/gif/svg等)图片地址');
    }
  });
};
```
