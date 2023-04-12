---
title: Vue
order: 3
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
