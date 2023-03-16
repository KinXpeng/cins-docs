---
title: 面试相关
order: 3
nav:
  title: 专栏
  order: 3
---

## eval

```js
// eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
var x = 10;
console.log(eval(x + 17));
// 输出结果：27
```

## Promise

- axios 是一个基于 Promise 用于浏览器和 nodejs 的 HTTP 客户端，是 Promise 的实现版本，支持 Promise API

- 在 JavaScript 中，所有代码都是单线程的，也就是同步执行的。而 Promise 就为==异步编程==提供了一种解决方案。

  ```js
  const promise = new Promise((resolve, reject) => {
    // do something here ...
    if (success) {
      resolve(value); // fulfilled
    } else {
      reject(error); // rejected
    }
  });
  ```

- 该构造函数接收两个函数作为参数，分别是`resolve`和`reject`。
  当异步操作执行成功后，会将异步操作结果作为参数传入`resolve`函数并执行，此时 `Promise`对象状态从`pending`变为`fulfilled`；
  失败则会将异步操作的错误作为参数传入`reject`函数并执行，此时 `Promise`对象状态从`pending`变为`rejected`；

- 我们通过`then`方法，分别指定 resolved 状态和 rejected 状态的回调函数。

  ```js
  promise.then(
    function (value) {
      // success
    },
    function (error) {
      // failure
    },
  );
  Promise.all([p1, p2, p3]);
  // 把promise扔到一个数组里面，必须确保所有的promise对象都是resolve状态，才会返回
  Promise.race([p1, p2, p3]);
  // 只要有一个是resolve状态，就返回
  ```

  https://www.bilibili.com/video/BV1gW411H7B3?from=search&seid=9803203589622689357

http 的==3 次握手==（前端页面的加载流程，从 TCP 请求到页面交互过程），常见状态码

- http 是超文本传输协议，是互联网上应用最广泛的一种网络协议
- http==常见状态码==

  - 1xx：指示信息--表示请求已接收，继续处理。
  - 2xx：成功--表示请求已被成功接收、理解、接受。
  - 3xx：重定向--要完成请求必须进行更进一步的操作。
  - 4xx：客户端错误--请求有语法错误或请求无法实现。
  - 5xx：服务器端错误--服务器未能实现合法的请求。

- HTTP 请求与响应步骤

  1. 建立连接

     先解析 DNS，把 localhost 变成 ip（127.0.0.1），然后根据 127.0.0.1 和端口号 8080（没有端口号则使用默认的端口）建立 socket。也可以理解为通过“三次握手”建立 TCP 连接，确定通讯正常。

  2. 发送请求命令

     socket 建立好之后，客户端开始向 web 服务器发送请求命令（GET/POST 等）。

  3. 发送请求头（和请求正文（如果有））

     客户端先发送与自身相关的信息，再发送空行表示请求头发送完毕，如果是 post 则继续发送请求正文。

  4. 回传状态行

     应答第一步，发送协议版本和状态码（200、503、404 等）

  5. 回传应答头

     应答第二步，先发送自身相关信息、Content-Type(必须)及被请求的文档，在发送空行宝石应答头发送完毕。

  6. 回传应答正文

     应答第三步，根据应答头的 Content-Type 指定的格式发送应答正文。

  7. 关闭连接

     一次会话完成，如果设置了 Connection：keep-alive 则 TCP 连接不关闭，否则关闭连接。

