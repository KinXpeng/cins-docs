---
nav:
  title: 专栏
  path: /column
---

## 前端性能优化

- 提升首屏的加载速度，是前端性能优化中最重要的环节，这里笔者梳理出一些常规且有效的首屏优化建议。

- 目标： 通过对比优化前后的性能变化，来验证方案的有效性，了解并掌握其原理。

## 路由懒加载

SPA 项目，一个路由对应一个页面，如果不做处理，项目打包后，会把所有页面打包成一个文件，当用户打开首页时，**会一次性加载所有的资源**，造成首页加载很慢，降低用户体验。

将路由全部改成懒加载：

```js
const routes = [
  {
    path: '/',
    name: 'Home',
    // 路由级代码分解
    // 这将为该路由生成一个单独的块(home.[hash].js)
    // 它在访问路由时是懒加载的。
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test.vue'),
  },
];
```

重新打包后的 `home.js` 和 `app.js` 的文件大小会发生变化，通过路由懒加载，能将项目的首页资源大幅度压缩，减少首页白屏时间。

**路由懒加载的原理：**

懒加载前提的实现：ES6 的动态地加载模块——`import()`，调用 import() 之处，被作为分离的模块起点，意思是，被请求的模块和它引用的所有子模块，会分离到一个单独的 chunk 中。

——摘自[《webpack——模块方法》](https://webpack.docschina.org/api/module-methods/#import)的 `import()` 小节

要实现懒加载，就得先将进行懒加载的子模块分离出来，打包成一个单独的文件。

webpackChunkName 作用是 webpack 在打包的时候，对异步引入的库代码（lodash）进行代码分割时，设置代码块的名字。webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。

## 组件懒加载

除了路由的懒加载外，组件的懒加载在很多场景下也有重要的作用。

举个 🌰：

home 页面 和 about 页面，都引入了 dialogInfo 弹框组件，该弹框不是一进入页面就加载，而是需要用户手动触发后才展示出来。

home 页面示例：

```html
<template>
  <div class="homeView">
    <p>home 页面</p>
    <el-button @click="dialogVisible = !dialogVisible">打开弹框</el-button>
    <dialogInfo v-if="dialogVisible" />
  </div>
</template>
<script>
  import dialogInfo from '@/components/dialogInfo';
  export default {
    name: 'homeView',
    components: {
      dialogInfo,
    },
  };
</script>
```

项目打包后，发现 home.js 和 about.js 均包括了该弹框组件的代码（在 dist 文件中搜索 dialogInfo 弹框组件）。

当用户打开 home 页时，会一次性加载该页面所有的资源，**我们期望的是用户触发按钮后，再加载该弹框组件的资源**，这种场景下，就很适合用懒加载的方式引入。

弹框组件懒加载：

```js
<script>
const dialogInfo = () => import(/* webpackChunkName: "dialogInfo" */ '@/components/dialogInfo');
export default {
  name: 'homeView',
  components: {
    dialogInfo
  }
}
</script>
```

重新打包后，home.js 和 about.js 中没有了弹框组件的代码，该组件被独立打包成 dialogInfo.js，**当用户点击按钮时，才会去加载 dialogInfo.js 和 dialogInfo.css**。

最终，使用组件路由懒后，该项目的首页资源进一步减少。

**组件懒加载的使用场景**

有时资源拆分的过细也不好，可能会造成浏览器 http 请求的增多。

总结出三种适合组件懒加载的场景：

1）该页面的 JS 文件体积大，导致页面打开慢，可以通过组件懒加载进行资源拆分，利用浏览器并行下载资源，提升下载速度（比如首页）。

2）该组件不是一进入页面就展示，需要一定条件下才触发（比如弹框组件）。

3）该组件复用性高，很多页面都有引入，利用组件懒加载抽离出该组件，一方面可以很好利用缓存，同时也可以减少页面的 JS 文件大小（比如表格组件、图形组件等）。

## 合理使用 Tree shaking

Tree shaking 的作用：消除无用的 JS 代码，减少代码体积。

举个 🌰：

```js
// util.js
export function targetType(target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}
export function deepClone(target) {
  return JSON.parse(JSON.stringify(target));
}
```

项目中只使用了 targetType 方法，但未使用 deepClone 方法，项目打包后，deepClone 方法不会被打包到项目里。

tree-shaking 原理：

依赖于 ES6 的模块特性，ES6 模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这就是 tree-shaking 的基础。

静态分析就是不需要执行代码，就可以从字面量上对代码进行分析。ES6 之前的模块化，比如 CommonJS 是动态加载，只有执行后才知道引用的什么模块，就不能通过静态分析去做优化，正是基于这个基础上，才使得 tree-shaking 成为可能。

**Tree shaking 并不是万能的**

并不是说所有无用的代码都可以被消除，还是上面的代码，换个写法 tree-shaking 就失效了。

```js
// util.js
export default {
  targetType(target) {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
  },
  deepClone(target) {
    return JSON.parse(JSON.stringify(target));
  },
};

// 引入并使用
import util from '../util';
util.targetType(null);
```

同样的，项目中只使用了 targetType 方法，未使用 deepClone 方法，项目打包后，deepClone 方法还是被打包到项目里。

究其原因，export default 导出的是一个对象，无法通过静态分析判断出一个对象的哪些变量未被使用，所以 tree-shaking 只对使用 export 导出的变量生效。

这也是函数式编程越来越火的原因，因为可以很好利用 tree-shaking 精简项目的体积，也是 vue3 全面拥抱了函数式编程的原因之一。

## 骨架屏优化白屏时长

使用骨架屏，可以缩短白屏时间，提升用户体验。国内大多数的主流网站都使用了骨架屏，特别是手机端的项目。

SPA 单页应用，无论 vue 还是 react，最初的 html 都是空白的，需要通过加载 JS 将内容挂载到根节点上，这套机制的副作用：会造成长时间的白屏。

常见的骨架屏插件就是基于这种原理，在项目打包时将骨架屏的内容直接放到 html 文件的根节点中。

骨架屏确实是优化白屏的不二选择，极大缩短白屏时间，使用示例可参考 [ElementUI](https://element.eleme.io/#/zh-CN/component/skeleton)以及 [Vant](https://vant-ui.github.io/vant/v3/#/zh-CN/skeleton)。
