---
title: 设计模式
order: 5
nav:
  title: 进阶
  order: 2
---

## 发布订阅

#### 实现 `event.js`

```js
export default {
  // 订阅列表
  _clientList: [],

  // 添加订阅
  $on: function (key, fn) {
    if (!this._clientList[key]) {
      this._clientList[key] = [];
    }
    this._clientList[key].push(fn);
  },

  // 触发订阅
  $emit: function (key, ...args) {
    this._clientList[key].forEach((fn) => fn(...args));
  },

  // 取消订阅
  $off: function (key, fn) {
    const fns = this._clientList[key];
    if (!fns) {
      return false;
    }

    // 没有传入fn，取消所有key的订阅
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      // 取消指定的订阅函数
      for (let i = 0; i < fns.length; i++) {
        if (fns[i] === fn) {
          fns.splice(i, 1);
        }
      }
    }
  },

  // 单次订阅
  $once: function (key, fn) {
    const one = (...args) => {
      fn(...args);
      this.$off(key, one);
    };
    this.$on(key, one);
  },
};
```

#### 使用

```js
import event from './event';

event.$on('test', (msg) => {
  console.log(msg);
});

event.$emit('test', '测试触发');
```
