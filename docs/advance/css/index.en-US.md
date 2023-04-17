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
    <div className="symbol-legend">
      <span>unloaded</span>
      <span className="loading">loading</span>
      <span className="complete">complete</span>
      <span className="leave">leave</span>
      <span className="timeout">timeout</span>
      <span className="late">late</span>
      <span className="selected">selected</span>
      <span className="recommend">recommend</span>
      <span className="other">other</span>
    </div>
  );
};
```

## The css implements intelligent text adaptation

```tsx
import React from 'react';
import './_styles/adaptive.css';
export default () => {
  return (
    <div className="mix-adaptive">
      <span>The css implements intelligent text adaptation</span>
    </div>
  );
};
```

## Pinyin labeling

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

## Underline dynamic effect

```tsx
import React from 'react';
import './_styles/underline.css';
export default () => {
  return (
    <div className="underline">
      <span>Mouse hover text appears underline dynamic effect</span>
    </div>
  );
};
```

## Delimiter

```tsx
import React from 'react';
import './_styles/separator.css';
export default () => {
  return (
    <div className="separator">
      <span>Home</span>
      <span>Store</span>
      <span>Cart</span>
      <span>Me</span>
    </div>
  );
};
```

## Dynamic avatar

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

## Text blending animation effect

```tsx
import React from 'react';
import './_styles/blend.css';
export default () => {
  return (
    <div className="mix-blend">
      <div className="text">Text blending animation effect</div>
    </div>
  );
};
```

## Card folding

```tsx
import React from 'react';
import './_styles/fold.css';
export default () => {
  return <div className="fold-card"></div>;
};
```

## Stretchable box

```tsx
import React from 'react';
import './_styles/stretch.css';
export default () => {
  return (
    <div className="stretch-container">
      <div className="stretch-card horizontal">Horizontal stretching</div>
      <div className="stretch-card vertical">Vertical stretching</div>
      <div className="stretch-card both">Both stretching</div>
    </div>
  );
};
```

## Dynamic clock

```tsx
import React, { useRef, useEffect } from 'react';
import './_styles/clock.css';
export default () => {
  const canvasDom = useRef();
  let c = null;
  const init = () => {
    c = canvasDom.current?.getContext('2d');
    // Sets the thickness and color of the line
    c.lineWidth = 17;
    c.strokeStyle = '#0ff';
    c.shadowBlur = 15; // ambiguity
    c.shadowColor = '#0ff'; // Shadow color
    fn();
  };
  const fn = () => {
    if (!c) return;
    // Graphics drawn on the canvas will not be cleared and need to be cleared
    c.clearRect(0, 0, 500, 500);
    // Acquisition time
    const now = new Date();
    const today = now.toDateString();
    const time = now.toLocaleTimeString();
    const hrs = now.getHours(); // Hours
    const min = now.getMinutes(); // Minutes
    const sec = now.getSeconds(); // Seconds
    // Acquire millisecond
    const hm = now.getMilliseconds();
    const mm = sec + hm / 1000;
    const mini = min + mm / 60;
    //console.log(min)

    // Background partial gradient background
    // const rg = c.createRadialGradient(250, 250, 5, 250, 250, 300);
    // rg.addColorStop(0, '#03303a');
    // rg.addColorStop(1, 'black');
    // c.fillStyle = rg;
    // c.rect(0, 0, 500, 500);
    // c.fill();

    const begin = (270 * Math.PI) / 180;
    // Hour hand
    c.beginPath();
    //24小时 1小时=30度
    c.arc(250, 250, 200, begin, ((30 * hrs - 90) * Math.PI) / 180);
    c.stroke();

    // One minute hand =6 degrees
    c.beginPath();
    c.arc(250, 250, 170, begin, ((6 * mini - 90) * Math.PI) / 180);
    c.stroke();

    // Second hand
    c.beginPath();
    c.arc(250, 250, 140, begin, ((6 * mm - 90) * Math.PI) / 180);
    c.stroke();

    // Literal part
    c.beginPath();
    c.font = '25px 微软雅黑';
    c.fillStyle = '#0ff';
    c.fillText(today, 155, 250);

    c.beginPath();
    c.font = '25px 微软雅黑';
    c.fillStyle = '#0ff';
    c.fillText(`${time}:${hm}`, 155, 280);

    requestAnimationFrame(fn);
  };

  useEffect(() => {
    if (canvasDom.current) init();
  });
  return (
    <div className="clock-container">
      <canvas ref={canvasDom} width="500" height="500"></canvas>
    </div>
  );
};
```
