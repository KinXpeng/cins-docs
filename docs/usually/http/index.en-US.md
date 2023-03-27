---
title: Http
order: 6
nav:
  title: Usually
  order: 1
---

## Axios base package

### `request.ts` File

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

### `api.ts` File

```ts
import { get, post } from './request';

/***** The test interface *****/
export const handleGetTest = (params: any) => post('/api1', params);
export const handlePostTest = (param: any) => get('/api2', params);
```

## Axios advanced encapsulation

### `request.ts` File

```ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios';

// Defines an interface that defines a request response data structure
interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// Create a custom Axios instance to set the default request configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000, // Request timeout, in milliseconds
});

// Defines an interceptor that processes a request before it is sent
apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
  // Before a request is sent, you can set request headers in config.headers, for example, Authorization Token
  config.headers.Authorization =
    'Bearer ' + localStorage.getItem('access_token');
  return config;
});

// Defines an interceptor to process the response when it arrives
apiClient.interceptors.response.use((response: AxiosResponse<ApiResponse>) => {
  // After the response arrives, you can handle the error globally according to the status code, error code, and error message in the response
  if (response.data.code !== 200) {
    // Handling errors, such as an error message or an error page
  }
  return response.data;
});

// Encapsulate request methods, using Promises to encapsulate asynchronous operations and support for canceling requests and setting timeouts
export const apiRequest = <T = any>(
  config: AxiosRequestConfig,
  timeout?: number,
): Promise<T> => {
  const source: CancelTokenSource = axios.CancelToken.source(); // Create a token to cancel the request
  return new Promise<T>((resolve, reject) => {
    const timeoutId = timeout
      ? setTimeout(() => {
          source.cancel('Request timeout'); // Cancel request after timeout
        }, timeout)
      : undefined;
    apiClient({
      ...config,
      cancelToken: source.token, // Tokens are added to the request configuration to support cancellation requests
    })
      .then((response) => {
        clearTimeout(timeoutId); // Clear timeout timer
        resolve(response.data);
      })
      .catch((error) => {
        clearTimeout(timeoutId); // Clear timeout timer
        if (axios.isCancel(error)) {
          // The request has been cancelled
        } else {
          reject(error);
        }
      });
  });
};

// Encapsulation upload file method, using FormData to encapsulate file data
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

### `api.ts` use example

```ts
import { apiRequest, apiUpload, ApiResponse } from './request';

// Request data sample
interface ExampleData {
  id: number;
  name: string;
  age: number;
}

// Send request example
apiRequest<ExampleData>({
  url: '/example',
  method: 'get',
  params: { id: 1 },
})
  .then((data) => {
    console.log(data); // Processing response data
  })
  .catch((error) => {
    console.log(error); // Processing request error
  });

// Example cancel request
const cancelTokenSource = axios.CancelToken.source();
apiRequest<ExampleData>({
  url: '/example',
  method: 'get',
  params: { id: 1 },
  cancelToken: cancelTokenSource.token, // Add a token to cancel the request
})
  .then((data) => {
    console.log(data); // Processing response data
  })
  .catch((error) => {
    if (axios.isCancel(error)) {
      console.log('Request cancelled'); // Processing request cancelled
    } else {
      console.log(error); // Processing request error
    }
  });
// Cancel request
cancelTokenSource.cancel('Reason for request cancellation');

// Example for setting the timeout period
apiRequest<ExampleData>(
  {
    url: '/example',
    method: 'get',
    params: { id: 1 },
  },
  5000,
) // Example Set the timeout period to 5000 milliseconds
  .then((data) => {
    console.log(data); // Processing response data
  })
  .catch((error) => {
    console.log(error); // Processing response error
  });

// Example of uploading Files
const uploadFile = async () => {
  try {
    // Call the apiUpload method to upload a file, and pass in parameters such as the file, upload progress callback function, and request address
    const result = await apiUpload('/upload', file, (progressEvent) => {
      // During the upload process, you can obtain the upload progress and achieve effects such as a file upload progress bar
      console.log(
        'Uploading progress:' +
          (progressEvent.loaded / progressEvent.total) * 100 +
          '%',
      );
    });
    console.log('Upload successfully:', result);
  } catch (error) {
    console.log('Upload failure:', error);
  }
};
```
