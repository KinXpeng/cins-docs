---
title: Location
order: 8
nav:
  title: Usually
  order: 1
---

## H5 To obtain position

```ts
/**
 * Latitude and longitude acquisition
 * Optimization was performed based on the acquisition position of h5
 * @return {object} The value of the parameter
 * An authorization popup will be displayed when obtaining the location
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

## Baidu map latitude and longitude into Tencent(Autonavi) map latitude and longitude

```ts
/**
 * Baidu map latitude and longitude into Tencent(Autonavi) map latitude and longitude
 * @param {Number} lat
 * @param {Number} lng
 * @returns
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

## Tencent(Autonavi) map to Baidu map latitude and longitude

```ts
/**
 * Tencent(Autonavi) map to Baidu map latitude and longitude
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

## Tencent map API

- Request `API` Cross-domain problems may be encountered `jsonp` request resolution across domains。
- Get [jsonp](https://github.com/KinXpeng/cins-docs/tree/main/utils) File。
- `jsonp.js` Content is not much, source code as follows.

```ts
const jsonp = (url: string, data?: Record<string, any>): Promise<any> => {
  return new Promise((resolve, reject) => {
    // 1. init url
    let dataString = url.indexOf('?') === -1 ? '?' : '&';
    const callbackName = `jsonpCB_${Date.now()}`;
    url += `${dataString}callback=${callbackName}`;

    if (data) {
      // 2. put params to url
      for (let k in data) {
        url += `&${k}=${data[k]}`;
      }
    }

    const scriptNode = document.createElement('script');
    scriptNode.src = url;

    // 3. callback
    window[callbackName] = (result: any) => {
      result ? resolve(result) : reject('No data returned');
      delete window[callbackName];
      document.body.removeChild(scriptNode);
    };

    // 4. error
    scriptNode.addEventListener(
      'error',
      () => {
        reject('The interface failed to return data.');
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
