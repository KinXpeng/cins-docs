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

## Stroke animation

```tsx
import React from 'react';
import './_styles/strokeanimation.css';
export default () => {
  return (
    <div className="strokeanimation-content">
      <svg width="100%" height="100%">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#027a96', stopOpacity: '1' }}
            />
            <stop
              offset="10%"
              style={{ stopColor: '#8ecc9a', stopOpacity: '1' }}
            />
            <stop
              offset="20%"
              style={{ stopColor: '#dbda09', stopOpacity: '1' }}
            />
            <stop
              offset="30%"
              style={{ stopColor: '#fbd12e', stopOpacity: '1' }}
            />
            <stop
              offset="40%"
              style={{ stopColor: '#f5ac3a', stopOpacity: '1' }}
            />
            <stop
              offset="50%"
              style={{ stopColor: '#f56c59', stopOpacity: '1' }}
            />
            <stop
              offset="60%"
              style={{ stopColor: '#f35144', stopOpacity: '1' }}
            />
            <stop
              offset="70%"
              style={{ stopColor: '#dc99be', stopOpacity: '1' }}
            />
            <stop
              offset="80%"
              style={{ stopColor: '#6060a2', stopOpacity: '1' }}
            />
            <stop
              offset="90%"
              style={{ stopColor: '#6c9ce3', stopOpacity: '1' }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#6868c2', stopOpacity: '1' }}
            />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#5fa2d8', stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: '#8093e5', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#6261b9', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#5fa2d8', stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: '#4da3d3', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#72b9d6', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          className="path path-1"
          d="M208,338c38-16.67,73.74-45.72,97.33-66,21.33-18.33,32.67-35.67,37.33-52.67C347.12,203.12,344,192,332,192c-11,0-21,10.33-24.94,27.68-4.52,19.89-22.06,107.82-29.39,149,15.67-72.33,36.33-81.33,53.67-81.33,22.33,0,24.67,18.67,19.42,39-5.43,21.07-7.42,44.32,17.91,44.32,18,0,35.53-8.17,52.67-20,14-9.67,23-24,23-40,0-13.42-8-23.33-20.67-23.33s-24.33,12-24.33,33.33c0,27,16.33,48,44,48,25.67,0,47.67-19.67,62-44.67,13.61-23.74,30.67-64.67,33.33-92.67s-5.33-36-18.67-36-24.67,17.33-28.67,43.33S486,302,491.33,330s28,37.67,46,37.67,38.17-15.67,52-37c16.54-25.51,35.87-67.45,38.67-102,2-24.67-8.67-33.33-20-33.33-14.67,0-23.33,13.33-28,38-4.5,23.81-8,64-2,94,4.64,23.21,25.33,40.33,44.67,40.33s32.67-19,36.67-42.33"
          transform="translate(-199 -183)"
        />
        <path
          className="path path-2"
          d="M697.33,287.33C672,287.33,661.33,305,659,327c-2.81,26.54,10.33,41.67,29.67,41.67,22,0,34.54-20.78,36.67-40.67,2-18.67-7.39-39.13-28-40.67"
          transform="translate(-199 -183)"
        />
        <path
          className="path path-3"
          d="M714.8,295.12c12.11,12.26,43.53,9.55,56.53-5.79"
          transform="translate(-199 -183)"
        />
      </svg>
    </div>
  );
};
```
