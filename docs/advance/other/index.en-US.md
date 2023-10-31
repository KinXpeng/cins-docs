---
title: Other
order: 9
nav:
  title: Advance
  order: 2
---

## Obtain device battery information

```js
navigator.getBattery().then(function (battery) {
  // Obtain the remaining percentage of device power
  var level = battery.level; // The maximum value is 1, which corresponds to 100% electricity
  console.log('Level: ' + level * 100 + '%');

  // Obtain the charging status of the device
  var charging = battery.charging;
  console.log('Charging state: ' + charging);

  // Get how long it takes for the device to be fully charged
  var chargingTime = battery.chargingTime;
  console.log('The time it takes to fully charge: ' + chargingTime);

  // Obtain the time required for complete discharge of the device
  var dischargingTime = battery.dischargingTime;
  console.log('The time required for complete discharge: ' + dischargingTime);
});
```
