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
