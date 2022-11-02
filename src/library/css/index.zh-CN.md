---
nav:
  title: 库
  path: /library
---

## 输入框抖动

```tsx
import React, { useState } from 'react';
import './styles/index.css';

export default () => {
  const [shake, setShake] = useState(false);
  const trigger = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 820);
  };
  return (
    <div className="apply-shake-input">
      <input className={shake ? 'apply-shake' : ''} type="text" placeholder="请输入" />
      <button onClick={trigger}>校验</button>
    </div>
  );
};
```
