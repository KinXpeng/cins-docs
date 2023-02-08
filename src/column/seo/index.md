---
nav:
  title: Column
  path: /column
---

## Front-end performance optimization

- Improving the loading speed of the first screen is the most important link in front-end performance optimization. Here, the author sorted out some conventional and effective suggestions for the first screen optimization.

- Objective: To verify the effectiveness of the scheme and to understand and master its principle by comparing the performance changes before and after optimization.

## Route lazy loading

SPA project,One route corresponds to one page. If no processing is done, all pages will be packaged into a file after the project is packaged,When the user opens the home page,**all resources are loaded at once**,the homepage is slow to load and the user experience is reduced.

Change all routes to lazy loading:

```js
const routes = [
  {
    path: '/',
    name: 'Home',
    // Routing level code decomposition
    // This generates a separate block for the route(home.[hash].js)
    // It is lazily loaded when accessing the route.
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test.vue'),
  },
];
```

After repacking `home.js` and `app.js`. The file size will change,lazy route loading greatly compresses the home page resources of a project and reduces the white screen time of the home page.

**Principle of lazy route loading:**

Implementation of the lazy loading premise:ES6 Load modules dynamically——`import()`,where import() invoked,used as the starting point of the separated module,that is, the requested module and all the submodules it references,will be separated into a separate chunk.

