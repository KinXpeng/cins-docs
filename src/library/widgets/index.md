---
nav:
  title: Widgets
  path: /library
---

## Mobile prompt component

- Component style reference: `Toast.success('tips')`
- Component [get js](https://github.com/KinXpeng/cins-docs/tree/main/utils) in `prompt.js`

#### Import

```js
import { Prompt } from '@/utils/prompt.js';
```

#### Success message

```js
Prompt({
  type: 'success',
  message: 'Successful operation',
});
```

#### Failure prompt

```js
Prompt({
  type: 'error',
  message: 'Operation failed, please click<a>click here for details</a>',
  callback: () => {
    // Click the callback function after the a label.
  },
});
```
