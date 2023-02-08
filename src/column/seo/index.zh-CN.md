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

## 长列表虚拟滚动

首页中不乏有需要渲染长列表的场景，当渲染条数过多时，所需要的渲染时间会很长，滚动时还会造成页面卡顿，整体体验非常不好。

**虚拟滚动——指的是只渲染可视区域的列表项，非可见区域**的不渲染，在滚动时动态更新可视区域，该方案在优化大量数据渲染时效果是很明显的。

虚拟滚动基本原理：

计算出 totalHeight 列表总高度，并在触发时滚动事件时根据 scrollTop 值不断更新 startIndex 以及 endIndex ，以此从列表数据 listData 中截取对应元素。

**虚拟滚动插件**

虚拟滚动的插件有很多，比如 vue-virtual-scroller、vue-virtual-scroll-list、react-tiny-virtual-list、react-virtualized 等。

这里简单介绍 [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller) 的使用：

```js
// 安装插件
npm install vue-virtual-scroller

// main.js
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

Vue.use(VueVirtualScroller)

// 使用
<template>
  <RecycleScroller
    class="scroller"
    :items="list"
    :item-size="32"
    key-field="id"
    v-slot="{ item }">
      <div class="user"> {{ item.name }} </div>
  </RecycleScroller>
</template>
```

该插件主要有 RecycleScroller.vue、DynamicScroller.vue 这两个组件，其中 RecycleScroller 需要 item 的高度为静态的，也就是列表每个 item 的高度都是一致的，而 DynamicScroller 可以兼容 item 的高度为动态的情况。

## Web Worker 优化长任务

由于浏览器 GUI 渲染线程与 JS 引擎线程是互斥的关系，当页面中有很多长任务时，会造成页面 UI 阻塞，出现界面卡顿、掉帧等情况。

查看页面的长任务：

打开控制台，选择 Performance 工具，点击 Start 按钮，展开 Main 选项，会发现有很多红色的三角，这些就属于长任务（长任务：执行时间超过 50ms 的任务）。

测试实验：

如果直接把下面这段代码直接丢到主线程中，计算过程中页面一直处于卡死状态，无法操作。

```js
let sum = 0;
for (let i = 0; i < 200000; i++) {
  for (let i = 0; i < 10000; i++) {
    sum += Math.random();
  }
}
```

使用 Web Worker 执行上述代码时，计算过程中页面正常可操作、无卡顿：

```js
// worker.js
onmessage = function (e) {
  // onmessage获取传入的初始值
  let sum = e.data;
  for (let i = 0; i < 200000; i++) {
    for (let i = 0; i < 10000; i++) {
      sum += Math.random();
    }
  }
  // 将计算的结果传递出去
  postMessage(sum);
};
```

