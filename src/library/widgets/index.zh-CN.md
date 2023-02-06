---
nav:
  title: 小组件
  path: /library
---

## 移动端提示组件

- 组件样式参考 vant 的`Toast.success('提示')`
- 组件 [js 获取](https://github.com/KinXpeng/cins-docs/tree/main/utils)中的 `prompt.js`

#### 引入

```js
import { Prompt } from '@/utils/prompt.js';
```

#### 成功提示

```js
Prompt({
  type: 'success',
  message: '操作成功',
});
```

#### 失败提示

```js
Prompt({
  type: 'error',
  message: '操作失败，请点击<a>此处查看详情</a>',
  callback: () => {
    // 点击a标签后的回调函数
  },
});
```
