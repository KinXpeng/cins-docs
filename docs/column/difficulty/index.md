---
title: 难点总结
order: 6
nav:
  title: 专栏
  order: 3
---

## 数据响应式

- 数据的变化会引发界面的变化

- 数据变化的时候会自动运行一些相关函数

- 数据响应式例子：

  ```js
  /**
   * 观察某个对象的所有属性
   * @param {Object} obj
   * */
  function observe(obj) {
    for (const key in obj) {
      let internalValue = obj[key];
      // const funcs = new Set() // 避免出现重复的函数
      const funcs = [];
      Object.defineProperty(obj, key, {
        get: function () {
          // 记录：哪个函数在用
          // funcs.add(window.__func)
          if (window.__func && !funcs.includes(window.__func)) {
            funcs.push(window.__func);
          }
          return internalValue;
        },
        set: function (val) {
          internalValue = val;
          // 派发更新，运行：执行用我的函数
          for (let i = 0; i < funcs.length; i++) {
            funcs[i]();
          }
        },
      });
    }
  }

  // 自动执行
  function autorun(fn) {
    window.__func = fn;
    fn();
    window.__func = null;
  }
  ```

## 闭包

- 2 个特点

  - 函数嵌套函数
  - 内层函数可以访问外层函数的变量和参数

- 2 个作用

  - 防止变量和参数被 GC（垃圾回收机制回收）
  - 防止变量和参数被外部污染

- 1 个风险

  - 滥用可能会造成内存泄露的风险

- 例子：

  ```js
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      console.log(count);
    };
  }

  const counter = createCounter();
  counter(); // 1
  counter(); // 2

  // 防抖和节流也采用了闭包
  ```

## class 类

- 使用 class 实现继承

  ```js
  class Person {
    constructor(name) {
      this.name = name;
    }

    drink() {
      console.log('喝水');
    }
  }

  class Student extends Person {
    constructor(name, score) {
      super(name);
      this.score = score;
    }

    introduce() {
      console.log(`我叫${this.name}，考了${this.score}分`);
    }
  }

  const student = new Student('张三', 78); // 实例对象
  console.log(student);
  student.introduce();
  student.drink();

  class Teacher extends Person {
    constructor(name, subject) {
      super(name);
      this.subject = subject;
    }

    introduce() {
      console.log(`我叫${this.name}，教${this.subject}`);
    }
  }

  const teacher = new Teacher('李四', '前端');
  console.log(teacher);
  teacher.introduce();
  ```

## 原型

- 原型链是有两个概念的一个显式原型和隐式原型。先有个 Person 这个类，类里面有喝水这个方法（函数），Person 这个类里面的所有方法（函数）看做为显示原型。好，Person 这里是这样理解的，再来看 Teacher，Teacher 这个地方开始真的分为隐式和显式了，因为 Teacher 的类继承了 Person 所以 Person 的显式原型变成了 Teacher 的隐式原型。最后再被 new 出来的 teacher 的显式原型是自己的几个参数，然后隐式原型指向着 Teacher，Teacher 又继承了 Person，然后特性就是调用方法（函数）的时候自己没有会去隐式原型里面找，找不到就又会去上一级找直到最上面。

- 详解

  ```js
  // 实例化出来的student上的__proto__与类Student上的prototype相等

  console.log(student.__proto__ === Student.prototype); // true

  // 隐式原型(student.__proto__)会指向类的显式原型（Student.prototype）
  ```

## 原型链

- 原型上的属性都能直接访问到

- 当我们访问一个对象的属性或方法的时候，首先它会从自身去找，如果找不到的话，就会往它的原型(\_\_proto\_\_)上去找，原型上还是找不到的话，就会往原型的原型上去找，这样以来，就形成一条链式的结构，称之为原型链。

- 通过`student.hasOwnProperty('name')`可以判断某个属性或方法是不是对象自身拥有的。

  ```js
  let obj = {}
  obj.__proto__ = {}
  obj.__proto__.a = 1
  console.log(obj.a) // 1

  Object.__proto__ = null // 执行null
  hasOwnProperty这个方法存在于 Object.prototype上
  ```

## instanceof

