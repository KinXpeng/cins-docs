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
