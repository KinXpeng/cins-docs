---
title: 请求
order: 6
nav:
  title: 常用
  order: 1
---

## axios 基础封装

### `request.ts` 文件

```ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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

export const get = <T>(url: string, params?: any, config = {}): Promise<T> => {
  return instance
    .get(url, { params, ...config })
    .then((response: AxiosResponse<T>) => {
      return response.data;
    });
};

export const post = <T>(url: string, data?: any, config = {}): Promise<T> => {
  return instance.post(url, data, config).then((response: AxiosResponse<T>) => {
    return response.data;
  });
};
```

### `api.ts` 文件

```ts
import { get, post } from './request';

/***** 测试接口 *****/
export const handleGetTest = (params: any) => post('/api1', params);
export const handlePostTest = (params: any) => get('/api2', params);
```

## axios 进阶封装

### `request.ts`文件

```ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios';

// 定义接口，用于定义请求响应数据结构
interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// 创建一个自定义的Axios实例，用于设置默认请求配置
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000, // 请求超时时间，单位毫秒
});

// 定义一个拦截器，用于在请求发送前对请求进行处理
apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
  // 在请求发送前，可以在config.headers中设置请求头信息，如设置Authorization Token
  config.headers.Authorization =
    'Bearer ' + localStorage.getItem('access_token');
  return config;
});

// 定义一个拦截器，用于在响应到达后对响应进行处理
apiClient.interceptors.response.use((response: AxiosResponse<ApiResponse>) => {
  // 在响应到达后，可以根据响应中的状态码、错误码、错误消息等信息进行全局统一的错误处理
  if (response.data.code !== 200) {
    // 处理错误，如提示错误信息或跳转到错误页面
  }
  return response.data;
});

// 封装请求方法，使用Promise封装异步操作，并支持取消请求和设置超时时间
export const apiRequest = <T = any>(
  config: AxiosRequestConfig,
  timeout?: number,
): Promise<T> => {
  const source: CancelTokenSource = axios.CancelToken.source(); // 创建一个取消请求的令牌
  return new Promise<T>((resolve, reject) => {
    const timeoutId = timeout
      ? setTimeout(() => {
          source.cancel('请求超时'); // 超时后取消请求
        }, timeout)
      : undefined;
    apiClient({
      ...config,
      cancelToken: source.token, // 将令牌添加到请求配置中，以支持取消请求
    })
      .then((response) => {
        clearTimeout(timeoutId); // 清除超时计时器
        resolve(response.data);
      })
      .catch((error) => {
        clearTimeout(timeoutId); // 清除超时计时器
        if (axios.isCancel(error)) {
          // 请求已被取消
        } else {
          reject(error);
        }
      });
  });
};

// 封装上传文件方法，使用FormData封装文件数据
export const apiUpload = <T = any>(
  url: string,
  file: File,
  onUploadProgress?: (progressEvent: ProgressEvent) => void,
): Promise<T> => {
  const formData = new FormData();
  formData.append('file', file);
  return apiRequest<T>({
    method: 'POST',
    url,
    data: formData,
    onUploadProgress,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
```

### `api.ts` 使用示例

```ts
import { apiRequest, apiUpload, ApiResponse } from './request';

// 请求数据示例
interface ExampleData {
  id: number;
  name: string;
  age: number;
}

// 发送请求示例
apiRequest<ExampleData>({
  url: '/example',
  method: 'get',
  params: { id: 1 },
})
  .then((data) => {
    console.log(data); // 处理响应数据
  })
  .catch((error) => {
    console.log(error); // 处理请求错误
  });

// 取消请求示例
const cancelTokenSource = axios.CancelToken.source();
apiRequest<ExampleData>({
  url: '/example',
  method: 'get',
  params: { id: 1 },
  cancelToken: cancelTokenSource.token, // 添加取消请求的令牌
})
  .then((data) => {
    console.log(data); // 处理响应数据
  })
  .catch((error) => {
    if (axios.isCancel(error)) {
      console.log('请求已取消'); // 处理请求已取消
    } else {
      console.log(error); // 处理请求错误
    }
  });
// 取消请求
cancelTokenSource.cancel('请求取消原因');

// 设置超时时间示例
apiRequest<ExampleData>(
  {
    url: '/example',
    method: 'get',
    params: { id: 1 },
  },
  5000,
) // 设置超时时间为5000毫秒
  .then((data) => {
    console.log(data); // 处理响应数据
  })
  .catch((error) => {
    console.log(error); // 处理请求错误
  });

// 上传文件示例
const uploadFile = async () => {
  try {
    // 调用apiUpload方法上传文件，传入文件、上传进度回调函数和请求地址等参数
    const result = await apiUpload('/upload', file, (progressEvent) => {
      // 在上传过程中可以获取上传进度，并实现文件上传进度条等效果
      console.log(
        '上传进度：' + (progressEvent.loaded / progressEvent.total) * 100 + '%',
      );
    });
    console.log('上传成功：', result);
  } catch (error) {
    console.log('上传失败：', error);
  }
};
```
