---
nav:
  title: 常用
  path: /usually
---

## 车牌号

### 一般车牌

```ts
/**
 * 校验是否为车牌号（不含挂车）
 * 暂不支持特种车辆校验
 * @param str
 * @returns
 */
const isVehicleNumber = (str: string): boolean => {
  // 传统燃油
  // 新能源

  const pattern =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-Z]{1}(([A-HJK]{1}[A-HJ-NP-Z0-9]{1}[0-9]{4})|([0-9]{5}[A-HJK]{1})|(?=(.*[A-HJ-NP-Z]){0,2})(?=(.*[0-9]){3,5})[A-HJ-NP-Z0-9]{5})$/;
  return pattern.test(str);
};
```

### 挂车

```ts
/**
 * 校验是否为挂车牌号
 * @param str
 * @returns
 */
const isTrailerNumber = (str: string): boolean => {
  const pattern =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-Z]{1}[A-Z0-9]{4}[挂]{1}$/;
  return pattern.test(str);
};
```

## 手机号

```ts
/**
 *	大陆手机号码11位数，匹配格式：前三位固定格式+后8位任意数
 *	此方法中前三位格式有：
 * 13+任意数
 * 145,147,149
 * 15+除4的任意数(不要写^4，这样的话字母也会被认为是正确的)
 * 166
 * 17+3,5,6,7,8
 * 18+任意数
 * 198,199
 */
const isMobilePhone = (str: string): boolean => {
  const pattern =
    /^((13[0-9])|(14[0,1,4-9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))[0-9]{8}$/;
  return pattern.test(str);
};
```

## 手机号或者座机号

```ts
/**
 *	大陆手机号码11位数
 *  座机: 区号3-4位 号码: 5-8位
 */
const isMobileOrLandline = (str: string): boolean => {
  const pattern = /^((0\d{2,3}\d{5,8})|(1[3456789]\d{9}))$/;
  return pattern.test(str);
};
```

## 证件号

```ts
/**
 * 校验证件号
 * @returns
 */
const isIDNumber = (str: string): boolean => {
  //15位数身份证正则表达式
  const arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
  //18位数身份证正则表达式
  const arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[X])$/;

  // 普通电子护照颁发给因定居、探亲、学习、就业、旅行、从事商务活动等非公务原因出国的中国公民，护照号码格式市：E+8 位数字编号
  const arg3 = /^E\d{8}$/;

  // 公务护照：SE+7 位数字编码
  const arg4 = /^SE\d{7}$/;

  // 外交护照：DE+7 位数字编码
  const arg5 = /^DE\d{7}$/;

  // 公务普通护照：PE+7 位数字编码
  const arg6 = /^PE\d{7}$/;

  // 澳门特别行政区护照 发给有澳门特区永久性居民身份证的中国公民，护照号码格式是：MA+7 位编号
  const arg7 = /^MA[A-Z0-9]{7}$/;

  // 香港特别行政区护照 发给有香港永久性居民身份证，并享有香港特别行政区居留权的中国公民，护照号格式是：K+8 位编号
  const arg8 = /^K[A-Z0-9]{7}$/;

  if (
    arg1.test(str) ||
    arg2.test(str) ||
    arg3.test(str) ||
    arg4.test(str) ||
    arg5.test(str) ||
    arg6.test(str) ||
    arg7.test(str) ||
    arg8.test(str)
  ) {
    return true;
  } else {
    return false;
  }
};
```

## 身份证

```ts
/**
 * 校验身份证件号
 * @returns
 */
const isIdentityNumber = (str: string): boolean => {
  //18位数身份证正则表达式
  const pattern = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[X])$/;
  return pattern.test(str);
};
```

## 邮箱格式

```ts
/**
 * 校验邮箱格式是否正确
 * @param str
 * @returns
 */
const isEmail = (str: string): boolean => {
  const pattern = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$/;
  return pattern.test(str);
};
```

## 帐号是否合法

```ts
/**
 * 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
 * @param str
 * @returns
 */
const isValidAccount = (str: string): boolean => {
  const pattern = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
  return pattern.test(str);
};
```

## 强密码

```ts
/**
 * 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-16之间)：
 * @param str
 * @returns
 */
const isStrongPassword(str: string): boolean => {
  const pattern = /^(?=.d)(?=.[a-z])(?=.*[A-Z]).{8,16}$/;
  return pattern.test(str);
}
```

## 十六进制颜色

```ts
/**
 * 校验是否为十六进制颜色
 * @param str
 * @returns
 */
const isHexColor = (str: string): boolean => {
  const pattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return pattern.test(str);
};
```

## 整数

```ts
/**
 * 校验是否为整数
 * @param str
 * @returns
 */
const isInteger = (str: string): boolean => {
  const pattern = /^-?\\d+$/;
  return pattern.test(str);
};
```

## 非负整数

```ts
/**
 * 校验是否为非负整数(正整数+0)
 * @param str
 * @returns
 */
const isNonNegativeInteger = (str: string): boolean => {
  const pattern = /^\d+$/;
  return pattern.test(str);
};
```

## 正整数

```ts
/**
 * 校验是否为正整数
 * @param str
 * @returns
 */
const isPositiveInteger = (str: string): boolean => {
  const pattern = /^[0-9]*[1-9][0-9]*$/;
  return pattern.test(str);
};
```

## 正浮点数

```ts
/**
 * 校验是否为正浮点数
 * @param str
 * @returns
 */
const isFPNumber = (str: string): boolean => {
  const pattern =
    /^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
  return pattern.test(str);
};
```

## 非负浮点数

```ts
/**
 * 校验是否为非负浮点数(正浮点数+0)
 * @param str
 * @returns
 */
const isNonNegFloatNumber = (str: string): boolean => {
  const pattern = /^(\+)?\d+(\.\d+)?$/;
  return pattern.test(str);
};
```