- ==TCP 三次握手==

  1. 第一次握手

     建立连接。客户端发送连接请求报文段，将 SYN 位置为 1，Sequence Number 为 x；然后，客户端进入 SYN_SEND 状态，等待服务器的确认；

  2. 第二次握手

     服务器收到 SYN 报文段。服务器收到客户端的 SYN 报文段，需要对这个 SYN 报文段进行确认，设置 Acknowledgment Number 为 x+1(Sequence Number+1)；同时，自己自己还要发送 SYN 请求信息，将 SYN 位置为 1，Sequence Number 为 y；服务器端将上述所有信息放到一个报文段（即 SYN+ACK 报文段）中，一并发送给客户端，此时服务器进入 SYN_RECV 状态；

  3. 第三次握手

     客户端收到服务器的 SYN+ACK 报文段。然后将 Acknowledgment Number 设置为 y+1，向服务器发送 ACK 报文段，这个报文段发送完毕以后，客户端和服务器端都进入 ESTABLISHED 状态，完成 TCP 三次握手。

  - 为什么要三次握手
    - 为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。
    - 具体例子：“已失效的连接请求报文段”的产生在这样一种情况下：client 发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达 server。本来这是一个早已失效的报文段。但 server 收到此失效的连接请求报文段后，就误认为是 client 再次发出的一个新的连接请求。于是就向 client 发出确认报文段，同意建立连接。假设不采用“三次握手”，那么只要 server 发出确认，新的连接就建立了。由于现在 client 并没有发出建立连接的请求，因此不会理睬 server 的确认，也不会向 server 发送数据。但 server 却以为新的运输连接已经建立，并一直等待 client 发来数据。这样，server 的很多资源就白白浪费掉了。采用“三次握手”的办法可以防止上述现象发生。例如刚才那种情况，client 不会向 server 的确认发出确认。server 由于收不到确认，就知道 client 并没有要求建立连接。”

- 四次挥手

  - 第一次分手

    主机 1（可以使客户端，也可以是服务器端），设置 Sequence Number，向主机 2 发送一个 FIN 报文段；此时，主机 1 进入 FIN_WAIT_1 状态；这表示主机 1 没有数据要发送给主机 2 了；

  - 第二次分手

    主机 2 收到了主机 1 发送的 FIN 报文段，向主机 1 回一个 ACK 报文段，Acknowledgment Number 为 Sequence Number 加 1；主机 1 进入 FIN_WAIT_2 状态；主机 2 告诉主机 1，我“同意”你的关闭请求；

  - 第三次分手

    主机 2 向主机 1 发送 FIN 报文段，请求关闭连接，同时主机 2 进入 LAST_ACK 状态；

  - 第四次分手

    主机 1 收到主机 2 发送的 FIN 报文段，向主机 2 发送 ACK 报文段，然后主机 1 进入 TIME_WAIT 状态；主机 2 收到主机 1 的 ACK 报文段以后，就关闭连接；此时，主机 1 等待 2MSL 后依然没有收到回复，则证明 Server 端已正常关闭，那好，主机 1 也可以关闭连接了。

  - 为什么要四次分手

    TCP 协议是一种面向连接的、可靠的、基于字节流的运输层通信协议。TCP 是全双工模式，这就意味着，当主机 1 发出 FIN 报文段时，只是表示主机 1 已经没有数据要发送了，主机 1 告诉主机 2，它的数据已经全部发送完毕了；但是，这个时候主机 1 还是可以接受来自主机 2 的数据；当主机 2 返回 ACK 报文段时，表示它已经知道主机 1 没有数据发送了，但是主机 2 还是可以发送数据到主机 1 的；当主机 2 也发送了 FIN 报文段时，这个时候就表示主机 2 也没有数据要发送了，就会告诉主机 1，我也没有数据要发送了，之后彼此就会愉快的中断这次 TCP 连接。

    https://blog.csdn.net/qq_33616529/article/details/78288883

## 性能优化

## 什么是跨域（域名、协议、端口号）

- 域名（包括二级域名）、协议（http/https）、端口号这三者其中有一个不同就是属于跨域

## js 数据类型（基础/引用）

- 基础数据类型

  - 字符串（String）
  - 数字（Number）
  - 布尔（Boolean）
  - 对空（Null）
  - 未定义（Undefined）
  - Symbol（它是 es6 引入的一种新的原始数据类型，表示独一无二的值）

- 引用数据类型
  - 对象（Object）（数组（Array）、函数（Function）都属于 object 类型）

## 兼容问题

## BFC（Block Formatting Contexts）块级格式化上下文

- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此。
- 因为 BFC 内部的元素和外部的元素绝对不会互相影响，因此， 当 BFC 外部存在浮动时，它不应该影响 BFC 内部 Box 的布局，BFC 会通过变窄，而不与浮动有重叠。同样的，当 BFC 内部有浮动时，为了不影响外部元素的布局，BFC 计算高度时会包括浮动的高度。避免 margin 重叠也是这样的一个道理。

## 盒模型，垂直水平居中

- 页面就是由一个个盒模型堆砌起来的，每个 HTML 元素都可以叫做盒模型，盒模型由外而内包括：边距（margin）、边框（border）、填充（padding）、内容（content）。它在页面中所占的实际宽度是 margin + border + paddint + content 的宽度相加。

- 方法

  ```vue
  <template>
    <div class="parent">
      <div class="child"></div>
    </div>
  </template>

  <style>
  /*第一种*/
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  /*第二种*/
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  ```

## link 与@import 的区别

- link 属于 HTML 标签，而@import 是 CSS 提供的;
- 页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载;
- import 只在 IE5 以上才能识别，而 link 是 HTML 标签，无兼容问题;
- link 方式的样式的权重 高于@import 的权重.

## 跨域原因和解决方案

- 原因见第 5 点

- vue.config.js 中

  ```js
  devServer: {
    host: "localhost", //要设置当前访问的ip 否则失效
    port: 8080, //当前web服务端口
    open: true, //浏览器自动打开页面
    proxy: {
      "/api": {
        target: "https://www.kinxpeng.com/", //目标地址
        ws: true, //是否代理websocket
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api": "https://www.kinxpeng.com/", //url重写
        },
      },
    },
  },
  ```

## 原型、原型链和闭包

## es6 新增（let、const 和 var 的区别）箭头函数、拓展运算符、解构赋值、async await、Promise

## cookie 和 localStorage、sessionStorage 的区别

- cookie 只有 4KB 的大小

## this 指向（call、apply 和 bind）

- 改变函数运行时的 this 指向
- call、apply 与 bind 的差别
- call 和 apply 改变了函数的 this 上下文后便执行该函数,而 bind 则是返回改变了上下文后的一个函数。
- call、apply 的区别(call 传入的参数为参数列表形式)

  - 他们俩之间的差别在于参数的区别，call 和 apply 的第一个参数都是要改变上下文的对象，而==call==从第二个参数开始以==参数列表==的形式展现，==apply==则是把除了改变上下文对象的参数放在一个==数组==里面作为它的第二个参数。

    ```js
    let arr1 = [1, 2, 19, 6];
    console.log(Math.max.call(null, 1, 2, 19, 6)); // 19
    console.log(Math.max.call(null, arr1)); // NaN
    console.log(Math.max.apply(null, arr1)); //  19 直接可以用arr1传递进去
    ```

    ```js
    function fn() {
      console.log(this);
    }
    // apply方法结果同下
    fn.call(); // 普通模式下this是window，在严格模式下this是undefined
    fn.call(null); // 普通模式下this是window，在严格模式下this是null
    fn.call(undefined); // 普通模式下this是window，在严格模式下this是undefined
    ```

## undefined 和 null 的区别

```js
console.log(null == undefined); //true
console.log(null === undefined); //false
```

- null 表示"没有对象"，即该处不应该有值。典型用法是：

  （1） 作为函数的参数，表示该函数的参数不是对象。

  （2） 作为对象原型链的终点。

- undefined 表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

  （1）变量被声明了，但没有赋值时，就等于 undefined。

  （2) 调用函数时，应该提供的参数没有提供，该参数等于 undefined。

  （3）对象没有赋值的属性，该属性的值为 undefined。

  （4）函数没有返回值时，默认返回 undefined。

## 箭头函数和普通函数的区别

- **外形不同**

  箭头函数使用箭头定义，普通函数中没有

- **箭头函数都是匿名函数**

  普通函数可以有匿名函数，也可以有具体名函数，但是箭头函数都是匿名函数。

- **箭头函数不能用于构造函数，不能使用 new**

  普通函数可以用于构造函数，以此创建对象实例。

  ```js
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  let admin = new Person('小明', 18);
  console.log(admin.name); // 小明
  console.log(admin.age); // 18
  ```

