---
title: 更多
order: 2
nav:
  title: 常用
  order: 1
---

## 更多常用方法

- 复制文本到剪贴板
- 数字转中文大写
- 匹配文字变色
- 颜色转换
- 判断传入的函数是否标记了 async

## 复制文本到剪贴板

```ts
/**
 * @param { string } 文本内容
 */
const copyToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text);
};
```

## 数字转中文大写

### 方法一

```ts
/**
 * 数字转中文大写
 * @param val 当前值字符串
 * @param unit 默认：仟佰拾亿仟佰拾万仟佰拾元角分
 * @returns 返回处理后的字符串
 */
const numberToUppercase = (
  val: any,
  unit = '仟佰拾亿仟佰拾万仟佰拾元角分',
  v = '',
): string => {
  // 当前内容字符串添加 2个0，为什么??
  val += '00';
  // 返回某个指定的字符串值在字符串中首次出现的位置，没有出现，则该方法返回 -1
  let lookup = val.indexOf('.');
  // substring：不包含结束下标内容，substr：包含结束下标内容
  if (lookup >= 0) val = val.substring(0, lookup) + val.substr(lookup + 1, 2);
  // 根据内容 val 的长度，截取返回对应大写
  unit = unit.substr(unit.length - val.length);
  // 循环截取拼接大写
  for (let i = 0; i < val.length; i++) {
    v += '零壹贰叁肆伍陆柒捌玖'.substr(val.substr(i, 1), 1) + unit.substr(i, 1);
  }
  // 正则处理
  v = v
    .replace(/零角零分$/, '整')
    .replace(/零[仟佰拾]/g, '零')
    .replace(/零{2,}/g, '零')
    .replace(/零([亿|万])/g, '$1')
    .replace(/零+元/, '元')
    .replace(/亿零{0,3}万/, '亿')
    .replace(/^元/, '零元');
  // 返回结果
  return v;
};
```

### 方法二

```ts
/**
 * 数字金额转中文金额
 * @param {number} num 需要转换的数字
 * @return {string} 返回处理后的字符串
 */
const toChineseNumber = (num: number): string => {
  if (isNaN(num)) {
    return '请输入有效的数字！';
  }
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ];
  const head = num < 0 ? '负' : '';
  num = Math.abs(num);
  let s = '';
  for (let i = 0; i < fraction.length; i++) {
    s += (
      digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i]
    ).replace(/零./, '');
  }
  s = s || '整';
  num = Math.floor(num);
  for (
    let i = 0;
    i < unit[0].length && num > 0;
    i++, num = Math.floor(num / 10)
  ) {
    let p = '';
    for (
      let j = 0;
      j < unit[1].length && num > 0;
      j++, num = Math.floor(num / 10)
    ) {
      p = digit[num % 10] + unit[1][j] + p;
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零');
};

// 示例用法
console.log(toChineseNumber(123456789.12)); // 输出 "壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元壹角贰分"
```

## 匹配文字变色

```ts
/**
 * 匹配文字变色（搜索时）
 * @param val 当前值字符串
 * @param text 要处理的字符串值
 * @param color 搜索到时字体高亮颜色
 * @returns 返回处理后的字符串
 */
const textColor = (val: string, text = '', color = 'red'): string => {
  // 返回内容，添加颜色
  let v = text.replace(
    new RegExp(val, 'gi'),
    `<span style='color: ${color}'>${val}</span>`,
  );
  // 返回结果
  return v;
};
```

## 颜色转换

```ts
/**
 * 颜色转换函数
 * @method hexToRgb hex 颜色转 rgb 颜色
 * @method rgbToHex rgb 颜色转 Hex 颜色
 * @method getDarkColor 加深颜色值
 * @method getLightColor 变浅颜色值
 */
const useChangeColor = () => {
  // str 颜色值字符串
  const hexToRgb = (str: string): any => {
    let hexs: any = '';
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(str)) {
      console.log('输入错误的hex');
      return '';
    }
    str = str.replace('#', '');
    hexs = str.match(/../g);
    for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16);
    return hexs;
  };
  // r 代表红色 | g 代表绿色 | b 代表蓝色
  const rgbToHex = (r: any, g: any, b: any): string => {
    let reg = /^\d{1,3}$/;
    if (!reg.test(r) || !reg.test(g) || !reg.test(b)) {
      console.log('输入错误的rgb颜色值');
      return '';
    }
    let hexs = [r.toString(16), g.toString(16), b.toString(16)];
    for (let i = 0; i < 3; i++)
      if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`;
    return `#${hexs.join('')}`;
  };
  // color 颜色值字符串 | level 变浅的程度，限0-1之间
  const getDarkColor = (color: string, level: number): string => {
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(color)) {
      console.log('输入错误的hex颜色值');
      return '';
    }
    let rgb = useChangeColor().hexToRgb(color);
    for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - level));
    return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
  };
  // color 颜色值字符串 | level 加深的程度，限0-1之间
  const getLightColor = (color: string, level: number): string => {
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(color)) {
      console.log('输入错误的hex颜色值');
      return '';
    }
    let rgb = useChangeColor().hexToRgb(color);
    for (let i = 0; i < 3; i++)
      rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
    return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
  };
  return {
    hexToRgb,
    rgbToHex,
    getDarkColor,
    getLightColor,
  };
};
```

## 判断传入的函数是否标记了 async

```ts
/**
 * 判断传入的函数是否标记了async
 * @param { Function } func 传入的函数
 * @return { Boolean }
 */
const isAsyncFunction = (func) => {
  return func[Symbol.toStringTag] === 'AsyncFunction';
};
```
