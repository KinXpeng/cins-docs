---
title: Date & Time
order: 3
nav:
  title: Usually
  order: 1
---

## Date and time formatting

```ts
/**
 * Time format conversion
 * @param {Date} date
 * @param {string} format
 * @return {string}
 *  YYYY：Four-digit year
    MM：Double digit month（01-12）
    DD：Two-digit date（01-31）
    HH：Two-digit hour（00-23）
    mm：Two-digit minutes（00-59）
    ss：Two-digit second（00-59）
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
console.log(formatted); // "2023-03-26 12:34:56"
```

## Return the day of the week according to the date

```ts
/**
 * Day of the week by date (week of the day of return without date)
 * @param {String} date
 * @return {String} week
 * Invoke the sample
 * dateToWeek('2022-09-20')
   // Tuesday
   dateToWeek()
   // Wednesday
 */
const dateToWeek = (date: string): string => {
  let weeks = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let day = (date ? new Date(date) : new Date()).getDay();
  return weeks[day];
};
```

## n days before the date

```ts
/**
 * @param {number} n The default value is 0. If days is 0, the current date is returned. If days is 1, the previous date is returned
 * @return {string}  A few days before the date
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

## n months ago today

```ts
/**
 * @param {number} m A negative number of months is the current date of the previous m months
 * @return {string} Date a few months ago
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

## Minutes and seconds are converted to time stamps（JS）

```js
/**
 * @param {string|null} time Hour Minute Second // 20:00:01 ->> xxxxxx
 * @return {number|undefined} The time stamp
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

## The number of days in a month or year

```ts
/**
 * Incoming Year and Month Gets the number of days in the month of the year
 * @param {number} year
 * @param {number} month
 * @return {number} days
 **/
const getMonthDays = (year: number, month: number): number => {
  const date = new Date(year, month, 0); // If the number of the current day is 0, js automatically processes it as the last day of the previous month
  return date.getDate();
};
```

## Every day of the year and month

```ts
/**
 * Get each day of the specified year
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

## Calculate the sum of start time and time length

```ts
/**
 * The endtime of single appoint block
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

## Gets the duration between two times

```ts
/**
 * Gets the duration between two times
 * @param {string} time1 15:40
 * @param {string} time2 17:33
 * @param {number} num 1 Period Standard duration. The default value is one hour
 * @param {number} type 'start' / 'end' // start => It's a positive number,and vice versa is negative.
 * @return {number} =>>>  1.8833333333333333 // Calculate the difference between the two times as a multiple of num
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

## Gets the day of the year in which a date is located

```js
/**
 * Gets the day of the year in which a date is located
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

## Count the number of days between two dates

```js
/**
 * Count the number of days between two dates
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

## Time greeting

```ts
/**
 * Time greeting
 * @param param current time,string
 * @description param  `formatAxis('2022-12-12 09:12:11')` Output 'Good morning'
 * @return Returns the concatenated time string
 */
const formatAxis = (param: string): string => {
  let hour: number = new Date(param).getHours();
  if (hour < 6) return 'Good early morning';
  else if (hour < 9) return 'Good morning';
  else if (hour < 12) return 'Good antemeridiem';
  else if (hour < 14) return 'Good nooning';
  else if (hour < 17) return 'Good afternoon';
  else if (hour < 19) return 'Good evenfall';
  else if (hour < 22) return 'Good evening';
  else return 'Good nighttime';
};
```

## Specify the date plus or minus the time

```ts
/**
 * Specify the date plus or minus the time
 * @param {string} dateTime Specified date
 * @param {number} hours Hours added or subtracted
 * @return The calculated date and time
 */
