---
title: CSS
order: 1
nav:
  title: 进阶
  order: 2
---

## 输入框抖动

```tsx
import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import 'antd/dist/antd.css';
import './shake.css';

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
      message.success('手机号格式正确！');
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 820);
    }
  };
  return (
    <div className="apply-shake-input">
      <Input
        className={shake ? 'apply-shake' : ''}
        status={isMobilePhone(value) || !value ? '' : 'error'}
        placeholder="请输入手机号"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="primary" onClick={trigger}>
        校验
      </Button>
    </div>
  );
};
```

## 文字描边

```tsx
import React from 'react';
import './stroke.css';
export default () => {
  return <div className="stroke-text">你好，这里是CINS！</div>;
};
```

## 网站变成灰色效果

```tsx
import React from 'react';
import './gray.css';
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
import './pseudo.css';
export default () => {
  return <div className="pseudo-text">这是一条有图标的提示语！</div>;
};
```

## CSS 节流

```tsx
import React from 'react';
import { Button, message } from 'antd';
import './throttle.css';
export default () => {
  const throttleTips = () => {
    message.success('按钮已点击！');
  };
  return (
    <div className="throttle-button">
      <div className="button-wrap">
        <Button type="primary" onClick={throttleTips}>
          未节流
        </Button>
        <span>（不间断触发）</span>
      </div>
      <div className="button-wrap">
        <Button type="primary" onClick={throttleTips} className="ant-throttle">
          节流
        </Button>
        <span>（2s触发一次）</span>
      </div>
    </div>
  );
};
```

## 超出多行省略

```tsx
import React from 'react';
import './ellipsis.css';
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
