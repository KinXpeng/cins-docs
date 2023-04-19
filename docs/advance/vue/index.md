---
title: Vue
order: 3
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