```js
[] instanceof Array  // true  原型上的构造函数是Array
{} instanceof Object // true  原型上的构造函数是Object

/*
[]
__proto__:
		constructor:f Array()  // 数组原型上构造函数是Array
*/
```

## webpack

- 初始化项目

  ```js
  npm init -y // 或者yarn init -y  生成package.json文件
  ```

- 安装 webpack

  ```js
  npm install webpack webpack-cli --dev  // 仅在开发环境生效
  ```

- 创建 webpack.config.js

  - 安装 style-loader css-loader 解析 css

    ```js
    npm install style-loader css-loader --dev
    ```

  - 安装 html-webpack-plugin 生成 html

    ```js
    npm install html-webpack-plugin --dev
    ```

  - 安装 babel 兼容低版本浏览器

    ```js
    npm install babel-loader @babel/core @babel/preset-env --dev
    ```

  - 安装 terser-webpack-plugin，压缩打包后的代码

    ```js
    npm install terser-webpack-plugin --dev
    ```

  - 安装 webpack-dev-server，修改后自动重新打包刷新页面

    ```js
    npm install webpack-dev-server --dev
    ```

    ```js
    // 在package.json中添加webpack serve --open，自动打开浏览器
    "scripts": {
      "dev": "webpack serve --open"
    }

    // 配置后可通过 npm run dev 运行项目自动打开浏览器
    ```

  - 安装 webpack-bundle-analyzer 打包分析工具

    ```js
    npm install webpack-bundle-analyzer --dev // 会在打包的时候自动打开浏览器，显示打包后的文件体积
    ```

  - 总结

    ```js
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const TerserPlugin = require('terser-webpack-plugin');
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

    module.exports = {
      mode: 'development', // 指定环境
      devtool: 'inline-source-map', // 定位源文件中的错误，映射到具体的行数
      entry: './src/index.js', // 入口文件
      output: {
        path: path.resolve(__dirname, 'dist'), // 输出文件夹名称及路径
        // filename: 'index.js' // 输出文件
        filename: '[name][contenthash].js', // 配置contenthash，每次修改后打包生成的文件名都不一样
      },
      resolve: {
        alias: {
          // 设置文件路径别名
          '@': path.resolve(__dirname, 'src'),
        },
      },
      optimization: {
        minimize: true, // 是否要压缩
        minimizer: [new TerserPlugin()], // 使用什么工具压缩
      },
      devServer: {
        static: './dist', // 指定dist目录，配合命令自动打开浏览器
      },
      // 加载插件
      plugins: [
        new HtmlWebpackPlugin({
          title: '测试标题', // 自定义生成html的标题
        }),
        new BundleAnalyzerPlugin.BundleAnalyzerPlugin(), // 打包分析工具，分析打包后的文件大小
      ],
      // 此处模块的使用为了解析css，需要安装style-loader和css-loader
      // 安装命令：npm install style-loader css-loader --dev
      module: {
        // 模块使用
        rules: [
          {
            test: /\.css$/i, // 利用正则匹配css文件
            use: ['style-loader', 'css-loader'], // 使用依赖
          },
          {
            test: /\.(png|jpg|jpeg|svg)$/i, // 解析图片（webpack自带解析图片，不需要安装依赖）
            type: 'asset/resource',
          },
          {
            test: /\.js$/i,
            exclude: /node_modules/, // 忽略node_modules文件夹
            use: {
              // 自定义配置项使用对象的形式
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ],
      },
    };
    ```

## 浏览器进程

- 浏览器进程
- 网络进程
- 渲染进程
- 等等

## 渲染主线程是如何工作的?

渲染主线程是浏览器中最繁忙的线程，需要它处理的任务包括但不限于：

- 解析 HTML
- 解析 CSS
- 计算样式
- 布局
- 处理图层
- 每秒把页面画 69 次
- 执行全局 JS 代码
- 执行事件处理函数
- 执行计时器的回调函数
- 。。。

## 何为异步?

代码在执行过程中，会遇到一些无法立即处理的任务，比如：

- 计时完成后需要执行的任务 -- setTimeout 、setInterval
- 网络通信完成后需要执行的任务 -- XHR 、Fetch
- 用户操作后需要执行的任务 -- addEventListener

