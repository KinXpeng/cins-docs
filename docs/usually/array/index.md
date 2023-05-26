---
title: 数组对象
order: 2
nav:
  title: 常用
  order: 1
---

## 判断两个对象是否相同

```ts
/**
 * 判断两个对象是否相同
 * @param a 要比较的对象一
 * @param b 要比较的对象二
 * @returns 相同返回 true，反之则反
 */
const isObjectValueEqual = <T>(a: T, b: T): boolean => {
  if (!a || !b) return false;
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);
  if (aProps.length != bProps.length) return false;
  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];
    let propA = a[propName as keyof typeof a];
    let propB = b[propName as keyof typeof b];
    if (!b.hasOwnProperty(propName)) return false;
    if (propA instanceof Object) {
      if (!isObjectValueEqual(propA, propB)) return false;
    } else if (propA !== propB) {
      return false;
    }
  }
  return true;
};
```

## 模糊搜索

```ts
/**
 * 模糊搜索
 * @param {Array<any>} list 原数组
 * @param {string} keyword 查询的关键词
 * @param {string} attribute 数组需要检索属性
 * @return arr
 * */
const fuzzyQuery = <T>(list: T[], keyword: string, attribute: keyof T): T[] => {
  const reg = new RegExp(keyword);
  const arr: T[] = [];
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][attribute])) {
      arr.push(list[i]);
    }
  }
  return arr;
};
```

## 遍历树节点

```ts
/**
 * 遍历树节点
 * @param {Array<any>} data 树数据
 * @param {Function} callback 回调函数
 * @param {string} childrenName 子节点数组
 * */
const foreachTree = (
  data: Array<any>,
  callback: (params: any) => void,
  childrenName = 'children',
) => {
  data.forEach((item) => {
    callback(item);
    if (item[childrenName]?.length) {
      foreachTree(item[childrenName], callback, childrenName);
    }
  });
};
```

## 筛选对象属性

```js
/**
 * @param {object} 对象
 * @param {string} 属性名（多个属性以逗号隔开）
 * @return {Object} 筛选后的对象
 * pickAttrs({a:1,b:2,c:3},'a','b') ==>>>> {a: 1, b: 2}
 */
const pickAttrs = (obj, ...props) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => props.includes(k)),
  );
};
```

## 去重

### 数组对象根据字段去重

```ts
/**
 * 数组对象根据字段去重
 * @param arr 要去重的数组
 * @param key 根据去重的字段名
 * @return arr
 * */
const uniqueArrayObject = (arr: Array<any> = [], key: string) => {
  if (arr.length === 0) return;
  let list: Array<any> = [];
  const map: any = {};
  arr.forEach((item) => {
    if (!map[item[key]]) {
      map[item[key]] = item;
    }
  });
  list = Object.values(map);
  return list;
};
```

### 数组、数组对象去重

```ts
/**
 * 数组、数组对象去重
 * @param arr 数组内容
 * @param attr 需要去重的键值（数组对象）
 * @returns
 */
declare type EmptyArrayType<T = any> = T[];
declare type EmptyObjectType<T = any> = {
  [key: string]: T;
};
const removeDuplicate = (arr: EmptyArrayType, attr?: any) => {
  if (!Object.keys(arr).length) {
    return arr;
  } else {
    if (attr) {
      const obj: EmptyObjectType = {};
      return arr.reduce((cur: EmptyArrayType[], item: EmptyArrayType) => {
        obj[item[attr]]
          ? ''
          : (obj[item[attr]] = true && item[attr] && cur.push(item));
        return cur;
      }, []);
    } else {
      return [...new Set(arr)];
    }
  }
};
```

### 去重全新解决方案

```js
/**
 * @param {any} list 需要判断的数据
 * @return  返回去重后的数据
 */
const duplicateRemoval = (list) => {
  const newArr = [...list];
  for (let i = 0; i < newArr.length; i++) {
    // 去掉i+1开始后续的值
    for (let j = i + 1; j < newArr.length; j++) {
      if (equals(newArr[i], newArr[j])) {
        // 去掉该值
        newArr.splice(j, 1);
        j--;
      }
    }
  }

  // 判断两个值是否相等
  function equals(val1, val2) {
    if (isType(val1, 'object') && isType(val2, 'object')) {
      const keys1 = Object.keys(val1),
        keys2 = Object.keys(val2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (const k of keys1) {
        if (!keys2.includes(k)) {
          return false;
        }
        if (!equals(val1[k], val2[k])) {
          return false;
        }
      }
      return true;
    } else {
      return val1 === val2;
    }
  }

  // 判断数据类型
  function isType(value, type) {
    type = type[0].toUpperCase() + type.substring(1).toLowerCase();
    return Object.prototype.toString.call(value) === `[object ${type}]`;
  }
  return newArr;
};
```

## 筛选出两个数组的不同项

```ts
/**
 * @param {array} arr1
 * @param {array} arr2
 * @return {array}
 */
const diffArray = (arr1, arr2) => {
  return arr1.filter((x) => !arr2.includes(x));
};

// 例子 (筛选出arr1不在arr2中的项)
const list1: Array<number> = [1, 2, 3, 4, 5];
const list2: Array<number> = [2, 3, 4, 5, 6, 7];

console.log(diffArray(list1, list2)); // =>>> [1]
```

## 切分数组

