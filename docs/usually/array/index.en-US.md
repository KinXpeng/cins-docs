---
title: Array Object
order: 2
nav:
  title: Usually
  order: 1
---

## Determines whether two objects are the same

```ts
/**
 * Determines whether two objects are the same
 * @param a One object to compare
 * @param b There's object two to compare
 * @returns Returns true if the same is true, reverse if the opposite is true
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

## Fuzzy search

```ts
/**
 * Fuzzy search
 * @param list The original array
 * @param keyWord Keywords for query
 * @param attribute The array needs to retrieve attributes
 * @return arr
 * */
const fuzzyQuery = (list: Array<any>, keyWord: string, attribute: string) => {
  const reg = new RegExp(keyWord);
  const arr = [];
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][attribute])) {
      arr.push(list[i]);
    }
  }
  return arr;
};
```

## Traverse the tree nodes

```ts
/**
 * Traverse the tree nodes
 * @param data Tree data
 * @param callback The callback function
 * @param childrenName Array of child nodes
 * */
const foreachTree = (
  data: Array<any>,
  callback: (params: any) => void,
  childrenName = 'children',
) => {
  for (let i = 0; i < data.length; i++) {
    callback(data[i]);
    if (data[i][childrenName] && data[i][childrenName].length > 0) {
      foreachTree(data[i][childrenName], callback, childrenName);
    }
  }
};
```

## Filter object attributes

```js
/**
 * @param { Object } object
 * @param { string } attrName
 * @return { Object } The filtered object
 * pickAttrs({a:1,b:2,c:3},'a','b') ==>>>> { a: 1, b: 2 }
 *
 */
const pickAttrs = (obj, ...props) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => props.includes(k)),
  );
};
```

## Determine data type

```js
/**
 * @param { any } value data
 * @param { string } type  string/number/null/object/array/undefined
 * @return { boolean }
 */
const isType = (value, type) => {
  type = type[0].toUpperCase() + type.substring(1).toLowerCase();
  return Object.prototype.toString.call(value) === `[object ${type}]`;
};
```

## Duplicate removal

### Array objects are de-weighted according to fields

```ts
/**
 * Array objects are de-weighted according to fields
 * @param arr The array to be removed
 * @param key Based on the name of the field to be deleted
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

### Array, array object deweight

```ts
/**
 * Array, array object deweight
 * @param arr Array contents
 * @param attr Key values to be de-duplicated (array objects）
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

### To reinvent the solution

```js
/**
 * @param { any } list Data to judge
 * @return  Returns the de-duplicated data
 */
const duplicateRemoval = (list) => {
  const newArr = [...list];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (equals(newArr[i], newArr[j])) {
        newArr.splice(j, 1);
        j--;
      }
    }
  }

  // Determine whether two values are equal
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

  // Determine data type
  function isType(value, type) {
    type = type[0].toUpperCase() + type.substring(1).toLowerCase();
    return Object.prototype.toString.call(value) === `[object ${type}]`;
  }
  return newArr;
};
```
