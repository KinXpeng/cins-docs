---
nav:
  title: Http
  path: /usually
---

## Axios encapsulation

```js
/**
 * The directory structure
 * -http
 * ——api.ts
 * ——axios.ts
 **/
```

- `/src/http/axios.ts` File

  ```ts
  import axios from 'axios';
  import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

  // const baseURL = process.env.NODE_ENV
  let url: string = '';
  let winUrl: string[] = window.location.href.split('/');
  let lastUrl: string = winUrl[0] + '//' + winUrl[2];
  if (import.meta.env.MODE == 'development') {
    url = '/api';
  } else if (import.meta.env.MODE == 'production') {
    url = lastUrl;
  }

  const instance: AxiosInstance = axios.create({
    // Fixed request address
    baseURL: url, // You can change it to whatever address you want
    // Request timeout period
    timeout: 20000,
    // The default request header for the current request
    // header:{

    // }
  });

  // Creating a request Intercept
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // config.headers.token = '123';
      return config;
    },
    (err: any) => {
      // Errors are thrown into the business code
      err.data = {};
      err.data.msg = 'Server exception, please contact the administrator!';
      return Promise.resolve(err);
    },
  );

  // Creating a response intercept
  instance.interceptors.response.use(
    (res: AxiosResponse) => {
      if (res.status === 200) {
        return res;
      }
    },
    (err: any) => {
      return Promise.reject(err);
    },
  );
  // config is set for headers
  /* Encapsulate get requests uniformly */
  export const get = (url: string, params?: any, config = {}) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url,
        params,
        ...config,
      })
        .then((res: AxiosResponse) => {
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  };

  /* Encapsulate post requests uniformly  */
  export const post = (url: string, data?: any, config = {}) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url,
        data,
        ...config,
      })
        .then((res: AxiosResponse) => {
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  };
  ```

- `/src/http/api.ts` File

  ```ts
  import { get, post } from '@/http/axios.ts';

  /***** The test interface *****/
  export const handleGetTest = (params: any) => post('/api1', params);
  export const handlePostTest = (param: any) => get('/api2', params);
  ```
