---
title: CSS
order: 2
nav:
  title: Advance
  order: 2
---

## User experience evaluation

```tsx
import React, { useRef, useEffect } from 'react';
import './_styles/evaluate.css';
export default () => {
  const evaluateDom = useRef();
  const inputDom = useRef();
  const calc = () => {
    evaluateDom.current.style.setProperty('--progress', inputDom.current.value);
  };
  useEffect(() => {
    calc();
  }, []);
  return (
    <div className="evaluate-container" ref={evaluateDom}>
      <p>Your impression of us is</p>
      <div className="face">
        <div className="eye left animate"></div>
        <div className="eye right animate"></div>
        <div className="mouse animate"></div>
      </div>
      <input
        ref={inputDom}
        type="range"
        min="0"
        max="1"
        className="range"
        step="0.01"
        onInput={calc}
      />
    </div>
  );
};
```

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
    c.clearRect(0, 0, 350, 350);
    // Acquisition time
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const today = `${year}-${month}-${day}`;
    const time = date.toLocaleTimeString();

    const hrs = date.getHours(); // Hours
    const min = date.getMinutes(); // Minutes
    const sec = date.getSeconds(); // Seconds
    // Acquire millisecond
    const hm = date.getMilliseconds();
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
    c.arc(180, 180, 150, begin, ((30 * hrs - 90) * Math.PI) / 180);
    c.stroke();

    // One minute hand =6 degrees
    c.beginPath();
    c.arc(180, 180, 125, begin, ((6 * mini - 90) * Math.PI) / 180);
    c.stroke();

    // Second hand
    c.beginPath();
    c.arc(180, 180, 100, begin, ((6 * mm - 90) * Math.PI) / 180);
    c.stroke();

    // Literal part
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

## Button mirror effect

```tsx
import React, { useState, useRef } from 'react';
import './_styles/mirror.css';
export default ({ children = 'Open mirror' }: any) => {
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

## Grid layout animation

```tsx
import React from 'react';
import './_styles/grid.css';
export default () => {
  return (
    <div className="grid-layout">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </div>
  );
};
```

## Carousel Button

```tsx
import React from 'react';
import './_styles/carousel.css';
export default () => {
  return (
    <div className="carousel-content">
      <button className="carousel-btn">Carousel Button</button>
    </div>
  );
};
```

## Add to shopping cart

```tsx
import React, { useRef, useEffect } from 'react';
import './_styles/moveball.css';
import { MoveBall } from './_js/moveball.js';
export default () => {
  const moveballContent = useRef();
  const plus1 = useRef();
  const plus2 = useRef();
  const cart = useRef();
  const init = () => {
    plus1.current.onclick = function (e) {
      const moveball = new MoveBall({
        startDom: plus1.current,
        endDom: cart.current,
        width: 60,
        height: 60,
      });
      moveball.freeThrow();
    };
    plus2.current.onclick = function (e) {
      const moveball = new MoveBall({
        startDom: plus2.current,
        endDom: cart.current,
        customStyle: {
          backgroundColor: 'blue',
        },
      });
      moveball.freeThrow();
    };
  };
  useEffect(() => {
    if (moveballContent.current) {
      init();
    }
  });
  return (
    <div ref={moveballContent} className="moveball-content">
      <div className="goods-card">
        <div className="goods-img">图片</div>
        <div className="goods-info">
          <div>
            <p className="title">Goods Name</p>
            <p className="desc">Descriptive information</p>
          </div>
          <div className="bottom">
            <span className="price">￥2.00</span>
            <span ref={plus1} className="plus">
              +
            </span>
          </div>
        </div>
      </div>
      <div className="goods-card">
        <div className="goods-img">Image</div>
        <div className="goods-info">
          <div>
            <p className="title">Goods Name</p>
            <p className="desc">Descriptive information</p>
          </div>
          <div className="bottom">
            <span className="price">￥2.00</span>
            <span ref={plus2} className="plus">
              +
            </span>
          </div>
        </div>
      </div>
      <div ref={cart} className="cart">
        Cart
      </div>
    </div>
  );
};
```

## Honeycomb layout

```tsx
import React, { useRef, useEffect } from 'react';
import './_styles/honeycomb.css';
export default () => {
  // Random color
  const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  // Get the honeycomb parent node
  const honeycombContainer = useRef();

  useEffect(() => {
    const parentElement = honeycombContainer.current;
    if (parentElement) {
      const _eleList = Array.from(parentElement.children).map(
        (childElement) => {
          if (childElement.children && childElement.children.length) {
            return {
              element: childElement,
              children: Array.from(childElement.children),
            };
          }
        },
      );

      // Register events for each node
      _eleList.forEach((item, index) => {
        item.children?.forEach((ele, ind) => {
          // Random background color
          ele.style.backgroundColor = randomColor();

          // mouseenter
          ele.addEventListener('mouseenter', () => {
            ele.style.transform = 'scale(1.1)';
            const _index = index % 2 === 0 ? ind : ind - 1;

            // left
            if (item.children[ind - 1]) {
              item.children[ind - 1].style.transform = 'scale(0.8)';
            }

            // right
            if (item.children[ind + 1]) {
              item.children[ind + 1].style.transform = 'scale(0.8)';
            }

            // top
            if (index - 1 >= 0) {
              const _prevItems = _eleList[index - 1].children;
              if (_prevItems[_index]) {
                _prevItems[_index].style.transform = 'scale(0.8)';
              }
              if (_prevItems[_index + 1]) {
                _prevItems[_index + 1].style.transform = 'scale(0.8)';
              }
            }

            // bottom
            if (index + 1 < _eleList.length) {
              const _nextItems = _eleList[index + 1].children;
              if (_nextItems[_index]) {
                _nextItems[_index].style.transform = 'scale(0.8)';
              }
              if (_nextItems[_index + 1]) {
                _nextItems[_index + 1].style.transform = 'scale(0.8)';
              }
            }
          });

          // mouseleave
          ele.addEventListener('mouseleave', () => {
            ele.style.transform = 'scale(1)';
            const _index = index % 2 === 0 ? ind : ind - 1;

            // left
            if (item.children[ind - 1]) {
              item.children[ind - 1].style.transform = 'scale(1)';
            }

            // right
            if (item.children[ind + 1]) {
              item.children[ind + 1].style.transform = 'scale(1)';
            }

            // top
            if (index - 1 >= 0) {
              const _prevItems = _eleList[index - 1].children;
              if (_prevItems[_index]) {
                _prevItems[_index].style.transform = 'scale(1)';
              }
              if (_prevItems[_index + 1]) {
                _prevItems[_index + 1].style.transform = 'scale(1)';
              }
            }

            // bottom
            if (index + 1 < _eleList.length) {
              const _nextItems = _eleList[index + 1].children;
              if (_nextItems[_index]) {
                _nextItems[_index].style.transform = 'scale(1)';
              }
              if (_nextItems[_index + 1]) {
                _nextItems[_index + 1].style.transform = 'scale(1)';
              }
            }
          });
        });
      });
    }
  }, []);
  return (
    <div ref={honeycombContainer} className="honeycomb-content">
      <div className="line">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <div className="line">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <div className="line">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <div className="line">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <div className="line">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
  );
};
```
