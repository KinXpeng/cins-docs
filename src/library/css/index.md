---
nav:
  title: Library
  path: /library
---

## Input box jitter

```tsx
import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import 'antd/dist/antd.css';
import './styles/shake.css';

export default () => {
  const [shake, setShake] = useState(false);
  const [value, setValue] = useState('');
  // Verify mobile phone number
  const isMobilePhone = (str: string): boolean => {
    const pattern =
      /^((13[0-9])|(14[0,1,4-9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))[0-9]{8}$/;
    return pattern.test(str);
  };
  const trigger = () => {
    if (isMobilePhone(value)) {
      message.success('The format of mobile phone number is correct!');
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
        placeholder="Please enter your mobile number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="primary" onClick={trigger}>
        Verify
      </Button>
    </div>
  );
};
```

## Stroke of text

```tsx
import React from 'react';
import './styles/stroke.css';
export default () => {
  return <div className="stroke-text">Hello,here is CINS！</div>;
};
```

## The site turns gray

```tsx
import React from 'react';
import './styles/gray.css';
export default () => {
  return (
    <div className="content">
      <div className="gray-text">Default state, colorful!</div>
      <div className="gray-text silence">Default state, colorful!</div>
    </div>
  );
};
```

## Pseudo class to achieve the prompt icon effect

```tsx
import React from 'react';
import './styles/pseudo.css';
export default () => {
  return <div className="pseudo-text">It's a reminder with an icon on it!</div>;
};
```

## CSS Throttle

```tsx
import React from 'react';
import { Button, message } from 'antd';
import './styles/throttle.css';
export default () => {
  const throttleTips = () => {
    message.success('The button has been clicked！');
  };
  return (
    <div className="throttle-button">
      <div className="button-wrap">
        <Button type="primary" onClick={throttleTips}>
          No throttling
        </Button>
        <span>（No break trigger）</span>
      </div>
      <div className="button-wrap">
        <Button type="primary" onClick={throttleTips} className="ant-throttle">
          Throttle
        </Button>
        <span>（2s trigger once）</span>
      </div>
    </div>
  );
};
```
