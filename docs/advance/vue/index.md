---
title: Vue
order: 4
nav:
  title: 进阶
  order: 2
---

## 触底加载指令

### 全局注册

```js
// main.js
import './directives'; // 自定义指令

// src/directives.js
import Vue from 'vue';

Vue.directive('loadmore', {
  bind(el, binding) {
    // 获取element-ui定义好的scroll盒子(此处的scroll盒子根据具体情况进行修改)
    const SELECTWRAP_DOM = el.querySelector(
      '.el-select-dropdown .el-select-dropdown__wrap',
    );
    SELECTWRAP_DOM.addEventListener('scroll', function () {
      const CONDITION =
        this.scrollHeight - this.scrollTop - 5 <= this.clientHeight; // 可能会触发多次，使用时可以加上debounce防抖函数
      if (CONDITION) {
        binding.value();
      }
    });
  },
});
```

### 局部注册

```js
export default {
  directives: {
    'virtual-scroll': {
      bind(el, binding) {
        // 获取element-ui定义好的scroll盒子
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

### 具体使用

```html
<el-table
  :data="tableData"
  border
  style="width: 100%"
  height="300"
  v-virtual-scroll="loadMoreData"
>
  <el-table-column prop="date" label="日期" width="180"> </el-table-column>
  <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
  <el-table-column prop="address" label="地址"> </el-table-column>
</el-table>
```

## 移动端左滑事件

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

// 开启调试模式
const enterDebugMode = () => {
  if (state.loginCount == 0) {
    state.startTime = new Date();
    state.lastTime = state.startTime;
  } else if (state.loginCount >= 1) {
    let nextTime = new Date();
    if (nextTime - state.startTime >= 3000) {
      // 超过3秒重置
      state.startTime = nextTime;
      state.lastTime = nextTime;
      state.loginCount = 0;
    } else {
      state.lastTime = nextTime;
    }
    if (state.loginCount === 6) {
      // 大于三次重置
      if (localStorage.getItem('debugger') == 'open') {
        localStorage.setItem('debugger', 'close');
        Toast('开发者模式已关闭');
      } else {
        localStorage.setItem('debugger', 'open');
        Toast('开发者模式已开启');
      }
      state.startTime = nextTime;
      state.lastTime = nextTime;
      state.loginCount = 0;
    }
  }
  state.loginCount++;
};

// 左滑事件
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

## 行内样式 px 转 vw

- 安装依赖

  ```bash
  npm i style-vw-loader --save
  ```

- vue.config.js 中配置

  ```js
  // 转rem也能用此方法，转换比例一致
  // 报错时可尝试删除node_modules重新安装依赖
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('style-vw-loader')
      .loader('style-vw-loader')
      .options({
        viewportWidth: 1920, // 此处为屏幕分辨率，根据实际情况修改
      });
  };
  ```

## vue2 数据响应式原理实现

```js
/**
 * 通过observe观测函数，监测data对象中每条数据
 * @param {Object} obj
 * */
function observe(obj) {
  for (const key in obj) {
    let internalValue = obj[key];
    const funcs = []; // 用来记录数据依赖的函数
    Object.defineProperty(obj, key, {
      get: function () {
        // 记录依赖的函数
        if (window.__fn__ && !funcs.includes(window.__fn__)) {
          funcs.push(window.__fn__);
        }
        return internalValue;
      },
      set: function (val) {
        internalValue = val;
        // 执行数据依赖的所有函数
        for (let i = 0; i < funcs.length; i++) {
          funcs[i]();
        }
      },
    });
  }
}

/**
 * 将所有的函数通过此方法执行，记录执行的方法
 * @param {Function} fn
 * */
function autorun(fn) {
  window.__fn__ = fn;
  fn();
  window.__fn__ = null;
}
```

## vue3 数据响应式原理实现

```js
/**
 * 通过reactive，监测data对象中每条数据
 * @param {Object} info
 * */
function reactive(info) {
  const funcs = [];
  const proxy = new Proxy(info, {
    get: function (target, prop) {
      // 记录依赖的函数
      if (window.__fn__ && !funcs.includes(window.__fn__)) {
        funcs.push(window.__fn__);
      }
      return target[prop];
    },
    set: function (target, prop, value) {
      target[prop] = value;
      // 执行数据依赖的函数
      for (let i = 0; i < funcs.length; i++) {
        funcs[i]();
      }
    },
  });
  return proxy;
}

/**
 * 将所有的函数通过此方法执行，记录执行的方法
 * @param {Function} fn
 * */
function autorun(fn) {
  window.__fn__ = fn;
  fn();
  window.__fn__ = null;
}
```

## 封装命令式组件

注意事项：

1.需引入 createApp 将组件挂载到 body 中，在确认按钮或取消按钮执行后调用组件的移除。

2.取消事件可以不必传，默认点击关闭弹窗。当然这只是以消息组件作为示例，其他的组件封装也要考虑全面，使用起来方便即可。

1.创建组件

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
        <button class="w-1/2 mr-1" @click="emit('cancel')">取消</button>
        <button class="w-1/2 bg-[#2979ff] text-white" @click="emit('confirm')">
          确认
        </button>
      </view>
    </view>
  </view>
</template>
```

2.挂载组件

```ts
import MessageBox from './index.vue'; // 引入组件
import { createApp } from 'vue';

interface IConfig {
  title: string;
  message: string;
  onConfirm?: Function;
  onCancel?: Function;
}

// 抛出使用方法
export default function showMsg(config: IConfig) {
  const app = createApp(MessageBox, {
    config, // 组件参数配置
    onConfirm() {
      // 确认按钮事件
      config.onConfirm &&
        config.onConfirm(() => {
          app.unmount();
          div.remove();
        });
    },
    onCancel() {
      // 取消按钮事件
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

3.如何使用

```ts
import showMsg from '@/components/MessageBox';

const handleOpenMsg2 = () => {
  showMsg({
    title: '命令式组件',
    message: '测试内容',
    onConfirm: (close: any) => {
      close();
    },
    onCancel: (close: any) => {
      close();
    },
  });
};
```

## 设置打印纸张方向

```ts
// 打印纸张方向设置
const printStyleSetting = (type: number) => {
  const _pritnStyle = document.querySelector('#print-style');
  if (_pritnStyle) {
    window.document.head.removeChild(_pritnStyle);
  }
  const style = document.createElement('style');
  style.id = 'print-style';
  //portrait 纵向 landscape 横向
  style.innerHTML = `@media print { @page {size:${
    Number(type) === 1 ? 'portrait' : 'landscape'
  }; }}`;
  window.document.head.appendChild(style);
};
```
