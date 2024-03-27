---
title: File
order: 7
nav:
  title: Usually
  order: 1
---

## Universal upload

```ts
/**
  Unified Upload Method
  @param {IUploadParams}  
  @return {Array} FileList
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
    input.webkitdirectory = isDirectory; // Compatibility with different browsers
    input.onchange = ({ target }) => {
      const files = (target as EventTarget & { files: FileList }).files;
      if (size) {
        // Limit size
        for (let i = 0; i < files.length; i++) {
          if (files[i].size && files[i].size / 1024 > size) {
            reject('Upload size out of limit!');
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

## Slice upload

- Get [spark-md5](https://github.com/KinXpeng/cins-docs/tree/main/utils)

- Slice upload

```ts
// Slice upload
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
    console.log(result); // hash value
  };
  input.click();
};
```

- Get the hash value

```ts
// Get the hash value
const hash = (chunks: Blob[]) => {
  return new Promise<string>((resolve) => {
    // You need to import md5 here
    const spark = new SparkMD5.ArrayBuffer();
    function _read(i: number) {
      if (i >= chunks.length) {
        resolve(spark.end());
        return; // Read completion
      }
      const blob = chunks[i];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const bytes = e.target?.result as ArrayBuffer; // The byte array that was read
        spark.append(bytes);
        _read(i + 1);
      };
      reader.readAsArrayBuffer(blob);
    }
    _read(0);
  });
};
```

- Slice

```ts
// Slice
const createChunks = (file: File, chunkSize: number): Blob[] => {
  const result = [];
  for (let i = 0; i < file.size; i += chunkSize) {
    result.push(file.slice(i, i + chunkSize));
  }
  return result;
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

### By http

```ts
/**
 * @param {string} url
 * @return {Promise<string>}
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

### Through canvas

```ts
/**
 * @param {string} url
 * @return {Promise<string>}
 */
const imgUrlToBase64 = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject('Please pass in the url content');
    }

    if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(url)) {
      const image = new Image();
      image.setAttribute('crossOrigin', 'anonymous');
      image.src = url;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx!.drawImage(image, 0, 0, image.width, image.height);
        // Get picture suffix
        const ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        const dataUrl = canvas.toDataURL(`image/${ext}`);
        resolve(dataUrl || '');
      };
    } else {
      // Non-picture address
      reject('Not(png/jpe?g/gif/svg/webp) address');
    }
  });
};
```

## base64ToFile

```ts
/**
 * base64ToFile
 * @param {string} base64String
 * @param {string} fileName
 * @return {File}
 * */
const base64ToFile = (base64String: string, fileName: string): File => {
  // Separating mime types and binary data in base64String
  let arr = base64String.split(','),
    mime = (arr[0].match(/:(.*?);/) || [])[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  // Convert binary data to Blob objects
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  // Create Blob object and set type and modification date
  const _blob = new Blob([u8arr], { type: mime }),
    _blobType = _blob.type,
    _blobLastModifiedDate = new Date().getTime(),
    _blobName = fileName;

  // Return File Object
  return new File([_blob], _blobName, {
    type: _blobType,
    lastModified: _blobLastModifiedDate,
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

## File stream download

### Convert file stream to file download

```ts
/**
 * Convert file stream to file download
 * @param res {AxiosResponse<Blob>}
 */
import { AxiosResponse } from 'axios';
const download = (res: AxiosResponse<Blob>) => {
  const contentDisposition = res.headers['content-disposition'];
  const fileName = decodeURIComponent(
    contentDisposition.split(';')[1].split('filename=')[1].replace(/"/g, ''),
  ); // Get the file name from the response header
  const url = window.URL.createObjectURL(new Blob([res.data])); // Create URL for Blob object
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName); // Set the file name for downloading files
  document.body.appendChild(link);
  link.click(); // Trigger click event to download file
  document.body.removeChild(link); // Remove the created a tag
  window.URL.revokeObjectURL(url); // Release URL Object
};
```

### Interface request header configuration

```ts
/**
 * Interface request header configuration
 * @param params Request parameters
 */
import { download } from '@/utils/file';
const exportList = async (params) => {
  const res = await request.get({
    url: '/api/export',
    params,
    headers: {
      Accept: '*/*',
    },
    responseType: 'blob',
  });
  download(res);
  return res && res.data;
};
```