- this 指向不同

  普通函数指向调用它的对象

  箭头函数本身没有 this（任何方法都改变不了其指向，如 call() , bind() , apply()）

## 防抖与节流

- 函数节流是指一定时间内 js 方法只跑一次

  ```js
  // 函数节流
  var canRun = true;
  document.getElementById('throttle').onscroll = function () {
    if (!canRun) {
      // 判断是否已空闲，如果在执行中，则直接return
      return;
    }
    canRun = false;
    setTimeout(function () {
      console.log('函数节流');
      canRun = true;
    }, 300);
  };
  ```

  **函数节流的要点是，声明一个变量当标志位，记录当前代码是否在执行。**

  如果空闲，则可以正常触发方法执行。

  如果代码正在执行，则取消这次方法执行，直接 return。

  用 setTimeout 规定最小的时间间隔 300，接着再执行 setTimeout 方法体里面的内容。

- 函数防抖是指频繁触发的情况下，只有足够的空闲时间，才执行代码一次。

  函数防抖的应用场景，最常见的就是用户注册时候的手机号码验证和邮箱验证了。只有等用户输入完毕后，前端才需要检查格式是否正确，如果不正确，再弹出提示语。

  ```js
  // 函数防抖
  var timer = false;
  document.getElementById('debounce').onscroll = function () {
    clearTimeout(timer); // 清除未执行的代码，重置回初始化状态
    timer = setTimeout(function () {
      console.log('函数防抖');
    }, 300);
  };
  ```

  **函数防抖的要点，也是需要一个 setTimeout 来辅助实现。延迟执行需要跑的代码。**

  如果方法多次触发，则把上次记录的延迟执行代码用 clearTimeout 清掉，重新开始。

  如果计时完毕，没有方法进来访问触发，则执行代码。

## http 状态码

- 100 continue 继续

- 2xx

  - 200 ok 正常返回信息
  - 201 请求成功并且服务器创建了新的资源
  - 202 服务器已接受请求，但尚未处理

- 3xx

  - 301 请求的网页已永久移动到新位置
  - 302 临时重定向
  - 303 临时性重定向，且总是使用 GET 请求新的 URL
  - 304 自从上次请求后，请求的网页未修改过

- 4xx

  - 400 服务器无法理解请求的格式
  - 401 请求未授权
  - 403 禁止访问
  - 404 找不到如何与 url 相匹配的资源

- 5xx

  - 500 服务器端错误

  - 503 服务器暂时无法处理请求(可能是过载或维护)

## vue 的生命周期

- 一个生命周期的顺序

  - beforeCreated
  - created
    - data 已初始化，计算属性，event/watch 事件回调，但 dom 树并未挂载
  - beforeMount
    - 在挂载前被调用，render 函数首次被调用生成虚拟 dom
  - mounted
    - 挂载完成，dom 树已经渲染到页面，可以进行 dom 操作
  - beforeUpdate
  - updated
  - beforeDestroy
  - destroyed

-

## 路由有哪几种导航钩子

- 全局守卫

  ```js
  // 一般用于登录验证
  router.beforeEach((to, from, next) => {
    // do someting
  });
  ```

  [beforeResolve]：这个钩子和 beforeEach 类似，也是路由跳转前触发，参数也是 to,from,next 三个
  [afterEach]：和 beforeEach 相反，它是在路由跳转完成之后触发，参数包括 to、from，==没有了 next==

- 路由独享守卫

  - [beforeEnter]：和 beforeEach 完全相同，如果都设置则在 beforeEach 之后紧随执行，参数有 to、from、next。

    ```js
    cont router = new VueRouter({
      routes: [
        {
          path: '/file',
          component: File,
          beforeEnter: (to, from ,next) => {
          // do someting
          }
        }
      ]
    });
    ```