Web Worker 具体的使用与案例，详情见 [一文彻底了解 Web Worker，十万、百万条数据都是弟弟 🔥](https://juejin.cn/post/7137728629986820126)。

**Web Worker 的通信时长**

并不是执行时间超过 50ms 的任务，就可以使用 Web Worker，还要先考虑通信时长的问题。

假如一个运算执行时长为 100ms，但是通信时长为 300ms， 用了 Web Worker 可能会更慢。

比如新建一个 web worker, 浏览器会加载对应的 worker.js 资源。

当任务的运算时长 - 通信时长 > 50ms，推荐使用 Web Worker。

## requestAnimationFrame 制作动画

`requestAnimationFrame` 是浏览器专门为动画提供的 API，它的刷新频率与显示器的频率保持一致，使用该 api 可以解决用 setTimeout/setInterval 制作动画卡顿的情况。

**setTimeout/setInterval、requestAnimationFrame 三者的区别：**

1）引擎层面

setTimeout/setInterval 属于 JS 引擎，requestAnimationFrame 属于 GUI 引擎。 JS 引擎与 GUI 引擎是互斥的，也就是说 GUI 引擎在渲染时会阻塞 JS 引擎的计算。

2）时间是否准确

requestAnimationFrame 刷新频率是固定且准确的，但 setTimeout/setInterval 是宏任务，根据事件轮询机制，其他任务会阻塞或延迟 js 任务的执行，会出现定时器不准的情况。

3）性能层面

当页面被隐藏或最小化时，setTimeout/setInterval 定时器仍会在后台执行动画任务，而使用 requestAnimationFrame 当页面处于未激活的状态下，屏幕刷新任务会被系统暂停。

## JS 的 6 种加载方式

**1）正常模式**

```js
<script src="index.js"></script>
```

这种情况下 JS 会阻塞 dom 渲染，浏览器必须等待 index.js 加载和执行完成后才能去做其它事情。

**2）async 模式**

```js
<script async src="index.js"></script>
```

async 模式下，它的加载是异步的，JS 不会阻塞 DOM 的渲染，async 加载是无顺序的，当它加载结束，JS 会立即执行。

使用场景：若该 JS 资源与 DOM 元素没有依赖关系，也不会产生其他资源所需要的数据时，可以使用 async 模式，比如埋点统计。

**3）defer 模式**

```js
<script defer src="index.js"></script>
```

defer 模式下，JS 的加载也是异步的，defer 资源会在  `DOMContentLoaded`  执行之前，并且 defer 是有顺序的加载。

如果有多个设置了 defer 的 script 标签存在，则会按照引入的前后顺序执行，即便是后面的 script 资源先返回。

所以 defer 可以用来控制 JS 文件的执行顺序，比如 element-ui.js 和 vue.js，因为 element-ui.js 依赖于 vue，所以必须先引入 vue.js，再引入 element-ui.js。

```js
<script defer src="vue.js"></script>
<script defer src="element-ui.js"></script>
```

defer 使用场景：一般情况下都可以使用 defer，特别是需要控制资源加载顺序时。

**4）module 模式**

```js
<script type="module">import {a} from './a.js'</script>
```

在主流的现代浏览器中，script 标签的属性可以加上  `type="module"`，浏览器会对其内部的 import 引用发起 HTTP 请求，获取模块内容。这时 script 的行为会像是  defer 一样，在后台下载，并且等待 DOM 解析。

Vite 就是利用浏览器支持原生的 `es module` 模块，开发时跳过打包的过程，提升编译效率。

**5） preload**

```js
<link rel="preload" as="script" href="index.js">
```

link 标签的 preload 属性：用于提前加载一些需要的依赖。

vue2 项目打包生成的 index.html 文件，会自动给首页所需要的资源，全部添加 preload，实现关键资源的提前加载。

**preload 特点：**

1）preload 加载的资源是在浏览器渲染机制之前进行处理的，并且不会阻塞 onload 事件；

2）preload 加载的 JS 脚本其加载和执行的过程是分离的，即 preload 会预加载相应的脚本代码，待到需要时自行调用；

**6）prefetch**

```js
<link rel="prefetch" as="script" href="index.js">
```

prefetch 是利用浏览器的空闲时间，加载页面将来可能用到的资源的一种机制；通常可以用于加载其他页面（非首页）所需要的资源，以便加快后续页面的打开速度。

prefetch 特点：

1）pretch 加载的资源可以获取非当前页面所需要的资源，并且将其放入缓存至少 5 分钟（无论资源是否可以缓存）。

2）当页面跳转时，未完成的 prefetch 请求不会被中断。

**加载方式总结**

async、defer 是  script 标签的专属属性，对于网页中的其他资源，可以通过  link  的 preload、prefetch  属性来预加载。

如今现代框架已经将 preload、prefetch 添加到打包流程中了，通过灵活的配置，去使用这些预加载功能，同时我们也可以审时度势地向 script 标签添加 async、defer 属性去处理资源，这样可以显著提升性能。

## 图片的优化

平常大部分性能优化工作都集中在 JS 方面，但图片也是页面上非常重要的部分。

特别是对于移动端来说，完全没有必要去加载原图，浪费带宽。如何去压缩图片，让图片更快的展示出来，有很多优化工作可以做。

图片的动态裁剪很多云服务，比如 [阿里云](https://help.aliyun.com/document_detail/144582.html) 或 [七牛云](https://developer.qiniu.com/dora/3683/img-directions-for-use)，都提供了图片的动态裁剪功能，效果很棒，确实是钱没有白花只需在图片的 url 地址上动态添加参数，就可以得到你所需要的尺寸大小，比如：`http://7xkv1q.com1.z0.glb.clouddn.com/grape.jpg?imageView2/1/w/200/h/200`

经过动态裁剪后的图片，加载速度会有非常明显的提升。

**图片的懒加载**

对于一些图片量比较大的首页，用户打开页面后，只需要呈现出在屏幕可视区域内的图片，当用户滑动页面时，再去加载出现在屏幕内的图片，以优化图片的加载效果。

图片懒加载实现原理：

由于浏览器会自动对页面中的 img 标签的 src 属性发送请求并下载图片，可以通过 html5 自定义属性 data-xxx 先暂存 src 的值，然后在图片出现在屏幕可视区域的时候，再将 data-xxx 的值重新赋值到 img 的 src 属性即可。

```js
<img src="" alt="" data-src="./images/1.jpg">
<img src="" alt="" data-src="./images/2.jpg">
```

这里以 `vue-lazyload` 插件为例：

```js
// 安装
npm install vue-lazyload

// main.js 注册
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
// 配置项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png', // 图片加载失败时的占位图
  loading: 'dist/loading.gif', // 图片加载中时的占位图
  attempt: 1
})

// 通过 v-lazy 指令使用
<ul>
    <li v-for="img in list">
        <img v-lazy="img.src" :key="img.src" >
    </li>
</ul>
```

**使用字体图标**

字体图标是页面使用小图标的不二选择，最常用的就是 [iconfont](https://www.iconfont.cn/)

字体图标的优点：

1）轻量级：一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了 http 请求。

2）灵活性：可以随意的改变颜色、产生阴影、透明效果、旋转等。

3）兼容性：几乎支持所有的浏览器，请放心使用。

**图片转 base64 格式**

将小图片转换为 base64 编码字符串，并写入 HTML 或者 CSS 中，减少 http 请求。

转 base64 格式的优缺点：

1）它处理的往往是非常小的图片，因为 Base64 编码后，图片大小会膨胀为原文件的 4/3，如果对大图也使用 Base64 编码，后者的体积会明显增加，即便减少了 http 请求，也无法弥补这庞大的体积带来的性能开销，得不偿失。

2）在传输非常小的图片的时候，Base64 带来的文件体积膨胀、以及浏览器解析 Base64 的时间开销，与它节省掉的 http 请求开销相比，可以忽略不计，这时候才能真正体现出它在性能方面的优势。

项目可以使用 `url-loader` 将图片转 base64：

```js
// 安装
npm install url-loader --save-dev

// 配置
module.exports = {
  module: {
    rules: [{
        test: /.(png|jpg|gif)$/i,
        use: [{
            loader: 'url-loader',
            options: {
              // 小于 10kb 的图片转化为 base64
              limit: 1024 * 10
            }
        }]
     }]
  }
};
```

## 优化总结

本文主要介绍的是 代码层面 的性能优化，经过上面的一系列优化，首页打开速度有了明显的提升，虽然都是一些常规方案，但其中可以深挖的知识点并不少。

## 参考文章

[路由懒加载原理及使用](https://blog.csdn.net/weixin_44003156/article/details/107541856)

[vue-skeleton-webpack-plugin 骨架屏插件使用](https://blog.csdn.net/supremeJacob/article/details/116608940)

[前端性能优化-虚拟滚动](https://www.jianshu.com/p/0ea012f9a7db)

[requestAnimationFrame 制作动画](https://juejin.cn/post/6898883036222324744)

[浅谈 script 标签中的 async 和 defer ](https://www.cnblogs.com/jiasm/p/7683930.html)

[Tree-Shaking 性能优化实践 - 原理篇](https://juejin.cn/post/6844903544756109319)

[使用 Preload&Prefetch 优化前端页面的资源加载](https://zhuanlan.zhihu.com/p/273298222)

**注** 本文来自[前端性能优化——首页资源压缩 63%、白屏时间缩短 86%](https://juejin.cn/post/7188894691356573754)，如有侵权，联系我删除！
