---
nav:
  title: File
  path: /usually
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