- 局部守卫

  - 是指在组件内执行的钩子函数，类似于数组内的生命周期函数，相当于为配置路由的组件添加的生命周期钩子函数。钩子函数按执行顺序包括 beforeRouteEnter、beforeRouteUpdate(2.2 新增)、beforeRouteLeave 三个

    ```js
    routes:[
       {
          path:'/b',
          component:B,
          beforeEnter:(to,form,next)=>{
             .....
          }
       }
    ]
    ```

## vue 双向绑定的原理

- vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；
- 核心：关于 VUE 双向数据绑定，其核心是 Object.defineProperty()方法；
- 3.介绍一下 Object.defineProperty()方法
  （1）Object.defineProperty(obj, prop, descriptor) ，这个语法内有三个参数，分别为 obj （要定义其上属性的对象） prop （要定义或修改的属性） descriptor （具体的改变方法）
  （2）简单地说，就是用这个方法来定义一个值。当调用时我们使用了它里面的 get 方法，当我们给这个属性赋值时，又用到了它里面的 set 方法；

- 用 js 简单实现一个双向绑定

  ```html
  <!--html-->
  <div class="box">
    <input id="a" type="text" />
    <p id="b"></p>
  </div>
  ```

  ```js
  // js
  let obj = {};
  Object.defineProperty(obj, 'val', {
    //  get: function () {
    //    console.log("get被调用了");
    //  },
    set: function (val) {
      $('#a').val(val);
      $('#b').html(val);
    },
  });
  document.addEventListener('keyup', function (e) {
    obj.val = e.target.value;
  });
  ```

## 状态管理的使用、vuex 的使用与原理

- Vuex 是专门为 Vuejs 应用程序设计的**状态管理工具**。

## computed 与 watch 的区别

- computed 和 watch 的使用场景并不一样，computed 的话是**通过几个数据的变化，来影响一个数据，**而 watch，则是可以**一个数据的变化，去影响多个数据。**

### 1.computed

- 支持缓存，只有==依赖数据发生改变==，才会重新进行计算
- 不支持异步，当 computed 内有异步操作时无效，无法监听数据的变化
- 如果 computed 属性属性值是函数，那么默认会走 get 方法；函数的返回值就是属性的属性值；在 computed 中的，属性都有一个 get 和一个 set 方法，当数据变化时，调用 set 方法。

### 2.watch

- 不支持缓存，但数据改变，直接会触发相应的操作；
- watch 支持异步；
- 监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值，用来监听 input 然后进行一些即时搜索操作什么的。

## vue 组件封装的过程

- 首先，使用 Vue.extend()创建一个组件

  ```js
  var myCom = Vue.extend({
    template: '<div>这是我的组件</div>',
  });
  ```

- 然后，使用 Vue.component()方法注册组件

  ```js
  // Vue.component('my-com',myCom);
  /*局部注册组件*/
  var app1 = new Vue({
    el: '#app1',
    components: {
      'my-com': myCom,
    },
  });

  var app2 = new Vue({
    el: '#app2',
  });
  ```

- 接着，如果子组件需要数据，可以在 props 中接受定义

- 最后，子组件修改好数据之后，想把数据传递给父组件，可以使用 emit()方法

## 属性改变但没有渲染的解决方案

- 首先，在 Vue 2x 中数据的响应式处理是基于 Object.defineProperty() 的，但是它只会侦听对象的属性，并不能侦听对象。所以，在添加对象属性的时候，通常需要这样

  ```js
  Vue.$set(object, 'name', value);
  ```

- 但是面试的时候面试官问 Object.defineProperty()不能监听变化，为什么 push、unshift、splice 也能触发这就要分析 vue 源码，在源码中我们发现 vue 重写监听了 push、unshift、splice；

## 前端性能优化的方案 cdn 加速

### 1.页面级别的优化

(1) 减少 HTTP 请求

- CSS 精灵图
- 如果可以，尽量将外部的脚本、样式进行合并，多个合为一个。且 CSS，JS，image 都可以用相应工具进行压缩
- 能使用 CSS 替代效果的尽量少使用图片
- 图片懒加载。可以在某些条件下或者页面刚加载时减少 HTTP 请求数。
- CDN 托管

