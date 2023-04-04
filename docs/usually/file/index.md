---
title: 文件
order: 7
nav:
  title: 常用
  order: 1
---

## 上传

```ts
/**
  上传统一方法
  @param {IUploadParams}  
  @return {Array} FileList
*/
interface IUploadParams {
  type: string; // 上传文件类型
  multiple?: boolean; // 是否支持多个文件上传
  size?: number; // 上传文件大小(单位为KB)
  isDirectory?: boolean; // 是否支持上传文件目录
}

const upload = ({
  type,
  multiple = false,
  size,
  isDirectory = false,
}: IUploadParams): Promise<FileList> => {
  return new Promise((resolve, reject) => {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    input.accept = type;
    input.multiple = multiple;
    input.webkitdirectory = isDirectory; // 兼容不同浏览器
    input.onchange = ({ target }) => {
      const files = (target as EventTarget & { files: FileList }).files;
      if (size) {
        // 限制大小
        for (let i = 0; i < files.length; i++) {
          if (files[i].size && files[i].size / 1024 > size) {
            reject('上传大小超出限制！');
            return;
          }
        }
      }
      resolve(files);
    };
    input.click();
  });
};
```

## File 转 base64

```ts
/**
 * 获取文件的Base64
 * @param file {File} 文件
 * @returns {Promise<string>} Base64编码字符串
 */
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
  });
};
```

## imgUrl 转 base64

### 通过 http 的方式

```ts
/**
 * @param {string} url
 * @return {Promise<string>}
 */
const imgUrlToBase64 = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject('请传入url内容');
    }

    if (/\.(png|jpe?g|gif|svg|webp)(\?.*)?$/.test(url)) {
      // 图片地址
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        const blob = xhr.response;
        const fileReader = new FileReader();
        fileReader.readAsDataURL(blob);
        fileReader.onload = () => {
          const result = fileReader.result as string;
          resolve(result);
        };
        fileReader.onerror = () => {
          reject('文件读取失败');
        };
      };
      xhr.onerror = () => {
        reject('网络错误');
      };
      xhr.send();
    } else {
      // 非图片地址
      reject('非(png/jpe?g/gif/svg/webp等)图片地址');
    }
  });
};
```

### 通过 canvas 的方式

```ts
/**
 * @param {string} url
 * @return {Promise<string>}
 */
const imgUrlToBase64 = (url: string): Promise<string> => {
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
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx!.drawImage(image, 0, 0, image.width, image.height);
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

## 通过 URL 下载文件

- window.open

  ```js
  window.open(url, '_blank');
  ```

- a 标签

  ```js
  const a = document.createElement('a'); //新建一个a标签
  a.href = url; // 文件链接
  a.download = name; // 下载名称
  a.click();
  a.remove();
  ```

- blob

  ```js
  // 可能会存在跨域问题
  fetch(url).then((res) =>
    res.blob().then((blob) => {
      const a = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name; // 下载名称
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }),
  );
  ```

## 将图片和文字合成一张图

- 下载依赖

  ```bash
  npm install html2canvas --save
  ```

- 在需要使用的页面引入

  ```ts
  import html2canvas from 'html2canvas';
  ```

- 页面

  ```html
  <template>
    <div>
      <div class="download_img" ref="canvas">
        <img
          src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF"
          alt=""
        />
        <p>城市风景图</p>
      </div>
      <el-button type="primary" @click="handleDownload('测试')"
        >下载图片及文字</el-button
      >
    </div>
  </template>
  ```

- 通过 `ref` 构建下载

  ```ts
  // 下载
  const handleDownload = (name: string) => {
    window.scrollTo(0, 0);
    const node = document.getElementById('canvas') || document.body;
    const width = node.offsetWidth;
    const height = node.offsetHeight;
    const scale = 4;
    html2canvas(node, {
      width,
      height,
      backgroundColor: '#ffffff',
      dpi: window.devicePixelRatio * 2,
      scale,
      x: 0,
      y: 0,
      scrollX: -3,
      scrollY: -10,
      useCORS: true,
      allowTaint: true,
    }).then((canvas: HTMLCanvasElement) => {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.download = name;
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };
  ```

## 切片上传

- 获取 [spark-md5](https://github.com/KinXpeng/cins-docs/tree/main/utils)

- 切片上传

```ts
// 切片上传
const sliceUpload = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.onchange = async (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }
    const chunks = createChunks(file, 10 * 1024 * 1024);
    const result = await hash(chunks);
    console.log(result); // hash值
  };
  input.click();
};
```

- 获取 hash 值

```ts
// 获取hash值
const hash = (chunks: Blob[]) => {
  return new Promise<string>((resolve) => {
    // 此处需要引入md5
    const spark = new SparkMD5.ArrayBuffer();
    function _read(i: number) {
      if (i >= chunks.length) {
        resolve(spark.end());
        return; // 读取完成
      }
      const blob = chunks[i];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const bytes = e.target?.result as ArrayBuffer; // 读取到的字节数组
        spark.append(bytes);
        _read(i + 1);
      };
      reader.readAsArrayBuffer(blob);
    }
    _read(0);
  });
};
```

- 切片

```ts
// 切片
const createChunks = (file: File, chunkSize: number): Blob[] => {
  const result = [];
  for (let i = 0; i < file.size; i += chunkSize) {
    result.push(file.slice(i, i + chunkSize));
  }
  return result;
};
```
