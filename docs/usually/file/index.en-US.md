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
  @params type Upload File Type string
  @params flag Whether multiple files can be uploaded  boolean
  @params size Upload file size（The unit is KB） number
*/
const upload = (type: string, flag: boolean, size: number) => {
  return new Promise((resolve, reject) => {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    if (flag) input.multiple = true;
    input.accept = type;
    input.onchange = ({ target }) => {
      const files = (target as EventTarget & { files: FileList }).files;
      let overSize = true; // Default not exceeding
      if (size) {
        // Limit the size of the
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
