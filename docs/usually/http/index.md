---
title: 请求
order: 6
nav:
  title: 常用
  order: 1
---

## axios 的封装

```js
/**
 * 目录结构
 * -http
 * ——api.ts
 * ——axios.ts
 **/
```

- `/src/http/axios.ts` 文件

  ```ts
  import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
  } from 'axios';

  const baseURL =
    process.env.NODE_ENV === 'production' ? window.location.origin : '/api';

  const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 20000,
  });

  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // Add your custom logic here
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.status === 200) {
        return response.data;
      }
      return Promise.reject(response);
    },
    (error: any) => {
      return Promise.reject(error);
    },
  );

  export const get = <T>(
    url: string,
    params?: any,
    config = {},
  ): Promise<T> => {
    return instance
      .get(url, { params, ...config })
      .then((response: AxiosResponse<T>) => {
        return response.data;
      });
  };

  export const post = <T>(url: string, data?: any, config = {}): Promise<T> => {
    return instance
      .post(url, data, config)
      .then((response: AxiosResponse<T>) => {
        return response.data;
      });
  };
  ```

- `/src/http/api.ts` 文件

  ```ts
  import { get, post } from '@/http/axios.ts';

  /***** 测试接口 *****/
  export const handleGetTest = (params: any) => post('/api1', params);
  export const handlePostTest = (param: any) => get('/api2', params);
  ```
