---
title: Http
order: 6
nav:
  title: Usually
  order: 1
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

- `/src/http/api.ts` File

  ```ts
  import { get, post } from '@/http/axios.ts';

  /***** The test interface *****/
  export const handleGetTest = (params: any) => post('/api1', params);
  export const handlePostTest = (param: any) => get('/api2', params);
  ```
