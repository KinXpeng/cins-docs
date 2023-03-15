---
title: 组件
order: 2
nav:
  title: 进阶
  order: 2
---

## 上传组件

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

  // 选择
  const handleSelect = (type: string) => {
    if (type === 'clear') {
      setFilesList([]);
      return;
    }
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    if (type === 'file') {
      // 文件
      input.multiple = true;
    } else if (type === 'directory') {
      // 文件夹
      input.webkitdirectory = true;
    }

    input.onchange = async ({ target }) => {
      const files = (target as EventTarget & { files: FileList }).files;
      const resultList = addFiles(
        files,
        ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'],
        1024 * 1024,
      );
      setFilesList([...filesList, ...resultList]);
      // console.log(resultList);
    };
    input.click();
  };

  // 上传
  const handleUpload = () => {
    console.log('上传文件列表=>>>', filesList);
  };
  return (
    <div className="upload">
      <div
        className="upload-drag"
        onDragEnter={dragInHandler}
        onDragOver={dragInHandler}
        onDrop={handleDrop}
      >
        <div>
          <p className="tips">将文件或文件夹拖动到此处进行上传</p>
          <p className="tips-info">（限制上传大小1M，仅支持图片格式的文件）</p>
        </div>
      </div>
      <button className="cins-button" onClick={() => handleSelect('file')}>
        选择文件
      </button>
      <button className="cins-button" onClick={() => handleSelect('directory')}>
        选择文件夹
      </button>
      <button className="cins-button" onClick={() => handleSelect('clear')}>
        清空
      </button>
      <button className="cins-button" onClick={handleUpload}>
        上传
      </button>
      <span className="upload-desc">（打开控制台查看上传列表）</span>
      <div className="upload-files">
        <p className="files-row title">
          <span>序号</span>
          <span>文件名称</span>
          <span>上传状态</span>
          <span>上传进度</span>
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

## 移动端提示组件

- 组件样式参考 vant 的`Toast.success('提示')`
- 组件 [js 获取](https://github.com/KinXpeng/cins-docs/tree/main/utils)中的 `prompt.js`

#### 引入

```js
import { Prompt } from '@/utils/prompt.js';
```

#### 成功提示

```js
Prompt({
  type: 'success',
  message: '操作成功',
});
```

#### 失败提示

```js
Prompt({
  type: 'error',
  message: '操作失败，请点击<a>此处查看详情</a>',
  callback: () => {
    // 点击a标签后的回调函数
  },
});
```
