---
title: 其它
order: 9
nav:
  title: 进阶
  order: 2
---

## 获取设备电池信息

```js
navigator.getBattery().then(function (battery) {
  // 获取设备电量剩余百分比
  var level = battery.level; //最大值为1,对应电量100%
  console.log('Level: ' + level * 100 + '%');

  // 获取设备充电状态
  var charging = battery.charging;
  console.log('充电状态: ' + charging);

  // 获取设备完全充电需要的时间
  var chargingTime = battery.chargingTime;
  console.log('完全充电需要的时间: ' + chargingTime);

  // 获取设备完全放电需要的时间
  var dischargingTime = battery.dischargingTime;
  console.log('完全放电需要的时间: ' + dischargingTime);
});
```
