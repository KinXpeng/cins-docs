---
nav:
  title: Date & Time
  path: /usually
---

## Date and time formatting（JS）

```js
/**
 * Date and time formatting
 * @param {Number} day
 * @param {String} fmt
 * @param {String} time
 * @returns
 * Invoke the sample
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
  // Gets the current time in milliseconds
  let now = (time ? new Date(time) : new Date()).getTime();
  // Obtain n days before and after
  let recent = new Date(now + day * 24 * 60 * 60 * 1000);

  // key:Regular matching expression，value:The corresponding time and date
  let fmtObj = {
    'M+': recent.getMonth() + 1, // month
    'd+': recent.getDate(), // day
    'h+': recent.getHours(), // hour
    'm+': recent.getMinutes(), // minute
    's+': recent.getSeconds(), // second
  };
  // Gets the matching year replacement
  if (/(y+)/.test(fmt)) {
    //RegExp.$1 The matching result is replaced by the corresponding length. 
    fmt = fmt.replace(RegExp.$1, (recent.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let key in fmtObj) {
    if (new RegExp(`(${key})`).test(fmt)) {
      //Date, hour, minute, and second replacement, determine whether fmt needs to fill 0.
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

## Return the day of the week according to the date

```ts
/**
 * Day of the week by date (week of the day of return without date)
 * @param {String} date
 * @param {String} week
 * @returns
 * Invoke the sample
 * dateToWeek('2022-09-20')
   // Tuesday
   dateToWeek()
   // Wednesday
 */
const dateToWeek = (date: string): string => {
  let weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = (date ? new Date(date) : new Date()).getDay();
  return weeks[day];
};
```

## n days before the date

```ts
/**
 * @param days The default value is 0. If days is 0, the current date is returned. If days is 1, the previous date is returned
 * @return date A few days before the date
 * */
const dateOfDays = (days?: number): string => {
  if (!days) {
    days = 0;
  }
  let date: Date = new Date();
  let currentdate;
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

## n months ago today

```ts
/**
 * @param m A negative number of months is the current date of the previous m months
 * @return date Date a few months ago
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

## Minutes and seconds are converted to time stamps（JS）

```js
/**
 * @param time Hour Minute Second // 20:00:01 ->> xxxxxx
 * @return The time stamp
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

## Is it a working day?

```ts
/**
 * Is it a working day?
 * @param date date '2022-09-01'
 * @return boolean
 * */
export const isWeekday = (date: string): boolean => {
  return new Date(date).getDay() % 6 !== 0;
};
```
