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