(2) 减少 DNS 查询：DNS 缓存、将资源分布到恰当数量的主机名
(3) 将外部脚本置底
外链脚本在加载时，会阻塞其他资源。 最简单可依赖的方法是将脚本尽可能往后挪，减少对并发下载的影响。
(4) 将 CSS 放在 head 中
(5) 异步执行 inline 脚本。可使用 script 的 defer 属性，使用 setTimeout，HTML5 中的 web workers 机制等
(6) 合理设置 HTTP 缓存：Expires 与 Cache-control

### 2.代码级别的优化

(1) javascript

- 用 innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 javascript 性能
- 慎用 with。with 相当于增加了作用域链的长度，过长的作用域链会导致查找性能下降
- 减少作用域链查找。若在循环中需要访问非本作用域下的变量，在遍历之前用局部变量缓存该变量，并在遍历结束之后再重复那个变量。全局变量处于作用域链的最顶端，访问时查找次数是最多的，所以少用全局变量。同时也要注意减少闭包的使用。
- 数据访问。js 中对直接量（字符串，正则表达式）和局部变量的访问最快。所以当：a.对任何对象属性访问超过 1 次；b. 对任何数组成员访问次数超过 1 次。可以将数据放入局部变量以加快访问速度。

  (2) CSS

- 使用 link 而不使用@import。link 在页面加载时 CSS 同时被加载，@import 引入的 CSS 要等页面加载完毕后再加载
- 设置 className 而不是直接使用 css 表达式
- 避免正则的属性选择器。

（3）异步加载

使用 Ajax 实现异步加载，例如，滚动页面加载后面的内容，这种也比较常见。

https://blog.csdn.net/m0_46680765/article/details/107354878?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control

## 优雅降级和渐进增强是什么意思

- 渐进增强和优雅降级这两个概念是在 CSS3 出现之后火起来的。由于低级浏览器不支持 CSS3，但是 CSS3 特效太优秀不忍放弃，所以在高级浏览器中使用 CSS3，而在低级浏览器只保证最基本的功能。二者的目的都是关注不同浏览器下的不同体验，但是它们侧重点不同，所以导致了工作流程上的不同。

**优雅降级（Graceful Degradation）**：一开始就构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。

**渐进增强（Progressive Enhancement）**：一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。

- 优雅降级和渐进增强都关注于同一网站在不同设备里不同浏览器下的表现程度。

  - 渐进增强的写法，优先考虑老版本浏览器的可用性，最后才考虑新版本的可用性。
  - 优雅降级的写法，优先考虑新版本浏览器的可用性，最后才考虑老版本的可用性。

  ```css
  .transition {
    /*渐进增强写法*/
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .transition {
    /*优雅降级写法*/
    transition: all 0.5s;
    -o-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
  ```

## px、em、rem 的区别

- px 是绝对单位，不会改变
- em 是相对于父元素
  - 如当前对行内文本的字体尺寸未被人为设置，相对于浏览器的默认字体尺寸。
  - em 的值并不是固定的；
  - em 会继承父级元素的字体大小。
- rem 是相对于根元素（相对于 html 元素）

## webpack、gulp 和 grunt 的区别

- gulp/grunt 是一种能够优化前端的开发的流程的工具，而 webpack 是一种模块化的解决方案，不过 webpack 的优点是在很多场景下可以代替 gulp 或 grunt 类的工具。
- Grunt 和 Gulp 的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，工具之后可以自动替你完成这些任务。
- Webpack 的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack 将从这个文件开始找到你的项目的所有依赖文件，使用 loaders 处理它们，最后打包为一个（或多个）浏览器可识别的 JavaScript 文件。

## loader 和 plugin 的区别

- loader 是运行在 NodeJS 中，可以用 options 对象进行配置。plugin 可以为 loader 带来更多特性。loader 可以进行压缩，打包，语言翻译等等。

  loader 从模板路径解析，npm install node_modules。也可以自定义 loader，命名 XXX-loader。

- 【Plugin】：目的在于解决 loader 无法实现的其他事，从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。

