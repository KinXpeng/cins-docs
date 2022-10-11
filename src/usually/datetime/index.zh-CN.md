---
nav:
  title: 日期时间
  path: /usually
---

## 日期时间格式化（JS）

```js
/**
 * JS时间格式转化
 * @param {Number} day
 * @param {String} fmt
 * @param {String} time
 * @returns
 * 调用示例
 * formatTime(1,'yyyy-MM-dd hh:mm:ss','2022-01-03 00:00:00')
   // 2022-01-04 00:00:00
   formatTime(0,'yyyy-M-d','2021-04-06')
   // 2021-04-06
   formatTime(-1,'yyyy-MM-dd hh:mm:ss','2021-04-06 13:52:05')
   // 2021-04-05 13:52:05
   formatTime(2,'yyyy-MM-dd','2021-04-06 13:52:05')
   // 2021-04-08
 */
const formatTime = (day, fmt, time) => {
  //获取当前时间的毫秒值
  let now = (time ? new Date(time) : new Date()).getTime();
  // 获取前后n天时间
  let recent = new Date(now + day * 24 * 60 * 60 * 1000);

  // key：正则匹配表达式，value：对应的时间、日期
  let fmtObj = {
    'M+': recent.getMonth() + 1, //月份
    'd+': recent.getDate(), //日
    'h+': recent.getHours(), //时
    'm+': recent.getMinutes(), //分
    's+': recent.getSeconds(), //秒
  };
  // 获取匹配年份替换
  if (/(y+)/.test(fmt)) {
    //RegExp.$1 匹配结果，替换成对应的长度。如：yyyy就替换成整个年份2021，yy就替换成后两位21，以此类推
    fmt = fmt.replace(RegExp.$1, (recent.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let key in fmtObj) {
    if (new RegExp(`(${key})`).test(fmt)) {
      //日期，时、分、秒替换，判断fmt是否需要补0，如：yyyy-M-d h:m:s 不补0,yyyy-MM-dd hh:mm:ss 则自动补0
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? fmtObj[key]
          : ('00' + fmtObj[key]).substr(('' + fmtObj[key]).length),
      );
    }
  }
  return fmt;
};
```

## 根据日期返回星期几

```ts
/**
 * 根据日期返回星期几（不传日期返回当天的星期）
 * @param {String} date
 * @param {String} week
 * @returns
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
 * @param days 天数，选填，默认为0，days为0时返回当前日期，days为1时返回一天前日期
 * @return date 几天前的日期
 * */
const dateOfDays = (days?: number): string => {
  if (!days) {
    days = 0;
  }
  let date: Date = new Date();
  let currentdate;
  // n天前日期
  let nowTime: number = date.getTime();
  let endTime: number = nowTime - 24 * 60 * 60 * 1000 * days;
  let endDate: Date = new Date(endTime);
  let Month: string = String(endDate.getMonth() + 1);
  Month = Number(Month) >= 10 ? Month : '0' + Month;
  let Day: string = String(endDate.getDate());
  Day = Number(Day) >= 10 ? Day : '0' + Day;
  currentdate = endDate.getFullYear() + '-' + Month + '-' + Day;
  return currentdate;
};
```

## n 月前的今天

```ts
/**
 * @param m 月数 负数时为前m个月的当前日期
 * @return date 几月前的日期
 * */
const dateOfMonths = (m?: number): string => {
  const date = new Date();
  date.setMonth(date.getMonth() + Number(m));
  let year: number = date.getFullYear();
  let month: number = date.getMonth() + 1;
  month = (month < 10 ? '0' + month : month) as number;
  let day: number = date.getDate();
  day = (day < 10 ? '0' + day : day) as number;
  return year + '-' + month + '-' + day;
};
```

## 时分秒转换为时间戳（JS）

```js
/**
 * @param time 时分秒 // 20:00:01 ->> xxxxxx
 * @return 时间戳
 * */
const timeToSec = (time) => {
  if (time !== null) {
    let s = '';
    let hour = time.split(':')[0];
    let min = time.split(':')[1];
    let sec = time.split(':')[2] ? time.split(':')[2] : 0;
    s = Number(hour * 3600) + Number(min * 60) + Number(sec);
    return s;
  }
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
