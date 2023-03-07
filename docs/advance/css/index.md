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
import './index.less';
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
