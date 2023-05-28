---
title: Component
order: 2
nav:
  title: Advance
  order: 2
---

## Battery information

```tsx
import React, { useState, useEffect, useReducer, useRef } from 'react';
import './_styles/battery.css';

interface BatteryManager {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  addEventListener: Function;
}

declare global {
  interface Navigator {
    getBattery: () => Promise<BatteryManager>;
    battery: BatteryManager;
  }
}
export default () => {
  const [isAddListener, setIsAddListener] = useState<boolean>(false);
  const [battery, setBattery] = useState<BatteryManager>();
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const elecQuality = useRef();

  // Update battery status
  async function updateBatteryStatus() {
    const bat: BatteryManager = await navigator.getBattery();
    setBattery(bat);
    if (elecQuality.current) {
      console.log(elecQuality.current.style);
      elecQuality.current.style.background = `linear-gradient(to right, ${
        bat.level > 0.3 ? '#6feb53' : '#e6260c'
      } ${bat.level * 100}%, transparent ${100 - bat.level * 100}%)`;
    }
    forceUpdate();
  }

  useEffect(() => {
    updateBatteryStatus();
    if (battery && !isAddListener) {
      setIsAddListener(true);
      battery?.addEventListener('chargingchange', updateBatteryStatus);
      battery?.addEventListener('levelchange', updateBatteryStatus);
      battery?.addEventListener('chargingtimechange', updateBatteryStatus);
      battery?.addEventListener('dischargingtimechange', updateBatteryStatus);
    }
  }, [battery]);
  return (
    <div className="battery-container">
      {battery && (
        <>
          <p className="battery-title">
            Battery status({battery.level * 100}%)
          </p>
          <div className="battery-status">
            <div ref={elecQuality} className="status-quantity"></div>
            {battery.charging && <div className="battery-charging"></div>}
          </div>
        </>
      )}
    </div>
  );
};
```

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
        <div>
          <p className="tips">Drag a file or folder here to upload</p>
          <p className="tips-info">
            (Limit the upload size to 1 MB and support only image files)
          </p>
        </div>
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

## Video component

```ts
// Use example
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
  src: string; // video play url
  controls?: boolean; // Whether to display the control bar
  controlsList?: string; // Control bar list of displayed functions
  autoplay?: boolean; // Auto play or not
  width?: string | number; // Width of video
  height?: string | number; // Height of video
  loop?: boolean; // Loop or not
  preload?: string; // Preload or not
  poster?: string; // Video cover
  muted?: boolean; // Mute or not
  disablePictureInPicture?: boolean; // Whether to disable picture-in-picture
  options?: string; // Display of progress bar, volume, full screen and other buttons
  fullScreen?: boolean;
  play?: boolean;
  progress?: boolean;
  currentTime?: boolean;
  remainTime?: boolean;
  volume?: boolean;
  volumeControls?: boolean;
}
// nodownload: Do not download button
// noremoteplayback: Do not remote playback
// noplaybackrate Do not play the speed button

// config here can be passed from the parent component
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