如果让渲染主线程等待这些任务的时机达到，就会导致主线程长期处于阻塞的状态，从而导致浏览器 _卡死_。

- 单线程是异步产生的原因

- 事件循环是异步的实现方式

## 如何理解 js 的异步

JS 是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。
所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的未尾排队，等待主线程调度执行。在这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。

## js 为何会阻碍渲染

- 有些 js 的执行时间过长会影响页面的绘制（js 的执行和渲染都在浏览器的主线程上）

## 任务有优先级吗

- 任务没有优先级，都是先进先出

- 但消息队列有优先级：

  根据 W3C 的最新解释:

  - 每个任务都有一个任务类型，同一个类型的任务必须在一个队列，不同类型的任务可以分属于不同的队列。
    在一次事件循环中，浏览器可以根据实际情况从不同的队列中取出任务执行。
  - 浏览器必须准备好一个微队列，微队列中的任务优先所有其他任务执行。

  在目前 chrome 的实现中，至少包含了下面的队列:

  - 延时队列: 用于存放计时器到达后的回调任务，优先级 中。
  - 交互队列:用于存放用户操作后产生的事件处理任务，优先级 高。
  - 微队列:用户存放需要最快执行的任务，优先级 最高。

  添加任务到微队列的主要方式主要是使用 Promise、MutationQbserver

```js
// 立即把一个函数添加到微队列
Promise.resolve().then(函数);
```

```js
function fn() {
  console.log(3);
}

setTimeout(() => {
  console.log(1);
}, 0);

Promise.resolve().then(fn);
console.log(2);

// 输出顺序 2 3 1

function a() {
  console.log(1);
  Promise.resolve().then(function () {
    console.log(2);
  });
}

setTimeout(function () {
  console.log(3);
  Promise.resolve().then(a);
});

Promise.resolve().then(function () {
  console.log(4);
});

console.log(5);

// 输出 5 4 3 1 2
```

## 阐述一下 JS 的事件循环

事件循环又叫做消息循环，是浏览器渲染主线程的工作方式在 Chrome 的源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。过去把消息队列简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。

根据 W3C 官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。

## JS 中的计时器能做到精确计时吗? 为什么?

不行，因为:

- 计算机硬件没有原子钟，无法做到精确计时。
- 操作系统的计时函数本身就有少量偏羞 由于 JS 的计时器最终调用的是操作系统的函数，也就携带了这些偏差。
- 按照 W3C 的标准，浏览器实现计时器时，如果嵌套层级超过 5 层，则会带有 4 毫秒的最少时间，这样在计时时间少于 4 毫秒时又带来了偏差。
- 受事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此又带来了偏差。

## 浏览器是如何渲染(render)页面的?

当浏览器的网络线程收到 HTML 文档后，会产生一个染任务，并将其传递给染主线程的消息队列。
在事件循环机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程。
整个渲染流程分为多个阶段，分别是: HTML 解析、样式计算、布局、分层、绘制、分块、光栅化、画每个阶段都有明确的输入输出，上一个阶段的输出会成为下一个阶段的输入。这样，整个渲染流程就形成了一套组织严密的生产流水线。

渲染的第一步是解析 HTML：
解析过程中遇到 CSS 解析 CSS，遇到 JS 执行 JS。为了提高解析效率，浏览器在开始解析前，会启动一个预解析的线程，率先下载 HTML 中的外部 CSS 文件和 外部的 JS 文件。
如果主线程解析到 Link 位置，此时外部的 CSS 文件还没有下载解析好，主线程不会等待，继续解析后续的 HTML。这是因为下载和解析 CSS 的工作是在预解析线程中进行的。这就是 CSS 不会阳塞 HTML 解析的根本原因。
如果主线程解析到 script 位置，会停止解析 HTML，转而等待 JS 文件下载好，并将全局代码解析执行完成后，才能继续解析 HTML。这是因为 JS 代码的执行过程可能会修改当前的 DOM 树，所以 DOM 树的生成必须暂停。这就是 JS 会阻塞 HTML 解析的根本原因。
第一步完成后，会得到 DOM 树和 CSSOM 树，浏览器的默认样式、内部样式、外部样式、行内样式均会包含在 CSSOM 树中。

## 未完待续。。。
