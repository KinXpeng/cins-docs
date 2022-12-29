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

## 某年某月的天数

```ts
/**
 * 传入年份和月份 获取该年对应月份的天数
 * @param { number } year
 * @param { number } month
 * @return { number } days
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
 * @param { number } year
 * @param { number } month
 * @return { Array<Item> }
 **/
interface Item {
  yeardate: string;
  date: string;
}

const getDateList = (year: number, month: number): Array<Item> => {
  const _newdate = new Date(year, month, 0); // 当天数为0
  const _length = _newdate.getDate();
  month = month < 10 ? '0' + month : month;
  const _result = [];
  for (let i = 1; i <= _length; i++) {
    i = i < 10 ? '0' + i : i;
    const _yeardate = year + '-' + month + '-' + i;
    const _date = month + '-' + i;
    _result.push({
      yeardate: _yeardate,
      date: _date,
    });
  }
  return _result;
};
```

## 计算开始时间与时长的和

```ts
/**
 * 获取单个指定块的结束时间
 * @param { string } stime 15:40
 * @param { number } duration 22
 * @return { string } =>>>  16:02
 */
const getEndTime = (stime: string, duration: number) => {
  let [hour, minute] = stime.split(':');
  let _hour: string | number = Number(hour);
  let _minute: string | number = Number(minute);
  const _minutes = _minute + duration;
  if (_minutes < 60) {
    _minute += duration;
    _minute = _minute < 10 ? '0' + _minute : _minute;
  } else {
    const _h = Math.floor(_minutes / 60);
    let _m = _minutes - _h * 60;
    _hour += _h;
    _hour = _hour < 10 ? '0' + _hour : _hour;
    _minute = _m < 10 ? '0' + _m : _m;
  }
  return _hour + ':' + _minute;
};
```

## 获取两个时间之间的时长

```ts
/**
 * 获取两个时间之间的时长
 * @param { string } time1 15:40
 * @param { string } time2 17:33
 * @param { number } num 1 时段的标准时长，默认为一小时
 * @param { number } type 'start' / 'end' // start算出来是正数，反之为负数
 * @return { number } =>>>  1.8833333333333333 // 计算两个时间的差为num的倍数
 */
const timeToInteger = (time1: string, time2: string, num: number, type: string) => {
  let [stime1, etime1]: Array<any> = time1.split(':');
  let [stime2, etime2]: Array<any> = time2.split(':');
  let h,
    m = 0;
  if (type == 'start') {
    h = stime1 - stime2;
    m = etime1 - etime2;
  } else if (type == 'end') {
    h = stime2 - stime1;
    m = etime2 - etime1;
  }
  let decimals = m / (60 * num);
  return (h as number) / num + decimals;
};
```

## 获取某个日期位于当年的第几天

```js
/**
 * 获取某个日期位于当年的第几天
 * @param { string } date '2022-12-27'
 * @return { number } =>>>  361
 */
const dateOfYear = (date) => {
  date = new Date(date);
  const _days = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  return _days;
};
```

## 计算两个日期之间的天数

```js
/**
 * 计算两个日期之间的天数
 * @param { string } date1 '2022-12-27'
 * @param { string } date2 '2022-12-28'
 * @return { number }  =>>>  1
 */
const daysDistance = (date1, date2) => {
  date1 = Date.parse(date1);
  date2 = Date.parse(date2);
  const _ms = date2 - date1;
  const _days = Math.floor(_ms / (24 * 3600 * 1000));
  return _days;
};
```
