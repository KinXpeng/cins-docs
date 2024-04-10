---
title: Common
order: 1
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

## Implementation of data responsive principle in Vue2

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

## Implementation of data responsive principle in Vue3

```js
/**
 * Monitor each data in the data object through reactive
 * @param {Object} info
 * */
function reactive(info) {
  const funcs = [];
  const proxy = new Proxy(info, {
    get: function (target, prop) {
      // Record dependent functions
      if (window.__fn__ && !funcs.includes(window.__fn__)) {
        funcs.push(window.__fn__);
      }
      return target[prop];
    },
    set: function (target, prop, value) {
      target[prop] = value;
      // Execute data dependent functions
      for (let i = 0; i < funcs.length; i++) {
        funcs[i]();
      }
    },
  });
  return proxy;
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

## Encapsulate imperative components

Notes:

1.You need to introduce createApp to mount the component to the body, and call the removal of the component after the Confirm button or Cancel button is executed.

2.The cancellation event does not need to be transmitted, and the default click is to close the pop-up window. Of course, this is just using message components as an example, and other component packaging should also be considered comprehensively, making it easy to use.

1.Create Component

```html
<script setup lang="ts">
  import type { PropType } from 'vue';

  const emit = defineEmits(['cancel', 'confirm']);
  interface IConfig {
    title: string;
    message: string;
    onConfirm?: Function;
    onCancel?: Function;
  }
  defineProps({
    config: {
      type: Object as PropType<IConfig>,
      default: () => {
        return {
          title: '',
          message: '',
        };
      },
    },
  });
</script>

<template>
  <view
    class="flex items-center justify-center absolute top-0 left-0 w-full h-full z-99999 bg-[#000000cc]"
  >
    <view class="w-4/5 h-[400rpx] bg-white rounded-lg p-3">
      <view class="h-[260rpx] text-center">
        <view class="font-semibold">{{ config.title }}</view>
        <view>{{ config.message }}</view>
      </view>
      <view class="flex justify-between h-[100rpx]">
        <button class="w-1/2 mr-1" @click="emit('cancel')">Cancel</button>
        <button class="w-1/2 bg-[#2979ff] text-white" @click="emit('confirm')">
          Confirm
        </button>
      </view>
    </view>
  </view>
</template>
```

2.Mount components

```ts
import MessageBox from './index.vue'; // Import components
import { createApp } from 'vue';

interface IConfig {
  title: string;
  message: string;
  onConfirm?: Function;
  onCancel?: Function;
}

// Throw usage method
export default function showMsg(config: IConfig) {
  const app = createApp(MessageBox, {
    config, // Component parameter configuration
    onConfirm() {
      // Confirm button event
      config.onConfirm &&
        config.onConfirm(() => {
          app.unmount();
          div.remove();
        });
    },
    onCancel() {
      // Cancel button event
      if (config.onCancel) {
        config.onCancel(() => {
          app.unmount();
          div.remove();
        });
      } else {
        app.unmount();
        div.remove();
      }
    },
  });
  const div = document.createElement('div');
  document.body.appendChild(div);
  app.mount(div);
}
```

3.How to use it

```ts
import showMsg from '@/components/MessageBox';

const handleOpenMsg2 = () => {
  showMsg({
    title: 'Command based components',
    message: 'Test content',
    onConfirm: (close: any) => {
      close();
    },
    onCancel: (close: any) => {
      close();
    },
  });
};
```

## Set printing paper direction

```ts
// Print Paper Direction Setting
const printStyleSetting = (type: number) => {
  const _pritnStyle = document.querySelector('#print-style');
  if (_pritnStyle) {
    window.document.head.removeChild(_pritnStyle);
  }
  const style = document.createElement('style');
  style.id = 'print-style';
  //portrait-direction  landscape-transverse
  style.innerHTML = `@media print { @page {size:${
    Number(type) === 1 ? 'portrait' : 'landscape'
  }; }}`;
  window.document.head.appendChild(style);
};
```

## Obtain device battery information

```js
navigator.getBattery().then(function (battery) {
  // Obtain the remaining percentage of device power
  var level = battery.level; // The maximum value is 1, which corresponds to 100% electricity
  console.log('Level: ' + level * 100 + '%');

  // Obtain the charging status of the device
  var charging = battery.charging;
  console.log('Charging state: ' + charging);

  // Get how long it takes for the device to be fully charged
  var chargingTime = battery.chargingTime;
  console.log('The time it takes to fully charge: ' + chargingTime);

  // Obtain the time required for complete discharge of the device
  var dischargingTime = battery.dischargingTime;
  console.log('The time required for complete discharge: ' + dischargingTime);
});
```

## Text recognition

```ts
// Recognizing text in images (optional in both Chinese and English)
import Tesseract from 'tesseract.js';

/**
 * Identify images
 * @param {string} url Image address
 * @param {string} language Recognized language chi_sim Chinese/eng English
 * */
const resolveImg = (url: string, language: string) => {
  return Tesseract.recognize(url, language)
    .then(({ data: { text } }) => {
      return {
        url: url,
        text: text,
      };
    })
    .catch(() => {
      return {
        url: url,
        text: '',
      };
    });
};

/**
 * Image processing
 * @param {string[]} urlList Image Address List
 * @param {string} language Recognized language chi_sim Chinese/eng English
 * */
export interface IRecognize {
  url: string;
  text: string;
}
export const recognizeText = async (
  urlList: string[],
  language = 'chi_sim',
) => {
  const result: IRecognize[] = await Promise.all(
    urlList.map((item) => resolveImg(item, language)),
  );
  return result;
};
```
