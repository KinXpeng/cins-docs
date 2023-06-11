---
title: Design pattern
order: 5
nav:
  title: Advance
  order: 2
---

## Publish-subscribe

#### `event.js`

```js
export default {
  // Subscription list
  _clientList: [],

  // Add a subscription
  $on: function (key, fn) {
    if (!this._clientList[key]) {
      this._clientList[key] = [];
    }
    this._clientList[key].push(fn);
  },

  // Trigger subscription
  $emit: function (key, ...args) {
    this._clientList[key].forEach((fn) => fn(...args));
  },

  // unsubscribe
  $off: function (key, fn) {
    const fns = this._clientList[key];
    if (!fns) {
      return false;
    }

    // Without passing fn, unsubscribe from all keys
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      // Cancels the specified subscription function
      for (let i = 0; i < fns.length; i++) {
        if (fns[i] === fn) {
          fns.splice(i, 1);
        }
      }
    }
  },

  // Single subscription
  $once: function (key, fn) {
    const one = (...args) => {
      fn(...args);
      this.$off(key, one);
    };
    this.$on(key, one);
  },
};
```

#### Use

```js
import event from './event';

event.$on('test', (msg) => {
  console.log(msg);
});

event.$emit('test', 'Test trigger');
```
