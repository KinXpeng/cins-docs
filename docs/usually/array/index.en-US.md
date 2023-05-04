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
 * @param {Array<any>} list The original array
 * @param {string} keyword Keywords for query
 * @param {string} attribute The array needs to retrieve attributes
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

## Traverse the tree nodes

```ts
/**
 * Traverse the tree nodes
 * @param {Array<any>} data Tree data
 * @param {Function} callback The callback function
 * @param {string} childrenName Array of child nodes
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

## Filter object attributes

```js
/**
 * @param { object } obj
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

## Filter out different items from two arrays

```ts
/**
 * @param {array} arr1
 * @param {array} arr2
 * @return {array}
 */
const diffArray = (arr1, arr2) => {
  return arr1.filter((x) => !arr2.includes(x));
};

// Example (filter out items with arr1 not in arr2)
const list1: Array<number> = [1, 2, 3, 4, 5];
const list2: Array<number> = [2, 3, 4, 5, 6, 7];

console.log(diffArray(list1, list2)); // =>>> [1]
```

## Split array

```ts
/**
 * Split an array into a two-dimensional array
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

## Group by a field

```ts
/**
 * Group by a field
 * @param {Array<any>} arr An array to be grouped
 * @param {string | Function} generateKey The field by which you group or the function that generates the field
 * @return {Object} Grouping completed array objects
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

// Grouping by age
console.log(groupBy(list, 'age'));
// Group by name
console.log(groupBy(list, 'name'));
// Group by age-name
console.log(groupBy(list, (item) => `${item.age}-${item.name}`));

/******* Optimized ts version *******/
// type GenerateKey<T> = string | ((item: T) => string);
// const groupBy = <T>(
//   arr: T[],
//   generateKey: GenerateKey<T>,
// ): Record<string, T[]> => {
//   const getKey =
//     typeof generateKey === 'string'
//       ? (item: T) => item[generateKey]
//       : generateKey;
//   return arr.reduce((result, item) => {
//     const key = getKey(item);
//     result[key] = result[key] ?? [];
//     result[key].push(item);
//     return result;
//   }, {} as Record<string, T[]>);
// };
```
