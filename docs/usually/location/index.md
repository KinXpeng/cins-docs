---
title: 位置
order: 8
nav:
  title: 常用
  order: 1
---

## H5 获取位置

```ts
/**
 * 经纬度获取
 * 基于h5的获取位置进行优化
 * @return {object} 参数的值
 * 获取位置时会有授权弹窗提示
 **/

const getLocation = (): Promise<{ lat: number; lng: number }> => {
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

## 百度地图经纬度转为腾讯地图经纬度

```ts
/**
 * 百度地图经纬度转为腾讯地图经纬度
 * @param lat {Number} 纬度
 * @param lng {Number} 经度
 * @return {Object} 返回经过转换后的经纬度对象，包括lng和lat两个属性
 */
const bdMapToTxMap = (
  lat: number,
  lng: number,
): { lng: number; lat: number } => {
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

## 腾讯地图转百度地图经纬度

```ts
/**
 * 腾讯地图转百度地图经纬度
 * @param {Number} lat
 * @param {Number} lng
 * @return {Object}
 */
const txMapToBdMap = (lng: number, lat: number) => {
  const x_pi = (Math.PI * 3000.0) / 180.0;
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

## 腾讯地图 API

- 请求 `API` 时可能会遇到跨域问题，可采用 `jsonp` 请求解决跨域。
- 获取 [jsonp](https://github.com/KinXpeng/cins-docs/tree/main/utils) 文件。
- `jsonp.js` 内容不多，源码如下。

```ts
const jsonp = (url: string, data?: Record<string, any>): Promise<any> => {
  return new Promise((resolve, reject) => {
    // 1. 初始化 url
    let dataString = url.indexOf('?') === -1 ? '?' : '&';
    const callbackName = `jsonpCB_${Date.now()}`;
    url += `${dataString}callback=${callbackName}`;

    if (data) {
      // 2. 将参数添加到 url 上
      for (let k in data) {
        url += `&${k}=${data[k]}`;
      }
    }

    const scriptNode = document.createElement('script');
    scriptNode.src = url;

    // 3. callback
    window[callbackName] = (result: any) => {
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

```ts
import { jsonp } from './jsonp';

interface LocationData {
  lat: number;
  lng: number;
}

interface LocationResult {
  status: number;
  message: string;
  result: LocationData;
}

const getLocation = (): Promise<LocationData> => {
  const key = 'YOUR_TENCENT_MAP_API_KEY';
  return new Promise((resolve, reject) => {
    jsonp<LocationResult>('https://apis.map.qq.com/ws/location/v1/ip', {
      key,
      output: 'jsonp',
    })
      .then((res) => {
        if (res.status === 0) {
          const locationData = res.result;
          resolve(locationData);
        } else {
          reject(res.message);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
```
