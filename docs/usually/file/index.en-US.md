---
title: File
order: 7
nav:
  title: Usually
  order: 1
---

## Upload

```ts
/**
  Unified Upload Method
  @param { IUploadParams }  
  @return { Array } FileList
*/
interface IUploadParams {
  type: string; // Upload File Type
  multiple?: boolean; // Whether multiple files can be uploaded
  size?: number; // Upload file size（The unit is KB）
  isDirectory?: boolean; // Whether to upload file directories
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

## FileToBase64

```ts
/**
 * Base64
 * @param file
 * @returns {Promise<string>}
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

## imgUrlToBase64

```ts
/**
 * @param { string } url
 * @return { Promise<string> }
 */
const imgUrlToBase64 = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject('Please pass in the url content');
    }

    if (/\.(png|jpe?g|gif|svg|webp)(\?.*)?$/.test(url)) {
      // Picture address
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
          reject('File reading failure');
        };
      };
      xhr.onerror = () => {
        reject('Network error');
      };
      xhr.send();
    } else {
      // Non-picture address
      reject('Not(png/jpe?g/gif/svg/webp) address');
    }
  });
};
```

## Download the file using the url

- window.open

  ```js
  window.open(url, '_blank');
  ```

- Tag a

  ```js
  const a = document.createElement('a'); // Create a new A tag
  a.href = url; // File link
  a.download = name; // Download name
  a.click();
  a.remove();
  ```

- blob

  ```js
  // There may be cross-domain issues
  fetch(url).then((res) =>
    res.blob().then((blob) => {
      const a = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name; // Download name
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }),
  );
  ```

## Combine pictures and text into one image

- Download dependency

  ```bash
  npm install html2canvas --save
  ```

- Import it what page you need

  ```ts
  import html2canvas from 'html2canvas';
  ```

- Page

  ```html
  <template>
    <div>
      <div class="download_img" ref="canvas">
        <img
          src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF"
          alt=""
        />
        <p>testName</p>
      </div>
      <el-button type="primary" @click="handleDownload('test')"
        >Download pictures and text</el-button
      >
    </div>
  </template>
  ```

- Build download by `ref`

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

## Slice upload

- Get [spark-md5](https://github.com/KinXpeng/cins-docs/tree/main/utils)

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
