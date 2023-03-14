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
  @param {string} type Upload File Type 
  @param {boolean} multiple Whether multiple files can be uploaded  
  @param {number} size Upload file size（The unit is KB） 
  @param {boolean} isDirectory Whether to upload file directories
  @return {Array} FileList
*/
interface Iparams {
  type: string;
  multiple: boolean;
  size: number;
  isDirectory: boolean;
}
const upload = ({
  type,
  multiple = false,
  size,
  isDirectory = false,
}: Iparams) => {
  return new Promise((resolve, reject) => {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    if (multiple) input.multiple = true;
    if (isDirectory) {
      // Compatibility with different browsers
      input.webkitdirectory = true;
      // input.mozdirectory = true
      // input.odirectory = true
    }
    input.accept = type;
    input.onchange = ({ target }) => {
      const files = (target as EventTarget & { files: FileList }).files;
      let overSize = true; // Default not exceeding
      if (size) {
        // Limit the size
        for (let key in files) {
          if (files[key].size && files[key].size / 1024 > size) {
            overSize = false;
          }
        }
      }
      if (overSize) {
        resolve(files);
      } else {
        reject('Upload size out of limit!');
      }
    };
    input.click();
  });
};
```

## FileToBase64

```ts
/**
 * Base64
 * @param file  {File}
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

## imgUrlToBase64

```ts
const imgUrlToBase64 = (url: string) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject('Please pass in the url content');
    }

    if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(url)) {
      // ImgUrl
      const image = new Image();
      // Set the cross-domain problem
      image.setAttribute('crossOrigin', 'anonymous');
      // ImgUrl
      image.src = url;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx: any = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
        // Get picture suffix
        const ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        // convert base64
        const dataUrl = canvas.toDataURL(`image/${ext}`);
        resolve(dataUrl || '');
      };
    } else {
      // Non-picture address
      reject('Not(png/jpe?g/gif/svg)address');
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

  ```js
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

  ```js
  // download
  handleDownload(name) {
    window.pageYoffset = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // First get the dom node that you want to convert to img
    // const node = document.getElementById("canvas"); // The id name passed in
    const node = this.$refs.canvas
    // console.log("node", node);
    const width = node.offsetWidth; // width
    const height = node.offsetHeight; // height
    const scale = 4; // Magnification This is equivalent to sharpness a little bit more clarity
    html2canvas(node, {
      width: width,
      heigth: height,
      backgroundColor: "#ffffff", //Background color
      dpi: window.devicePixelRatio * 2, // Increase pixels by screen pixel ratio
      scale: scale,
      X: 0,
      Y: 0,
      scrollX: -3, // Set this offset to -3 or more if you have multiple white edges to the left
      scrollY: -10,
      useCORS: true,
      allowTaint: true,
    }).then((canvas) => {
      // console.log("canvas", canvas);
      const url = canvas.toDataURL();
      const a = document.createElement("a"); // Create an a tag to download
      a.download = name; // Set the name of the image to download
      const event = new MouseEvent("click"); // Add a click event
      a.href = url;
      a.dispatchEvent(event);
    });
  }
  ```

## Slice upload

- Get [spark-md5](https://github.com/KinXpeng/cins-docs/tree/main/utils)

```js
// Slice upload
const sliceUpload = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.onchange = async (e) => {
    const file = input.files[0];
    if (!file) {
      return;
    }
    const chunks = createChunks(file, 10 * 1024 * 1024);
    const result = await hash(chunks);
    console.log(result); // hash
  };
  input.click();
};

// get the value of hash
const hash = (chunks) => {
  return new Promise((resolve) => {
    // import md5
    const spark = new SparkMD5();
    function _read(i) {
      if (i >= chunks.length) {
        resolve(spark.end());
        return; // Read completion
      }
      const blob = chunks[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        const bytes = e.target.result; // The byte array that was read
        spark.append(bytes);
        _read(i + 1);
      };
      reader.readAsArrayBuffer(blob);
    }
    _read(0);
  });
};

// slice
const createChunks = (file, chunkSize) => {
  const result = [];
  for (let i = 0; i < file.size; i += chunkSize) {
    result.push(file.slice(i, i + chunkSize));
  }
  return result;
};
```
