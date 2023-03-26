---
title: 日期时间
order: 3
nav:
  title: 常用
  order: 1
---

## 日期时间格式化

```ts
/**
 * 时间格式转化
 * @param {Date} date
 * @param {string} format
 * @return {string}
 *  YYYY：四位数年份
    MM：两位数月份（01-12）
    DD：两位数日期（01-31）
    HH：两位数小时（00-23）
    mm：两位数分钟（00-59）
    ss：两位数秒钟（00-59）
 */
const formatDateTime = (date: Date, format: string): string => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hour)
    .replace('mm', minute)
    .replace('ss', second);
};

const formatted = formatDateTime(new Date(), 'YYYY-MM-DD HH:mm:ss');
console.log(formatted); // 输出 "2023-03-26 12:34:56"
```

## 根据日期返回星期几

```ts
/**
 * 根据日期返回星期几（不传日期返回当天的星期）
 * @param {String} date
 * @returns {String} week
 * 调用示例
 * dateToWeek('2022-09-20')
   // 二
   dateToWeek()
   // 三
 */
const dateToWeek = (date: string): string => {
  let weeks = ['日', '一', '二', '三', '四', '五', '六'];
  let day = (date ? new Date(date) : new Date()).getDay();
  return weeks[day];
};
```

## n 天前的日期

```ts
/**
 * @param {number} n  天数，选填，默认为0，days为0时返回当前日期，days为1时返回一天前日期
 * @return {string}  几天前的日期
 * */
const getNDaysAgo = (n: number = 0): string => {
  if (isNaN(n) || n < 0) {
    throw new Error('Invalid number of days');
  }
  const pastDate = new Date(Date.now() - n * 24 * 60 * 60 * 1000);
  const year = pastDate.getFullYear();
  const month = (pastDate.getMonth() + 1).toString().padStart(2, '0');
  const day = pastDate.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};
```

## n 月前的今天

```ts
/**
 * @param {number} m 月数 负数时为前m个月的当前日期
 * @return {string} 几月前的日期
 * */
const dateOfMonths = (m: number = 0): string => {
  const date = new Date();
  date.setMonth(date.getMonth() + m);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};
```

## 时分秒转换为时间戳

```ts
/**
 * @param {string|null} time 时分秒 // 20:00:01 ->> xxxxxx
 * @return {number|undefined} 时间戳
 * */
const timeToSec = (time: string | null): number | undefined => {
  if (!time) {
    return undefined;
  }
  const [hourStr, minStr, secStr] = time.split(':');
  const hour = parseInt(hourStr, 10);
  const min = parseInt(minStr, 10);
  const sec = secStr ? parseInt(secStr, 10) : 0;
  return hour * 3600 + min * 60 + sec;
};
```

## 是否为工作日

```ts
/**
 * 判断某天是否是工作日
 * @param date 日期 '2022-09-01'
 * @return boolean
 * */
export const isWeekday = (date: string): boolean => {
  return new Date(date).getDay() % 6 !== 0;
};
```

## 某年某月的天数

```ts
/**
 * 传入年份和月份 获取该年对应月份的天数
 * @param {number} year
 * @param {number} month
 * @return {number} days
 **/
const getMonthDays = (year: number, month: number): number => {
  const date = new Date(year, month, 0); //当天数为0 js自动处理为上一月的最后一天
  return date.getDate();
};
```

## 某年某月的每一天

```ts
/**
 * 获取指定年月的每一天
 * @param {number} year
 * @param {number} month
 * @return {Array<Item>}
 **/
interface Item {
  yeardate: string;
  date: string;
}

const getDateList = (year: number, month: number): Array<Item> => {
  const lastDateOfMonth = new Date(year, month, 0).getDate();
  const formattedMonth = month.toString().padStart(2, '0');
  const result: Array<Item> = [];
  for (let i = 1; i <= lastDateOfMonth; i++) {
    const formattedDate = i.toString().padStart(2, '0');
    const yeardate = `${year}-${formattedMonth}-${formattedDate}`;
    const date = `${formattedMonth}-${formattedDate}`;
    result.push({ yeardate, date });
  }
  return result;
};
```

## 计算开始时间与时长的和

```ts
/**
 * 获取单个指定块的结束时间
 * @param {string} stime 15:40
 * @param {number} duration 22
 * @return {string} =>>>  16:02
 */
const getEndTime = (stime: string, duration: number): string => {
  let [hour, minute] = stime.split(':');
  let _hour = Number(hour);
  let _minute = Number(minute) + duration;
  if (_minute >= 60) {
    _hour += Math.floor(_minute / 60);
    _minute = _minute % 60;
  }
  const _hourStr = _hour < 10 ? '0' + _hour : _hour.toString();
  const _minuteStr = _minute < 10 ? '0' + _minute : _minute.toString();
  return _hourStr + ':' + _minuteStr;
};
```

## 获取两个时间之间的时长

```ts
/**
 * 获取两个时间之间的时长
 * @param {string} time1 15:40
 * @param {string} time2 17:33
 * @param {number} num 1 时段的标准时长，默认为一小时
 * @param {number} type 'start' / 'end' // start算出来是正数，反之为负数
 * @return {number} =>>>  1.8833333333333333 // 计算两个时间的差为num的倍数
 */
const timeToInteger = (
  time1: string,
  time2: string,
  num: number,
  type: 'start' | 'end',
): number => {
  const [stime1, etime1] = time1.split(':').map(Number);
  const [stime2, etime2] = time2.split(':').map(Number);
  let h = 0,
    m = 0;
  if (type == 'start') {
    h = stime1 - stime2;
    m = etime1 - etime2;
  } else if (type == 'end') {
    h = stime2 - stime1;
    m = etime2 - etime1;
  }
  let decimals = m / (60 * num);
  return h / num + decimals;
};
```

## 获取某个日期位于当年的第几天

```js
/**
 * 获取某个日期位于当年的第几天
 * @param {string} date '2022-12-27'
 * @return {number} =>>>  361
 */
const dateOfYear = (date) => {
  date = new Date(date);
  const _days = Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24,
  );
  return _days;
};
```

## 计算两个日期之间的天数

```js
/**
 * 计算两个日期之间的天数
 * @param {string} date1 '2022-12-27'
 * @param {string} date2 '2022-12-28'
 * @return {number}  =>>>  1
 */
const daysDistance = (date1, date2) => {
  date1 = Date.parse(date1);
  date2 = Date.parse(date2);
  const _ms = date2 - date1;
  const _days = Math.floor(_ms / (24 * 3600 * 1000));
  return _days;
};
```

## 时间问候语

```ts
/**
 * 时间问候语
 * @param param 当前时间，string格式
 * @description param 调用 `formatAxis('2022-12-12 09:12:11')` 输出 `上午好`
 * @returns 返回拼接后的时间字符串
 */
const formatAxis = (param: string): string => {
  let hour: number = new Date(param).getHours();
  if (hour < 6) return '凌晨好';
  else if (hour < 9) return '早上好';
  else if (hour < 12) return '上午好';
  else if (hour < 14) return '中午好';
  else if (hour < 17) return '下午好';
  else if (hour < 19) return '傍晚好';
  else if (hour < 22) return '晚上好';
  else return '夜里好';
};
```
