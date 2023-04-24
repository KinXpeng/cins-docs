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

## video 组件

```ts
// 使用示例
import FlexoVideo from '@/components/flexoVideo';
function Demo() {
  const config = {
    src: 'xxxx',
    controls: true,
    controlsList: 'nodownload noremoteplayback noplaybackrate',
    disablePictureInPicture: true,
    // fullScreen: true,
    // play: true,
    // progress: true,
    // currentTime: true,
    // remainTime: true,
    // volume: true,
    // volumeControls: true
  };
  return (
    <>
      <div className="demo-container">
        <div className="video-demo">
          <FlexoVideo config={config} />
        </div>
      </div>
    </>
  );
}

export default Demo;
```

```tsx
import React from 'react';
import './_styles/flexovideo.css';
interface IConfigProps {
  src: string; // video播放地址
  controls?: boolean; // 是否显示控制栏
  controlsList?: string; // 控制栏列表显示的功能
  autoplay?: boolean; // 是否自动播放
  width?: string | number; // video的宽度
  height?: string | number; // video的高度
  loop?: boolean; // 是否循环播放
  preload?: string; // 是否预加载
  poster?: string; // video的封面
  muted?: boolean; // 是否静音
  disablePictureInPicture?: boolean; // 是否禁用画中画
  options?: string; // 进度条、音量、全屏等按钮的显示
  fullScreen?: boolean;
  play?: boolean;
  progress?: boolean;
  currentTime?: boolean;
  remainTime?: boolean;
  volume?: boolean;
  volumeControls?: boolean;
}
// nodownload: 不要下载按钮
// noremoteplayback: 不要远程回放
// noplaybackrate 不要播放速度按钮

// 此处的config可从父组件中传递
export default ({ config = {} }) => {
  const optionsName = (): string => {
    if (!Object.values(config).some(Boolean)) return '';
    let options = '';
    options += `${config.fullScreen == false ? 'fullScreen ' : ''}`;
    options += `${config.play == false ? 'play ' : ''}`;
    options += `${config.progress == false ? 'progress ' : ''}`;
    options += `${config.currentTime == false ? 'currentTime ' : ''}`;
    options += `${config.remainTime == false ? 'remainTime ' : ''}`;
    options += `${config.volume == false ? 'volume ' : ''}`;
    options += `${config.volumeControls == false ? 'volumeControls ' : ''}`;
    return options;
  };

  // 默认配置
  const defaultConfig: IConfigProps = {
    src: config.src || '',
    autoplay: config.autoplay || false,
    controls: config.controls || true,
    controlsList: config.controlsList || '',
    width: config.width || '100%',
    height: config.height || '100%',
    loop: config.loop || false,
    preload: config.preload || 'auto',
    poster: config.poster || '',
    muted: config.muted || false,
    disablePictureInPicture: config.disablePictureInPicture || false,
    options: optionsName() || '',
  };

  return (
    <div className="flexo-video">
      <video
        className={defaultConfig.options}
        src={defaultConfig.src}
        controls={defaultConfig.controls}
        controlsList={defaultConfig.controlsList}
        style={{ width: defaultConfig.width, height: defaultConfig.height }}
        loop={defaultConfig.loop}
        preload={defaultConfig.preload}
        poster={defaultConfig.poster}
        muted={defaultConfig.muted}
        disablePictureInPicture={defaultConfig.disablePictureInPicture}
      ></video>
    </div>
  );
};
```