——From[《webpack——模块方法》](https://webpack.docschina.org/api/module-methods/#import) - `import()`

To implement lazy loading, you must first separate the submodules for lazy loading and package them into a separate file.

`webpackChunkName` : webpack sets the name of the code block when it splits the library code (lodash) asynchronously during packaging. webpack combines any asynchronous module with the same block name into the same asynchronous block.

## Component lazy loading

In addition to lazy loading of routes, lazy loading of components also plays an important role in many scenarios.

Take for example:

home page and about page,all import dialogInfo dialog component,the box is not loaded as soon as you enter the page, but needs to be manually triggered by the user before being displayed.

home page sample:

```html
<template>
  <div class="homeView">
    <p>home page</p>
    <el-button @click="dialogVisible = !dialogVisible">Open dialog</el-button>
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

After the project is packaged, home.js and about.js includes the code for the pop-up component(search dialogInfo component in dist).

When the user opens the home page, all of the page's resources are loaded at once,**what is expected is that the user triggers the button and then loads the resources of the pop-up component**,in this scenario, lazy loading is a good way to introduce.

Lazy loading of the pop-up component:

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

After repacking, there is no code for the pop-up component in home.js and about.js,this component is packaged independently as dialogInfo.js,**when the user clicks the button, it loads dialogInfo.js and dialogInfo.css**.

Ultimately, the project's home page resources are further reduced by using component routing laziness.

**Usage scenario of component lazy loading**

Sometimes it is not good to split resources too finely, which can lead to an increase in http requests from the browser.

Three scenarios for lazy component loading are summarized:

1）The file size of js is large,if the page opens slowly, you can split resources by lazy component loading and use browsers to download resources in parallel to improve the download speed(such as the home page).

2）This component is not displayed as soon as it enters the page, but only triggered under certain conditions (such as a pop-up component).

3）The component reusability is high, many pages have been introduced, using the component lazy loading pull out of the component, on the one hand can make good use of cache,it also reduces the file size of js(such as table components, graphic components, and so on).

## Use Tree shaking wisely

How Tree shaking works:Eliminate unnecessary js code and reduce code volume.

Take for example:

```js
// util.js
export function targetType(target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}
export function deepClone(target) {
  return JSON.parse(JSON.stringify(target));
}
```

Only used targetType in the project,but not used deepClone,after the project is packaged,deepClone will not be packaged into the project.

tree-shaking principle:

Depending on the modular nature of ES6,ES6 module dependencies are determined,independent of state at run time, reliable static analysis,that's the basis of tree-shaking.

Static analysis is the ability to literally analyze code without having to execute it.The previous modularity,For example, Common.js is dynamically loaded,it is only after execution that we know what module is being referenced. It cannot be optimized using static analysis. It is based on this that tree-shaking is possible.

**Tree shaking is not a panacea**

That's not to say that all useless code can be eliminated. It is still the code above, when written tree-shaking, that stops working.

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

In the same way,only used targetType in the project,but not used deepClone,after the project is packaged,deepClone will be packaged into the project.

The reason is that export default exports an object. It cannot determine which variables of an object are not being used using static analysis. Therefore, tree-shaking only takes effect on variables exported using export.

That's why functional programming is becoming more and more popular. It is taking advantage of the volume of tree-shaking projects. It is also one of the reasons why vue3 is fully embracing functional programming.

## Skeleton screen optimizes white screen duration

Using a skeleton screen can shorten the white screen time and improve user experience. Most of the mainstream websites in China use skeleton screens, especially for mobile projects.

SPA single page application,whether vue or react,the original html was blank,you need to mount the content to the root node by loading js,side effect of this mechanism: long white screen.

Common skeleton screen plug-ins are based on this principle, placing the contents of the skeleton screen directly into the root node of the html file when the project is packaged.

Skeleton screen is really the best choice for optimizing white screen, greatly shortening white screen time,use examples are available [ElementUI](https://element.eleme.io/#/zh-CN/component/skeleton)and [Vant](https://vant-ui.github.io/vant/v3/#/zh-CN/skeleton).

## Long list virtual scroll

There are many scenes in the home page that need to render a long list. When there are too many render strips, the rendering time will be very long, and the page will be stuck when scrolling, so the overall experience is very bad.

**Virtual scrolling - refers to list items that render only visible areas, not visible areas**are not rendered,dynamically updating the viewable area while scrolling, this scheme is particularly effective when optimizing large amounts of data rendering.

Basic principles of virtual scrolling:

Calculate the total height of the list,And when triggered, the event is rolled according to scrollTop constantly update startIndex and endIndex,to intercept the corresponding element from the list data.

**Virtual scroll plug-in**

There are many plug-ins for virtual scrolling,such as vue-virtual-scroller、vue-virtual-scroll-list、react-tiny-virtual-list、react-virtualized and so on.

Here is a brief introduction use of[vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller):

```js
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

The plug-in mainly has RecycleScroller.vue、DynamicScroller.vue components,among them RecycleScroller need the height of item is static,that is, the height of each item in the list is the same,but DynamicScroller is compatible with the case where the height of the item is dynamic.

## Web Worker optimizes long tasks

Since browser rendering threads GUI and js engine threads are mutually exclusive,when there are a lot of long tasks on the page, it can cause the page to block,the interface is stuck or frames are dropped.

Long task to view the page:

Open the `console` and select the `Performance` tool,click the `Start` button, expand the `Main` option,you'll find a lot of red triangles,these are long tasks (long tasks: tasks that take longer than 50ms to execute).

Test experiment:

If you drop the following code directly into the main thread, the page will remain stuck during the calculation and cannot be operated.

```js
let sum = 0;
for (let i = 0; i < 200000; i++) {
  for (let i = 0; i < 10000; i++) {
    sum += Math.random();
  }
}
```

When the above code is executed using the Web Worker, the page can be operated normally and there is no deadlock in the calculation process:

```js
// worker.js
onmessage = function (e) {
  // onmessage gets the initial value passed in
  let sum = e.data;
  for (let i = 0; i < 200000; i++) {
    for (let i = 0; i < 10000; i++) {
      sum += Math.random();
    }
  }
  // Pass on the results of the calculation
  postMessage(sum);
};
```

See the detailed usage and case of Web Worker [一文彻底了解 Web Worker，十万、百万条数据都是弟弟 🔥](https://juejin.cn/post/7137728629986820126)。

**Communication duration of the Web Worker**

It is not necessary to use a Web Worker for tasks that take longer than 50ms to execute. You need to consider the communication time first.

If the execution time of an operation is 100ms, but the communication time is 300ms, the Web Worker may be slower.

For example, if you create a web worker, the browser will load the corresponding worker.js resource.

If the task operation duration - communication duration > 50ms, Web Worker is recommended.

## requestAnimationFrame

`requestAnimationFrame` It is an api that browsers provide specifically for animation,it refreshes at the same rate as the monitor,making animation of the situation in setTimeout/setInterval can be solved using the api.

**The difference between setTimeout/setInterval、requestAnimationFrame:**

1. Engine level

setTimeout/setInterval belong to js engine,requestAnimationFrame belong to GUI engine. JS engine and GUI engine is mutually exclusive,this means that the GUI engine will block the js engine's calculations when rendering.

2）Whether the time is accurate

requestAnimationFrame the refresh rate is fixed and accurate,but setTimeout/setInterval is a macro task,according to the event polling mechanism, other tasks will block or delay the execution of the js task, and the timer will be inaccurate.

3）Performance level

When pages are hidden or minimized,setTimeout/setInterval the timer still performs the animation task in the background,but use requestAnimationFrame, when the page is inactive, the screen refresh task is suspended.

## 6 loading modes of js

**1）Normal mode**

```js
<script src="index.js"></script>
```

In this case js blocks dom rendering and the browser must wait for index.js to load and execute before it can do anything else.

**2）async mode**

```js
<script async src="index.js"></script>
```

async mode,it loads asynchronously,js won't block DOM's rendering,async loading is out of order,when it finishes loading, js executes immediately.

Application scenario:If the js resource has no dependencies on DOM element,async patterns can be used when data is not generated that is required by other resources, such as buried statistics.

**3）defer mode**

```js
<script defer src="index.js"></script>
```

defer mode,js is also loaded asynchronously,the defer resource will come before `DOMContentLoaded` execute,and defer is loaded sequentially.

If there are multiple script tags with defer set, then defer is executed in the order introduced, even if the later script resources return first.

So defer can be used to control the execution order of the js files, like elements-ui.js and vue.js. Since elements-ui.js depend on vue, defer must be introduced to vue.js before elements-ui.js.

```js
<script defer src="vue.js"></script>
<script defer src="element-ui.js"></script>
```

Use defer scenario: Use defer as a general rule, especially if you need to control the loading order of resources.

**4）module mode**

```js
<script type="module">import {a} from './a.js'</script>
```

In mainstream modern browsers, the properties of the script tag `type="module"` can be added,the browser will send an HTTP request to its internal import reference to obtain the module content. At this time, the script will behave like defer, download in the background, and wait for DOM parsing.

Vite uses browsers to support native `es module` modules,skip the packaging process during development to improve compilation efficiency.

**5） preload**

```js
<link rel="preload" as="script" href="index.js">
```

The preload attribute of the link tag: used to load some required dependencies ahead of time.

The index.html file generated by the package of vue2 project will automatically add preload to all the resources required by the home page to realize the advance loading of key resources.

**preload features:**

1）Resources loaded by preload are processed before the browser rendering mechanism and do not block onload events;

2）The process of loading and executing the JS script loaded by preload is separate, that is, preload will preload the corresponding script code and call it when needed;

**6）prefetch**

```js
<link rel="prefetch" as="script" href="index.js">
```

Prefetch is a mechanism to use the idle time of the browser to load the resources that the page may use in the future; It can usually be used to load the resources required by other pages (not the first page) to speed up the opening of subsequent pages.

prefetch features:

1）The resources loaded by preview can obtain resources that are not required by the current page, and put them in the cache for at least 5 minutes (regardless of whether the resources can be cached or not).

2）When the page jumps, the unfinished prefetch request will not be interrupted.

**Summary of loading methods**

Async and defer are the exclusive attributes of the script tag. For other resources in the web page, you can preload them through the link's preload and prefetch attributes.

Now the modern framework has added preload and prefetch to the packaging process. Through flexible configuration, we can use these preload functions. At the same time, we can also add async and defer attributes to the script tag to process resources, which can significantly improve performance.

## Optimization of pictures

Usually, most performance optimization work is focused on JS, but pictures are also a very important part of the page.

Especially for mobile terminals, there is no need to load the original image and waste bandwidth. How to compress images and make them display faster, there are many optimization works to be done.

Dynamic tailoring of images Many cloud services, such as [Alibaba Cloud](https://help.aliyun.com/document_detail/144582.html) or [Qiniuyun](https://developer.qiniu.com/dora/3683/img-directions-for-use),They all provide the dynamic cropping function of the image, which is very good. It's really worth the money. Just add parameters dynamically to the URL address of the image, and you can get the size you need, for example:`http://7xkv1q.com1.z0.glb.clouddn.com/grape.jpg?imageView2/1/w/200/h/200`

After dynamic cropping, the loading speed will be significantly improved.

**Lazy loading of pictures**

For some home pages with large amount of pictures, users only need to present the pictures in the visible area of the screen after opening the page. When users slide the page, they load the pictures that appear in the screen to optimize the loading effect of the pictures.

Implementation principle of image lazy loading:

Since the browser will automatically send a request to the src attribute of the img tag in the page and download the image, you can temporarily store the src value through the html5 custom attribute data-xxx, and then reassign the value of data-xxx to the src attribute of the img when the image appears in the visible area of the screen.

```js
<img src="" alt="" data-src="./images/1.jpg">
<img src="" alt="" data-src="./images/2.jpg">
```

Take the `vue-lazyload` plug-in as an example:

```js
// install
npm install vue-lazyload

// main.js register
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
// Configuration item
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png', // Bitmap occupation in case of image loading failure
  loading: 'dist/loading.gif', // Bitmap occupation in case of image loading failure
  attempt: 1
})

// Use with the v-lazy instruction
<ul>
  <li v-for="img in list">
    <img v-lazy="img.src" :key="img.src" >
  </li>
</ul>
```

**Use font icon**

Font icons are the best choice for small icons on the page. The most common one is [iconfont](https://www.iconfont.cn/)

Advantages of font icons:

1）Lightweight: An icon font is smaller than a series of images. Once the font is loaded, the icon will be rendered immediately, reducing http requests.

2）Flexibility: You can change colors, generate shadows, transparency, rotation, etc. at will.

3）Compatibility: almost all browsers are supported, please feel free to use.

**Picture to base64 format**

Convert small images into base64 encoded strings and write them into HTML or CSS to reduce http requests.

Advantages and disadvantages of converting to base64 format:

1. It often deals with very small images, because after Base64 encoding, the image size will expand to 4/3 of the original file. If Base64 encoding is also used for large images, the size of the latter will increase significantly. Even if the http request is reduced, it cannot make up for the performance cost caused by this huge volume, which is more than worth the loss.

2. When transmitting very small images, the file volume expansion brought by Base64 and the time cost of browser parsing Base64 can be ignored compared with the cost of http requests saved by it. Only then can it truly reflect its performance advantages.

Projects can use `url loader` to transfer pictures to base64:

```js
// install
npm install url-loader --save-dev

// config
module.exports = {
  module: {
    rules: [{
        test: /.(png|jpg|gif)$/i,
        use: [{
            loader: 'url-loader',
            options: {
              // Convert images smaller than 10kb to base64
              limit: 1024 * 10
            }
        }]
     }]
  }
};
```

## Optimization Summary

This article mainly introduces the performance optimization at the code level. After the above series of optimization, the opening speed of the home page has been significantly improved. Although these are some conventional solutions, there are not many knowledge points that can be dug deeply.

## Reference articles

[路由懒加载原理及使用](https://blog.csdn.net/weixin_44003156/article/details/107541856)

[vue-skeleton-webpack-plugin 骨架屏插件使用](https://blog.csdn.net/supremeJacob/article/details/116608940)

[前端性能优化-虚拟滚动](https://www.jianshu.com/p/0ea012f9a7db)

[requestAnimationFrame 制作动画](https://juejin.cn/post/6898883036222324744)

[浅谈 script 标签中的 async 和 defer ](https://www.cnblogs.com/jiasm/p/7683930.html)

[Tree-Shaking 性能优化实践 - 原理篇](https://juejin.cn/post/6844903544756109319)

[使用 Preload&Prefetch 优化前端页面的资源加载](https://zhuanlan.zhihu.com/p/273298222)

**Notes** This article is from [前端性能优化——首页资源压缩 63%、白屏时间缩短 86%](https://juejin.cn/post/7188894691356573754),In case of infringement, please contact me to delete it!
