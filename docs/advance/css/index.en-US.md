---
title: CSS
order: 0
nav:
  title: Advance
  order: 2
---

## Input box jitter

```tsx
import React, { useState } from 'react';
import './_styles/index.less';
import './_styles/shake.css';

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
      console.log('The format of mobile phone number is correct!');
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
        placeholder="Please enter your mobile number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button className="cins-button" onClick={trigger}>
        Verify
      </button>
    </div>
  );
};
```

## Stroke of text

```tsx
import React from 'react';
import './_styles/stroke.css';
export default () => {
  return <div className="stroke-text">Hello,here is CINS！</div>;
};
```

## The site turns gray

```tsx
import React from 'react';
import './_styles/gray.css';
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
import './_styles/pseudo.css';
export default () => {
  return <div className="pseudo-text">It's a reminder with an icon on it!</div>;
};
```

## CSS Throttle

```tsx
import React from 'react';
import './_styles/index.less';
import './_styles/throttle.css';
export default () => {
  const throttleTips = () => {
    alert('The button has been clicked！');
  };
  return (
    <div className="throttle-button">
      <div className="button-wrap">
        <button className="cins-button" onClick={throttleTips}>
          No throttling
        </button>
        <span>（No break trigger）</span>
      </div>
      <div className="button-wrap">
        <button onClick={throttleTips} className="cins-button ant-throttle">
          Throttle
        </button>
        <span>（2s trigger once）</span>
      </div>
    </div>
  );
};
```

## Beyond multiline omission

```tsx
import React from 'react';
import './_styles/ellipsis.css';
export default () => {
  return (
    <div className="throttle-wrap">
      <div className="ellipsis-overflow">
        Test the ability to use ellipses beyond a line of text.
      </div>
      <div className="ellipsis-double ellipsis">
        Test the ellipsis function for more than two lines of text. Test the
        ellipsis function for more than two lines of text.
      </div>
      <div className="ellipsis-triple ellipsis">
        Test the ability to use ellipses beyond multiple lines, test the ability
        to use ellipses beyond multiple lines, test the ability to use ellipses
        beyond multiple lines.
      </div>
    </div>
  );
};
```

## Implement different backgrounds for buttons

```tsx
import React from 'react';
import './_styles/symbol.css';
export default () => {
  return (
    <div class="symbol-legend">
      <span>unloaded</span>
      <span class="loading">loading</span>
      <span class="complete">complete</span>
      <span class="leave">leave</span>
      <span class="timeout">timeout</span>
      <span class="late">late</span>
      <span class="selected">selected</span>
      <span class="recommend">recommend</span>
      <span class="other">other</span>
    </div>
  );
};
```