## $router和$route 的区别

- $router 是 VueRouter 的一个对象，通过 Vue.use(VueRouter)和 Vu 构造函数得到一个 router 的实例对象，这个对象中是一个全局的对象，他包含了所有的路由，包含了许多关键的对象和属性。
  - $router.push({path:'home'})，本质是向 history 栈中添加一个路由，在我们看来是切换路由，但本质是在添加一个 history 记录
  - $router.replace({path:'home'})，//替换路由，没有历史记录
- $route是一个跳转的路由对象，每一个路由都会有一个$route 对象，是一个局部的对象，可以获取对应的 name，path，params，query 等

## 小程序里开页面最多开多少

- 10 个

## UDP 和 TCP 的区别

- UDP 三个特点（不需要建立连接，不需要验证数据报文，不需要流量控制，只会把想发的数据报文

  一股脑的丢给对端 ）

  - 面向无连接

  - 不可靠性
  - 高效（例如直播）

- TCP 连接时三次握手、断开时四次握手

## nodeJS 中的 stream（流）

- nodejs 中的流是可读的、或可写的、或可读可写的。并且流继承了 EventEmitter。因此所有的流都是 EventEmitter 的实列。
- Node.js 中有四种基本的流类型，如下：
  1. Readable--可读的流(比如 fs.createReadStream())
  2. Writable--可写的流(比如 fs.createWriteStream())
  3. Duplex--可读写的流
  4. Transform---在读写过程中可以修改和变换数据的 Duplex 流

## vue 渲染方式：render 和 template 的区别

- render----js 的方式做渲染

  - render（提供）是一种编译方式
  - render 里有一个函数 h，这个 h 的作用是将单文件组件进行虚拟 DOM 的创建，然后再通过 render 进行解析。
  - h 就是 createElement()方法：createElement(标签名称,属性配置,children)

- template----html 的方式做渲染
  - template 也是一种编译方式，但是 template 最终还是要通过 render 的方式再次进行编译。

## XSS 和 CSRF

- XSS

  - XSS（Cross Site Scripting）:==跨域脚本攻击==。

  - XSS 简单点来说，就是攻击者想尽一切办法将可以执行的代码注入到网页中。
  - XSS 可以分为多种类型，但是总体上我认为分为两类：持久型和非持久型。
  - 持久型也就是攻击的代码被服务端写入进数据库中，这种攻击危害性很大，因为如果网站访问量很大的话，就会导致大量正常访问页面的用户都受到攻击。
  - XSS 攻击的核心原理是：不需要你做任何的登录认证，它会通过合法的操作（比如在 url 中输入、在评论框中输入），向你的页面注入脚本（可能是 js、hmtl 代码块等）。

- CSRF
  - CSRF 中文名为==跨站请求伪造==。原理就是攻击者构造出一个后端请求地址，诱导用户点击或者通过某些途径自动发起请求。如果用户是在登录状态下的话，后端就以为是用户在操作，从而进行相应的逻辑。

## 前端页面加载流程，从 tcp 请求到页面交互

- 浏览器查找域名对应的 IP 地址（域名解析的过程，先进行缓存的查看）

  - 先检查自己本地的 hosts 文件是否有这个网址映射关系
  - 查找本地 DNS 解析器缓存
  - 会找 TCP/ip 参数中设置的首选 DNS 服务器

- 浏览器根据 IP 地址与服务器建立 socket 连接
  - 在发送 http 请求前，需要域名解析(DNS 解析)，解析获取相应的 IP 地址
  - 浏览器向服务器发起 tcp 连接，与浏览器建立 tcp 三次握手
  - 握手成功后，浏览器向服务器发送 http 请求，请求数据包
- 浏览器与服务器通信： 浏览器请求，服务器处理请求
  - 服务器处理收到的请求，将数据返回至浏览器
  - 浏览器收到 HTTP 响应
  - 读取页面内容，浏览器渲染，解析 html 源码
  - 生成 Dom 树、解析 css 样式、js 交互
  - 客户端和服务器交互
  - ajax 查询
