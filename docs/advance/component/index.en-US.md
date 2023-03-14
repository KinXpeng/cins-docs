---
title: Component
order: 2
nav:
  title: Advance
  order: 2
---

## Upload component

```tsx
import React, { useState } from 'react';
import { dragInHandler, dropHandler, addFiles } from './_utils/upload';
import './_styles/index.less';
import './_styles/upload.css';
export default () => {
  const [filesList, setFilesList] = useState<Array<any>>([]);
  const handleDrop = async (e: any) => {
    let resultList = await dropHandler(
      e,
      ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'],
      1024 * 1024,
    );
    // console.log(resultList);
    setFilesList([...filesList, ...resultList]);
  };

  // Select
  const handleSelect = (type: string) => {
    if (type === 'clear') {
      setFilesList([]);
      return;
    }
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    if (type === 'file') {
      // File
      input.multiple = true;
    } else if (type === 'directory') {
      // Directory
      input.webkitdirectory = true;
    }

    input.onchange = async ({ target }) => {
      const files = (target as EventTarget & { files: FileList }).files;
      const resultList = addFiles(
        files,
        ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'],
        1024 * 1024,
      );
      setFilesList(resultList);
      // console.log(resultList);
    };
    input.click();
  };

  // Upload
  const handleUpload = () => {
    console.log('Upload file list=>>>', filesList);
  };
  return (
    <div className="upload">
      <div
        className="upload-drag"
        onDragEnter={dragInHandler}
        onDragOver={dragInHandler}
        onDrop={handleDrop}
      >
        <p className="tips">Drag a file or folder here to upload</p>
        <p className="tips-info">
          (Limit the upload size to 1 MB and support only image files)
        </p>
      </div>
      <button className="cins-button" onClick={() => handleSelect('file')}>
        Select file
      </button>
      <button className="cins-button" onClick={() => handleSelect('directory')}>
        Select folder
      </button>
      <button className="cins-button" onClick={() => handleSelect('clear')}>
        Clear
      </button>
      <button className="cins-button" onClick={handleUpload}>
        上传
      </button>
      <span className="upload-desc">
        (Open the console to view the upload list)
      </span>
      <div className="upload-files">
        <p className="files-row title">
          <span>Sn</span>
          <span>File name</span>
          <span>Upload status</span>
          <span>Upload progress</span>
        </p>
        {filesList.map((item, index) => (
          <p className="files-row" key={index}>
            <span>{index + 1}</span>
            <span>{item.file.name}</span>
            <span>{item.status}</span>
            <span>{item.progress}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
```

## Mobile prompt component

- Component style reference: `Toast.success('tips')`
- Component [get js](https://github.com/KinXpeng/cins-docs/tree/main/utils) in `prompt.js`

#### Import

```js
import { Prompt } from '@/utils/prompt.js';
```

#### Success message

```js
Prompt({
  type: 'success',
  message: 'Successful operation',
});
```

#### Failure prompt

```js
Prompt({
  type: 'error',
  message: 'Operation failed, please click<a>click here for details</a>',
  callback: () => {
    // Click the callback function after the a label.
  },
});
```