```ts
/**
 * 将一个数组拆分成一个二维数组
 * @param {array} arrayList
 * @param {number} n
 * @return {array}
 */
const sliceArrayByNum = <T>(arrayList: T[], n: number = 10): T[][] => {
  return arrayList.reduce((acc: T[][], curr: T, i: number) => {
    if (i % n === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, []);
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sliceArrayByNum(list), 5); // => [[1,2,3,4,5],[6,7,8,9,10]]
```

## 根据某个字段进行分组

```ts
/**
 * 根据某个字段进行分组
 * @param {Array<any>} arr 需要分组的数组
 * @param {string | Function} generateKey 分组依据的字段或者生成字段的函数
 * @return {Object} 分组完成的数组对象
 *
 */
const groupBy = (arr: Array<any>, generateKey: string | Function) => {
  if (typeof generateKey === 'string') {
    const propName: string = generateKey;
    generateKey = (item: any) => item[propName];
  }
  const result: any = {};
  for (const item of arr) {
    const key = generateKey(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
};

// 按年龄分组
console.log(groupBy(list, 'age'));
// 按姓名分组
console.log(groupBy(list, 'name'));
// 按年龄-姓名分组
console.log(groupBy(list, (item) => `${item.age}-${item.name}`));
```

## 生成数组

```ts
/**
 * 当你需要要生成一个 0-99 的数组
 * @param {number} n
 * @return {array}
 */
// 方案 1
const createArr = (n) => Array.from(new Array(n), (v, i) => i);
const arr = createArr(100); // 0 - 99 数组

// 方案 2
const createArr = (n) => new Array(n).fill(0).map((v, i) => i);
createArr(100); // 0 - 99数组
```

## 打乱数组

```ts
/**
 * 当你有一个数组，你需要打乱这个数组的排序
 * @param {array} list
 * @return {array}
 */
const randomSort = (list) => list.sort(() => Math.random() - 0.5);
randomSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); // 随机排列结果
```

## 多数组取交集

```ts
/**
 * 当你有一个数组，你需要打乱这个数组的排序
 * @param {array} list
 * @return {array}
 */
const intersection = (a, ...arr) =>
  [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));

intersection([1, 2, 3, 4], [2, 3, 4, 7, 8], [1, 3, 4, 9]);
// [3, 4]
```

## 查找最大值索引

```ts
/**
 * 当你需要找到一个数组中的最大值的索引
 * @param {array} arr
 * @return {number}
 */
const indexOfMax = (arr) =>
  arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
indexOfMax([1, 3, 9, 7, 5]); // 2
```

## 查找最小值索引

```ts
/**
 * 当你需要找到一个数组中的最小值的索引
 * @param {array} arr
 * @return {number}
 */
const indexOfMin = (arr) =>
  arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);
indexOfMin([2, 5, 3, 4, 1, 0, 9]); // 5
```

## 找到最接近的数值

```ts
/**
 * 当你需要在一个数组中找到一个最接近的值
 * @param {array} arr
 * @param {number} n
 * @return {number}
 */
const closest = (arr, n) =>
  arr.reduce((prev, curr) =>
    Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev,
  );
closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33
```

## 压缩多个数组

```ts
/**
 * 当你需要将多个数组压缩成一个数组
 * @param {array} arr
 * @return {array}
 */
const zip = (...arr) =>
  Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_, i) =>
    arr.map((a) => a[i]),
  );
zip([1, 2, 3, 4], ['a', 'b', 'c', 'd'], ['A', 'B', 'C', 'D']);
// [[1, 'a', 'A'], [2, 'b', 'B'], [3, 'c', 'C'], [4, 'd', 'D']]
```

## 矩阵交换行和列

```ts
/**
 * 当你需要将一个矩阵的行和列进行互相交换
 * @param {array} arr
 * @return {array}
 */
const transpose = (matrix) =>
  matrix[0].map((col, i) => matrix.map((row) => row[i]));
transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
// ]
```

## 删除无效属性

```ts
/**
 * 当你需要删除一个对象中的属性值为 null 或 undefined 的所有属性
 * @param {object} obj
 * @return {object}
 */
const removeNullUndefined = (obj) =>
  Object.entries(obj).reduce(
    (a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
    {},
  );

removeNullUndefined({ name: '', age: undefined, sex: null }); // { name: '' }
```

## 反转对象键值

```ts
/**
 * 当你需要将对象的键值对交换
 * @param {object} obj
 * @return {object}
 */
const invert = (obj) =>
  Object.keys(obj).reduce((res, k) => Object.assign(res, { [obj[k]]: k }), {});
invert({ name: 'jack' }); // {jack: 'name'}
```

## 字符串转对象

```ts
/**
 * 当你需要将一串字符串比如'{name: "jack"}'转换成对象时，直接使用 JSON.parse 将会报错。
 * @param {string} str
 * @return {object}
 */
const strParse = (str) =>
  JSON.parse(
    str.replace(/(\w+)\s*:/g, (_, p1) => `"${p1}":`).replace(/\'/g, '"'),
  );

strParse('{name: "jack"}');
```

## 比较两个对象

```ts
/**
 * 当你需要比较两个对象，js 的等于只能判断对象的地址是否相同，当地址不相同的时候无法判断两个对象的键值对是否一致。
 * @param {object}
 * @return {boolean}
 */
const isEqual = (...objects) =>
  objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));
isEqual({ name: 'jack' }, { name: 'jack' }); // true
isEqual({ name: 'jack' }, { name: 'jack1' }, { name: 'jack' }); // false
```