- 浏览器与服务器断开连接

## 任务队列

- Js 中，有两类任务队列：宏任务队列（macro tasks）和微任务队列（micro tasks）。==宏任务队列可以有多个，微任务队列只有一个==
- 宏任务：script（全局任务）, setTimeout, setInterval, setImmediate, I/O, UI rendering.
- 微任务：process.nextTick （node.js 中进程相关的对象）, Promise, Object.observer, MutationObserver。

## Vue 中的 nextTick

- `Vue.nextTick`用于==延迟执行==一段代码，它接受 2 个参数（回调函数和执行回调函数的上下文环境），如果没有提供回调函数，那么将返回`promise`对象。

## Vue 内部页面的执行顺序

- 把模板编译为 render 函数
- 实例进行挂载, 根据根节点 render 函数的调用，递归的生成虚拟 dom
- 对比虚拟 dom，渲染到真实 dom
- 组件内部 data 发生变化，组件和子组件引用 data 作为 props 重新调用 render 函数，生成虚拟 dom, 返回到步骤 3

## 执行栈

- 可以把执行栈认为是一个存储函数调用的栈结构，遵循==先进后出==的原则。执行 JS 代码的时候其实就是往执行栈中放入函数。
- 其实当遇到异步的代码时，会被挂起并在需要执行的时候加入到 Task（有多种 Task） 队列中。一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为。

## 浏览器中的 Event Loop

==Event Loop 的执行顺序==

- 首先执行同步代码，这属于宏任务
- 当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行
- 执行所有微任务
- 当执行完所有微任务后，如有必要会渲染页面
- 然后开始下一轮 Event Loop，执行宏任务中的异步代码，也就是 setTimeout 中的回调函数

## 垃圾回收机制

- JavaScript 中的内存管理是自动执行的，而且是不可见的。我们创建基本类型、对象、函数……所有这些都需要内存。
- 可达性

  - JavaScript 中内存管理的主要概念是可达性。
  - 简单地说，“可达性” 值就是那些以某种方式可访问或可用的值，它们被保证存储在内存中。

- 无法访问的数据模块

  - 有可能整个相互连接的对象变得不可访问并从内存中删除。

- 什么是垃圾

  - 一般来说==没有被引用的对象==就是垃圾，就是要被清除， 有个例外如果几个对象引用形成一个环，互相引用，但根访问不到它们，这几个对象也是垃圾，也要被清除。

- 如何检垃圾
  - 一种算法是标记 **标记-清除** 算法。

## 设计模式

- 设计原则
  - 单一职责原则（SRP）
    - 一个对象或方法只做一件事情。如果一个方法承担了过多的职责，那么在需求的变迁过程中，需要改写这个方法的可能性就越大。应该把对象或方法划分成较小的粒度。
  - 最少知识原则（LKP）
    - 一个软件实体应当 尽可能少地与其他实体发生相互作用 。
    - 应当尽量减少对象之间的交互。如果两个对象之间不必彼此直接通信，那么这两个对象就不要发生直接的 相互联系，可以转交给第三方进行处理。
  - 开放-封闭原则（OCP）
    - 软件实体（类、模块、函数）等应该是可以 扩展的，但是不可修改。
    - 当需要改变一个程序的功能或者给这个程序增加新功能的时候，可以使用增加代码的方式，尽量避免改动程序的源代码，防止影响原系统的稳定。

## 语法糖

在计算机科学中，语法糖(syntactic sugar)是指编程语言中可以更容易的表达一个操作的语法，它可以使程序员更加容易去使用这门语言：操作可以变得更加清晰、方便，或者更加符合程序员的编程习惯。

## css 选择器的优先级？

！important 行内样式 id 类选择器 元素选择器 继承或者\*

## 哪些属性可以被继承？

字体属性 font ，font-family，font-weight，font-style，fon
文本系列

## type of array、null 返回什么？null 是基本数据类型为什么返回对象？type of function 返回的是什么？

## this 指向问题？vue 中 this 指向哪里？-当前的实例对象，永远指向这个对象吗？

未完待续。。。