const dateAndHours = (dateTime: string, hours: number): string => {
  const newDateTime = new Date(dateTime);
  newDateTime.setTime(newDateTime.getTime() + hours * 60 * 60 * 1000);
  const year = newDateTime.getFullYear();
  let month = newDateTime.getMonth() + 1;
  let day = newDateTime.getDate();
  let hour = newDateTime.getHours();
  let minute = newDateTime.getMinutes();
  let second = newDateTime.getSeconds();
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

console.log(dateAndHours('2023-04-18 12:00:01', 2)); // =>>> 2023-04-18 14:00:01
```

## Calculate the number of minutes between two dates

```ts
/**
 * Calculate the number of minutes between two dates
 * @param { string } dateTime1
 * @param { string } dateTime2
 * @return { number }
 */
const diffMinutes = (dateTime1, dateTime2) => {
  const diff = Math.abs(
    new Date(dateTime2).getTime() - new Date(dateTime1).getTime(),
  );
  return Math.floor(diff / (1000 * 60));
};

// Example usage
const dateTime1 = '2023-04-17 20:14:25';
const dateTime2 = '2023-04-17 22:25:35';
const diff = diffMinutes(dateTime1, dateTime2);
console.log(diff); // output "131"
```

## The array is sorted by date

```ts
/**
 * The array is sorted by date
 * @param { Array<any> } arr An array that needs to be sorted
 * @param { string } prop Date field name
 * @return { Array<any> }
 */
const sortByDateTime = (arr: Array<any>, prop: string): Array<any> => {
  return arr.sort((a, b) => {
    const dateTimeA = a[`_${prop}`] || (a[`_${prop}`] = new Date(a[prop]));
    const dateTimeB = b[`_${prop}`] || (b[`_${prop}`] = new Date(b[prop]));
    return dateTimeA - dateTimeB;
  });
};
```

## Calculates whether there is a time crossover in the array

```ts
/**
 * Calculates whether there is a time crossover in the array
 * @param { Array<any> } list
 * @param { string } stime Start date field name
 * @param { string } etime End date field name
 * @return { boolean }
 */
const checkTimeOverlap = (list, stime, etime) => {
  for (let i = 0; i < list.length; i++) {
    const item1 = list[i];
    for (let j = i + 1; j < list.length; j++) {
      const item2 = list[j];
      if (
        (item1[stime] >= item2[stime] && item1[stime] <= item2[etime]) ||
        (item1[etime] >= item2[stime] && item1[etime] <= item2[etime]) ||
        (item1[stime] <= item2[stime] && item1[etime] >= item2[etime])
      ) {
        return true; // Existence time crossing
      }
    }
  }
  return false; // No time crossing
};
```

## Determine if the date is today

```ts
/**
 * Determine if the date is today
 * @param { string } date date
 * @return { boolean }
 */
const isToday = (date: string) => {
  const _date = new Date(date);
  const _today = new Date();
  // Compare whether years, months, and days are equal
  return (
    _date.getDate() === _today.getDate() &&
    _date.getMonth() === _today.getMonth() &&
    _date.getFullYear() === _today.getFullYear()
  );
};
```

## Determine if the date is Saturday or Sunday

```ts
/**
 * Determine if the date is Saturday or Sunday
 * @param { string } date
 * @return { boolean }
 */
const isWeekend = (date: string) => {
  const _date = new Date(date);
  const day = _date.getDay(); // Get the day of the week, where 0 represents Sunday, 1 represents Monday, and so on
  return day === 0 || day === 6;
};
```

## Determine if the date is before today (specified number of days)

```ts
/**
 * Determine if the date is before today (specified number of days)
 * @param { string } date
 * @param { string } days
 * @return { boolean }
 */
const isBeforeDays = (date: string, days = 0) => {
  const _date = new Date(date);
  // Get current date
  const _today = new Date();
  const severalDaysLater = new Date(
    _today.getFullYear(),
    _today.getMonth(),
    _today.getDate() + days,
  );
  const inputDate = new Date(
    _date.getFullYear(),
    _date.getMonth(),
    _date.getDate(),
  );
  // Compare dates
  return inputDate < severalDaysLater;
};
```

## Find the minimum date in the array

```ts
/**
 * Find the minimum date in the array
 * @param { string[] } list
 * @return { string | null }
 */
const findMinDate = (list: string[]) => {
  if (list.length === 0) {
    return null; // Array is empty, return null
  }
  let minDate = new Date(list[0]); // Assuming the first date is the minimum date
  for (let i = 1; i < list.length; i++) {
    const currentDate = new Date(list[i]);
    if (currentDate < minDate) {
      minDate = currentDate; // Find a smaller date and update the minimum date
    }
  }
  return minDate;
};
```
