---
title: Vue
order: 4
nav:
  title: Advance
  order: 2
---

## Bottom loading instruction

### Global registration

```js
// main.js
import './directives'; // Custom instruction

// src/directives.js
import Vue from 'vue';

Vue.directive('loadmore', {
  bind(el, binding) {
    // Get the element-ui defined scroll box (the scroll box here can be modified as required)
    const SELECTWRAP_DOM = el.querySelector(
      '.el-select-dropdown .el-select-dropdown__wrap',
    );
    SELECTWRAP_DOM.addEventListener('scroll', function () {
      const CONDITION =
        this.scrollHeight - this.scrollTop - 5 <= this.clientHeight; // This may be triggered more than once. You can add the debounce function when using it
      if (CONDITION) {
        binding.value();
      }
    });
  },
});
```

### Partial registration

```js
export default {
  directives: {
    'virtual-scroll': {
      bind(el, binding) {
        // Gets the element-ui defined scroll box
        const SELECTWRAP_DOM = el.querySelector('.el-table .is-scrolling-none');
        SELECTWRAP_DOM.addEventListener('scroll', function () {
          const CONDITION =
            this.scrollHeight - this.scrollTop - 5 <= this.clientHeight;
          if (CONDITION) {
            binding.value();
          }
        });
      },
    },
  },
};
```

### Specific use

```html
<el-table
  :data="tableData"
  border
  style="width: 100%"
  height="300"
  v-virtual-scroll="loadMoreData"
>
  <el-table-column prop="date" label="Date" width="180"> </el-table-column>
  <el-table-column prop="name" label="Name" width="180"> </el-table-column>
  <el-table-column prop="address" label="Address"> </el-table-column>
</el-table>
```

## Mobile left slide event

```js
import { reactive } from 'vue';
import { Toast } from 'vant';
import { useEventListener } from '@vant/use';

const state = reactive({
  startClientX: 0,
  endClientX: 0,
  loginCount: 0,
  startTime: 0,
  lastTime: 0,
});

// Enable debug mode
const enterDebugMode = () => {
  if (state.loginCount == 0) {
    state.startTime = new Date();
    state.lastTime = state.startTime;
  } else if (state.loginCount >= 1) {
    let nextTime = new Date();
    if (nextTime - state.startTime >= 3000) {
      // Reset after 3 seconds
      state.startTime = nextTime;
      state.lastTime = nextTime;
      state.loginCount = 0;
    } else {
      state.lastTime = nextTime;
    }
    if (state.loginCount === 6) {
      // More than three resets
      if (localStorage.getItem('debugger') == 'open') {
        localStorage.setItem('debugger', 'close');
        Toast('Developer mode is turned off');
      } else {
        localStorage.setItem('debugger', 'open');
        Toast('Developer mode has been enabled');
      }
      state.startTime = nextTime;
      state.lastTime = nextTime;
      state.loginCount = 0;
    }
  }
  state.loginCount++;
};

// Left slip event
useEventListener('touchstart', (e) => {
  state.startClientX = e.changedTouches[0].clientX;
});
useEventListener('touchend', (e) => {
  state.endClientX = e.changedTouches[0].clientX;
  if (state.startClientX - state.endClientX > 150) {
    enterDebugMode();
  }
});
```

## Inline style px to vw

- Installation dependency

  ```bash
  npm i style-vw-loader --save
  ```

- The configuration is displayed in vue.config.js
  ```js
  // This method can also be used for rem, with the same conversion ratio
  // If an error occurs, try removing node_modules to reinstall the dependency
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('style-vw-loader')
      .loader('style-vw-loader')
      .options({
        viewportWidth: 1920, // Here is the screen resolution. Change it based on site requirements
      });
  };
  ```

## Implementation of Vue2 Data Responsive Principle

```js
/**
 * Monitor each data in the data object through the observe function
 * @param {Object} obj
 * */
function observe(obj) {
  for (const key in obj) {
    let internalValue = obj[key];
    const funcs = []; // Functions used to record data dependencies
    Object.defineProperty(obj, key, {
      get: function () {
        // Record dependent functions
        if (window.__fn__ && !funcs.includes(window.__fn__)) {
          funcs.push(window.__fn__);
        }
        return internalValue;
      },
      set: function (val) {
        internalValue = val;
        // Execute all functions dependent on data
        for (let i = 0; i < funcs.length; i++) {
          funcs[i]();
        }
      },
    });
  }
}

/**
 * Execute all functions through this method and record the execution method
 * @param {Function} fn
 * */
function autorun(fn) {
  window.__fn__ = fn;
  fn();
  window.__fn__ = null;
}
```
