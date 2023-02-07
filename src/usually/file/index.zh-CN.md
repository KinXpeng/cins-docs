---
nav:
  title: 文件
  path: /usually
---

## 上传

```ts
/**
  上传统一方法
  @param type 上传文件类型 string
  @param flag 是否支持多个文件上传  boolean
  @param size 上传文件大小(单位为KB) number
*/
const upload = (type: string, flag: boolean, size: number) => {
  return new Promise((resolve, reject) => {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    if (flag) input.multiple = true;
    input.accept = type;
    input.onchange = ({ target }) => {
      const files = (target as EventTarget & { files: FileList }).files;
      let overSize = true; // 默认不超出
      if (size) {
        // 限制大小
        for (let key in files) {
          if (files[key].size && files[key].size / 1024 > size) {
            overSize = false;
          }
        }
      }
      if (overSize) {
        resolve(files);
      } else {
        reject('上传大小超出限制！');
      }
    };
    input.click();
  });
};
```

## File 转 base64

```ts
/**
 * 获取文件的Base64
 * @param file  {File}  文件
 */
const fileToBase64 = (file: any) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = ({ target }) => {
      // resolve(e.target.result)
      const result = (target as EventTarget & { result: string }).result;
      resolve(result);
    };
  });
};
```

## imgUrl 转 base64

```ts
const imgUrlToBase64 = (url: string) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject('请传入url内容');
    }

    if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(url)) {
      // 图片地址
      const image = new Image();
      // 设置跨域问题
      image.setAttribute('crossOrigin', 'anonymous');
      // 图片地址
      image.src = url;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx: any = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
        // 获取图片后缀
        const ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        // 转base64
        const dataUrl = canvas.toDataURL(`image/${ext}`);
        resolve(dataUrl || '');
      };
    } else {
      // 非图片地址
      reject('非(png/jpe?g/gif/svg等)图片地址');
    }
  });
};
```

## 通过 URL 下载文件

- window.open

  ```js
  window.open(url, '_blank');
  ```

- a 标签

  ```js
  const a = document.createElement('a'); //新建一个a标签
  a.href = url; // 文件链接
  a.download = name; // 下载名称
  a.click();
  a.remove();
  ```

- blob

  ```js
  // 可能会存在跨域问题
  fetch(url).then((res) =>
    res.blob().then((blob) => {
      const a = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name; // 下载名称
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }),
  );
  ```

## 将图片和文字合成一张图

- 下载依赖

  ```bash
  npm install html2canvas --save
  ```

- 在需要使用的页面引入

  ```js
  import html2canvas from 'html2canvas';
  ```

- 页面

  ```html
  <template>
    <div>
      <div class="download_img" ref="canvas">
        <img src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" alt="" />
        <p>城市风景图</p>
      </div>
      <el-button type="primary" @click="handleDownload('测试')">下载图片及文字</el-button>
    </div>
  </template>
  ```

- 通过 `ref` 构建下载

  ```js
  // 下载
  handleDownload(name) {
    window.pageYoffset = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // 先获取你要转换为img的dom节点
    // const node = document.getElementById("canvas"); // 传入的id名称
    const node = this.$refs.canvas
    // console.log("node", node);
    const width = node.offsetWidth; // dom宽
    const height = node.offsetHeight; // dom高
    const scale = 4; // 放大倍数 这个相当于清晰度 调大一点更清晰一点
    html2canvas(node, {
      width: width,
      heigth: height,
      backgroundColor: "#ffffff", // 背景颜色 为null是透明
      dpi: window.devicePixelRatio * 2, // 按屏幕像素比增加像素
      scale: scale,
      X: 0,
      Y: 0,
      scrollX: -3, // 如果左边多个白边 设置该偏移-3 或者更多
      scrollY: -10,
      useCORS: true, // 是否使用CORS从服务器加载图像 !!!
      allowTaint: true, // 是否允许跨域图像污染画布  !!!
    }).then((canvas) => {
      // console.log("canvas", canvas);
      const url = canvas.toDataURL(); // 这里上面不设值cors会报错
      const a = document.createElement("a"); // 创建一个a标签 用来下载
      a.download = name; // 设置下载的图片名称
      const event = new MouseEvent("click"); // 增加一个点击事件
      this.dataURL = url;
      a.href = url;// 此处的url为base64格式的图片资源
      a.dispatchEvent(event); // 触发a的单击事件 即可完成下载
    });
  }
  ```
