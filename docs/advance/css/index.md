---
title: CSS
order: 0
nav:
  title: 进阶
  order: 2
---

## 输入框抖动

```tsx
import React, { useState } from 'react';
import './_styles/index.less';
import './_styles/shake.css';

export default () => {
  const [shake, setShake] = useState(false);
  const [value, setValue] = useState('');
  // 校验手机号
  const isMobilePhone = (str: string): boolean => {
    const pattern =
      /^((13[0-9])|(14[0,1,4-9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))[0-9]{8}$/;
    return pattern.test(str);
  };
  const trigger = () => {
    if (isMobilePhone(value)) {
      console.log('手机号格式正确！');
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 820);
    }
  };
  return (
    <div className="apply-shake-input">
      <input
        className={shake ? 'apply-shake cins-input' : 'cins-input'}
        status={isMobilePhone(value) || !value ? '' : 'error'}
        placeholder="请输入手机号"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button className="cins-button" onClick={trigger}>
        校验
      </button>
    </div>
  );
};
```

## 文字描边

```tsx
import React from 'react';
import './_styles/stroke.css';
export default () => {
  return <div className="stroke-text">你好，这里是CINS！</div>;
};
```

## 网站变成灰色效果

```tsx
import React from 'react';
import './_styles/gray.css';
export default () => {
  return (
    <div className="content">
      <div className="gray-text">默认状态，色彩斑斓！</div>
      <div className="gray-text silence">默认状态，色彩斑斓！</div>
    </div>
  );
};
```

## CSS 伪类实现提示语图标效果

```tsx
import React from 'react';
import './_styles/pseudo.css';
export default () => {
  return <div className="pseudo-text">这是一条有图标的提示语！</div>;
};
```

## CSS 节流

```tsx
import React from 'react';
import './_styles/index.less';
import './_styles/throttle.css';
export default () => {
  const throttleTips = () => {
    alert('按钮已点击！');
  };
  return (
    <div className="throttle-button">
      <div className="button-wrap">
        <button className="cins-button" onClick={throttleTips}>
          未节流
        </button>
        <span>（不间断触发）</span>
      </div>
      <div className="button-wrap">
        <button onClick={throttleTips} className="cins-button ant-throttle">
          节流
        </button>
        <span>（2s触发一次）</span>
      </div>
    </div>
  );
};
```

## 超出多行省略

```tsx
import React from 'react';
import './_styles/ellipsis.css';
export default () => {
  return (
    <div className="throttle-wrap">
      <div className="ellipsis-overflow">
        测试一下超出一行文字出现省略号的功能。
      </div>
      <div className="ellipsis-double ellipsis">
        测试一下超出两行文字出现省略号的功能，测试一下超出两行文字出现省略号的功能。
      </div>
      <div className="ellipsis-triple ellipsis">
        测试一下超出多行文字出现省略号的功能，测试一下超出多行文字出现省略号的功能，测试一下超出多行文字出现省略号的功能。
      </div>
    </div>
  );
};
```

## CSS 实现按钮的不同背景

```tsx
import React from 'react';
import './_styles/symbol.css';
export default () => {
  return (
    <div className="symbol-legend">
      <span>未装卸</span>
      <span className="loading">装卸中</span>
      <span className="complete">装卸完成</span>
      <span className="leave">离场</span>
      <span className="timeout">执行超时</span>
      <span className="late">迟到</span>
      <span className="selected">选中</span>
      <span className="recommend">推荐</span>
      <span className="other">其它</span>
    </div>
  );
};
```

## CSS 实现文字智能适配

```tsx
import React from 'react';
import './_styles/adaptive.css';
export default () => {
  return (
    <div className="mix-adaptive">
      <span>CSS实现文字智能适配背景</span>
    </div>
  );
};
```

## 拼音标注

```tsx
import React from 'react';
import './_styles/index.less';
export default () => {
  return (
    <div className="ft-max ft-bold align-center">
      <ruby>
        拼<rp>（</rp>
        <rt>pīn</rt>
        <rp>）</rp>
      </ruby>
      <ruby>
        音<rp>（</rp>
        <rt>yīn</rt>
        <rp>）</rp>
      </ruby>
      <ruby>
        标<rp>（</rp>
        <rt>biāo</rt>
        <rp>）</rp>
      </ruby>
      <ruby>
        注<rp>（</rp>
        <rt>zhù</rt>
        <rp>）</rp>
      </ruby>
    </div>
  );
};
```

## 下划线动态效果

```tsx
import React from 'react';
import './_styles/underline.css';
export default () => {
  return (
    <div className="underline">
      <span>鼠标hover文字出现下划线动态效果</span>
    </div>
  );
};
```

