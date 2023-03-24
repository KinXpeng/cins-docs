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
