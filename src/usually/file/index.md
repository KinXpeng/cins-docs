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