## 分隔符

```tsx
import React from 'react';
import './_styles/separator.css';
export default () => {
  return (
    <div className="separator">
      <span>首页</span>
      <span>商城</span>
      <span>购物车</span>
      <span>我的</span>
    </div>
  );
};
```

## 动态头像

```tsx
import React from 'react';
import './_styles/portrait.css';
export default () => {
  return (
    <div className="portrait">
      <img className="portrait-img" src="/imgs/profile.webp" />
    </div>
  );
};
```

## 文字交融动画效果

```tsx
import React from 'react';
import './_styles/blend.css';
export default () => {
  return (
    <div className="mix-blend">
      <div className="text">文字交融动画效果</div>
    </div>
  );
};
```

## 卡片折叠

```tsx
import React from 'react';
import './_styles/fold.css';
export default () => {
  return <div className="fold-card"></div>;
};
```

## 可拉伸盒子

```tsx
import React from 'react';
import './_styles/stretch.css';
export default () => {
  return (
    <div className="stretch-container">
      <div className="stretch-card horizontal">水平拉伸</div>
      <div className="stretch-card vertical">竖向拉伸</div>
      <div className="stretch-card both">同时拉伸</div>
    </div>
  );
};
```

## 动态时钟

```tsx
import React, { useRef, useEffect } from 'react';
import './_styles/clock.css';
export default () => {
  const canvasDom = useRef();
  let c = null;
  const init = () => {
    c = canvasDom.current?.getContext('2d');
    // 设置线条的粗细与颜色
    c.lineWidth = 17;
    c.strokeStyle = '#0ff';
    c.shadowBlur = 15; // 模糊度
    c.shadowColor = '#0ff'; // 阴影颜色
    fn();
  };
  const fn = () => {
    if (!c) return;
    // 在canvas上画过的图形不会清除  需要清除
    c.clearRect(0, 0, 350, 350);
    //获取时间
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const today = `${year}-${month}-${day}`;
    const time = date.toLocaleTimeString();
    const hrs = date.getHours(); //小时
    const min = date.getMinutes(); //分钟
    const sec = date.getSeconds(); //秒
    //获取毫秒
    const hm = date.getMilliseconds();
    const mm = sec + hm / 1000;
    const mini = min + mm / 60;
    //console.log(min)

    //背景部分 渐变色背景
    // const rg = c.createRadialGradient(250,250,5,250,250,300);
    // rg.addColorStop(0,"#03303a");
    // rg.addColorStop(1,"black");
    // c.fillStyle = rg;
    // c.rect(0,0,500,500);
    // c.fill();

    const begin = (270 * Math.PI) / 180;
    //时针
    c.beginPath();
    //24小时 1小时=30度
    c.arc(180, 180, 150, begin, ((30 * hrs - 90) * Math.PI) / 180);
    c.stroke();

    //分针  1分钟=6度
    c.beginPath();
    c.arc(180, 180, 125, begin, ((6 * mini - 90) * Math.PI) / 180);
    c.stroke();

    //秒针
    c.beginPath();
    c.arc(180, 180, 100, begin, ((6 * mm - 90) * Math.PI) / 180);
    c.stroke();

    //文字部分
    c.beginPath();
    c.font = '25px 微软雅黑';
    c.fillStyle = '#0ff';
    c.fillText(today, 105, 180);

    c.beginPath();
    c.font = '25px 微软雅黑';
    c.fillStyle = '#0ff';
    c.fillText(`${time}:${hm}`, 100, 200);

    requestAnimationFrame(fn);
  };

  useEffect(() => {
    if (canvasDom.current) init();
  });
  return (
    <div className="clock-container">
      <canvas ref={canvasDom} width="350" height="350"></canvas>
    </div>
  );
};
```

## 按钮镜面效果

```tsx
import React, { useState, useRef } from 'react';
import './_styles/mirror.css';
export default ({ children = '开启镜面' }: any) => {
  const reflectionRef = useRef(null);
  const [buttonPressed, setButtonPressed] = useState(false);

  const operateMirror = () => {
    if (!reflectionRef.current) return;
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        const video: any = reflectionRef.current;
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
        };
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={`button-wrap ${buttonPressed ? 'pressed' : null}`}>
      <div
        className={`button ${buttonPressed ? 'pressed' : null}`}
        onPointerDown={() => setButtonPressed(true)}
        onPointerUp={() => setButtonPressed(false)}
        onClick={operateMirror}
      >
        <video className="button-reflection" ref={reflectionRef} />
      </div>
      <div className="text">{children}</div>
    </div>
  );
};
```
