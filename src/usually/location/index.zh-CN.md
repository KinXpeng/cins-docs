---
nav:
  title: 位置
  path: /usually
---

## H5 获取位置（JS）

```js
/**
 * 经纬度获取
 * 基于h5的获取位置进行优化
 * @return {object} 参数的值
 * 获取位置时会有授权弹窗提示
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
          reject('获取位置失败');
        },
      );
    } else {
      reject('您的设备不支持当前地理位置信息获取');
    }
  });
};
```

## 百度地图经纬度转为腾讯地图经纬度（JS）

```js
/**
 * 百度地图经纬度转为腾讯地图经纬度
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

## 腾讯地图转百度地图经纬度（JS）

```js
/**
 * 腾讯地图转百度地图经纬度
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

## 腾讯地图 API（JS）

- 请求 `API` 时可能会遇到跨域问题，可采用 `jsonp` 请求解决跨域。
- 获取 [jsonp](https://github.com/KinXpeng/cins-docs/tree/main/utils) 文件。
- `jsonp.js` 内容不多，源码如下。

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
      result ? resolve(result) : reject('没有返回数据');
      delete window[callbackName];
      document.body.removeChild(scriptNode);
    };

    // 4. error
    scriptNode.addEventListener(
      'error',
      () => {
        reject('接口返回数据失败');
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

- 使用方法 （[申请 key 官网](https://lbs.qq.com/)）

```js
import { jsonp } from './jsonp.js';

// 获取位置
const getLocation = () => {
  return new Promise((resolve, reject) => {
    jsonp('https://apis.map.qq.com/ws/location/v1/ip', {
      key: key, // 此处key可在腾讯地图官网申请
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
