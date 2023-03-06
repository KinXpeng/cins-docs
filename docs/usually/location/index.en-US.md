---
title: Location
order: 8
nav:
  title: Usually
  order: 1
---

## H5 To obtain position（JS）

```js
/**
 * Latitude and longitude acquisition
 * Optimization was performed based on the acquisition position of h5
 * @return {object} The value of the parameter
 * An authorization popup will be displayed when obtaining the location
 **/

const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          let data = {
            lat: latitude,
            lng: longitude,
          };
          resolve(data);
        },
        () => {
          reject('Failed to get location');
        },
      );
    } else {
      reject(
        'Your device does not support current geolocation information retrieval',
      );
    }
  });
};
```

## Baidu map latitude and longitude into Tencent map latitude and longitude（JS）

```js
/**
 * Baidu map latitude and longitude into Tencent map latitude and longitude
 * @param {Number} lat
 * @param {Number} lng
 * @returns
 */
const bdMapToTxMap = (lat, lng) => {
  let pi = (3.14159265358979324 * 3000.0) / 180.0;
  let x = lng - 0.0065;
  let y = lat - 0.006;
  let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * pi);
  let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * pi);
  lng = z * Math.cos(theta);
  lat = z * Math.sin(theta);
  return { lng: lng, lat: lat };
};
```

## Tencent map to Baidu map latitude and longitude（JS）

```js
/**
 * Tencent map to Baidu map latitude and longitude
 * @param {Number} lat
 * @param {Number} lng
 * @returns
 */
const txMapToBdMap = (lng, lat) => {
  let x_pi = (3.14159265358979324 * 3000.0) / 180.0;
  let x = lng;
  let y = lat;
  let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
  let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
  let lngs = z * Math.cos(theta) + 0.0065;
  let lats = z * Math.sin(theta) + 0.006;
  return {
    lng: lngs,
    lat: lats,
  };
};
```

## Tencent map API（JS）

- Request `API` Cross-domain problems may be encountered `jsonp` request resolution across domains。
- Get [jsonp](https://github.com/KinXpeng/cins-docs/tree/main/utils) File。
- `jsonp.js` Content is not much, source code as follows.

```js
const jsonp = function (url, data) {
  return new Promise((resolve, reject) => {
    // 1.init url
    let dataString = url.indexOf('?') === -1 ? '?' : '&';
    let callbackName = `jsonpCB_${Date.now()}`;
    url += `${dataString}callback=${callbackName}`;
    if (data) {
      // 2.put params to url
      for (let k in data) {
        url += `&${k}=${data[k]}`;
      }
    }

    let scriptNode = document.createElement('script');
    scriptNode.src = url;

    // 3. callback
    window[callbackName] = (result) => {
      result ? resolve(result) : reject('No data returned');
      delete window[callbackName];
      document.body.removeChild(scriptNode);
    };

    // 4. error
    scriptNode.addEventListener(
      'error',
      () => {
        reject('The interface failed to return data. Procedure');
        delete window[callbackName];
        document.body.removeChild(scriptNode);
      },
      false,
    );

    // 5. start
    document.body.appendChild(scriptNode);
  });
};
export { jsonp };
```

- Method of use （[Official website of key Application](https://lbs.qq.com/)）

```js
import { jsonp } from './jsonp.js';

// To obtain position
const getLocation = () => {
  return new Promise((resolve, reject) => {
    jsonp('https://apis.map.qq.com/ws/location/v1/ip', {
      key: key, // This key can be applied for in the official website of Tencent Map
      output: 'jsonp',
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
```
