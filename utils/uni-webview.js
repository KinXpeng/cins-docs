!(function (e, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
    ? define(n)
    : ((e = e || self).uni = n());
})(this, function () {
  'use strict';
  try {
    var e = {};
    Object.defineProperty(e, 'passive', {
      get: function () {
        !0;
      },
    }),
      window.addEventListener('test-passive', null, e);
  } catch (e) {}
  var n = Object.prototype.hasOwnProperty;
  function i(e, i) {
    return n.call(e, i);
  }
  var t = [];
  function o() {
    return window.__dcloud_weex_postMessage || window.__dcloud_weex_;
  }
  var r = function (e, n) {
      var i = { options: { timestamp: +new Date() }, name: e, arg: n };
      if (o()) {
        if ('postMessage' === e) {
          var r = { data: [n] };
          return window.__dcloud_weex_postMessage
            ? window.__dcloud_weex_postMessage(r)
            : window.__dcloud_weex_.postMessage(JSON.stringify(r));
        }
        var a = { type: 'WEB_INVOKE_APPSERVICE', args: { data: i, webviewIds: t } };
        window.__dcloud_weex_postMessage
          ? window.__dcloud_weex_postMessageToService(a)
          : window.__dcloud_weex_.postMessageToService(JSON.stringify(a));
      }
      if (!window.plus)
        return window.parent.postMessage(
          { type: 'WEB_INVOKE_APPSERVICE', data: i, pageId: '' },
          '*',
        );
      if (0 === t.length) {
        var d = plus.webview.currentWebview();
        if (!d) throw new Error('plus.webview.currentWebview() is undefined');
        var s = d.parent(),
          w = '';
        (w = s ? s.id : d.id), t.push(w);
      }
      if (plus.webview.getWebviewById('__uniapp__service'))
        plus.webview.postMessageToUniNView(
          { type: 'WEB_INVOKE_APPSERVICE', args: { data: i, webviewIds: t } },
          '__uniapp__service',
        );
      else {
        var u = JSON.stringify(i);
        plus.webview
          .getLaunchWebview()
          .evalJS(
            'UniPlusBridge.subscribeHandler("'
              .concat('WEB_INVOKE_APPSERVICE', '",')
              .concat(u, ',')
              .concat(JSON.stringify(t), ');'),
          );
      }
    },
    a = {
      navigateTo: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.url;
        r('navigateTo', { url: encodeURI(n) });
      },
      navigateBack: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.delta;
        r('navigateBack', { delta: parseInt(n) || 1 });
      },
      switchTab: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.url;
        r('switchTab', { url: encodeURI(n) });
      },
      reLaunch: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.url;
        r('reLaunch', { url: encodeURI(n) });
      },
      redirectTo: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.url;
        r('redirectTo', { url: encodeURI(n) });
      },
      getEnv: function (e) {
        o() ? e({ nvue: !0 }) : window.plus ? e({ plus: !0 }) : e({ h5: !0 });
      },
      postMessage: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        r('postMessage', e.data || {});
      },
    },
    d = /uni-app/i.test(navigator.userAgent),
    s = /Html5Plus/i.test(navigator.userAgent),
    w = /complete|loaded|interactive/;
  var u = window.my && navigator.userAgent.indexOf('AlipayClient') > -1;
  var g = window.swan && window.swan.webView && /swan/i.test(navigator.userAgent);
  var c =
    window.qq &&
    window.qq.miniProgram &&
    /QQ/i.test(navigator.userAgent) &&
    /miniProgram/i.test(navigator.userAgent);
  var v = window.tt && window.tt.miniProgram && /toutiaomicroapp/i.test(navigator.userAgent);
  var m =
    window.wx &&
    window.wx.miniProgram &&
    /micromessenger/i.test(navigator.userAgent) &&
    /miniProgram/i.test(navigator.userAgent);
  var p = window.qa && /quickapp/i.test(navigator.userAgent);
  var f =
    window.ks &&
    window.ks.miniProgram &&
    /micromessenger/i.test(navigator.userAgent) &&
    /miniProgram/i.test(navigator.userAgent);
  var l = window.tt && window.tt.miniProgram && /Lark|Feishu/i.test(navigator.userAgent);
  var _ =
    window.jd &&
    window.jd.miniProgram &&
    /micromessenger/i.test(navigator.userAgent) &&
    /miniProgram/i.test(navigator.userAgent);
  for (
    var E,
      b = function () {
        (window.UniAppJSBridge = !0),
          document.dispatchEvent(
            new CustomEvent('UniAppJSBridgeReady', { bubbles: !0, cancelable: !0 }),
          );
      },
      h = [
        function (e) {
          if (d || s)
            return (
              window.__dcloud_weex_postMessage || window.__dcloud_weex_
                ? document.addEventListener('DOMContentLoaded', e)
                : window.plus && w.test(document.readyState)
                ? setTimeout(e, 0)
                : document.addEventListener('plusready', e),
              a
            );
        },
        function (e) {
          if (m)
            return (
              window.WeixinJSBridge && window.WeixinJSBridge.invoke
                ? setTimeout(e, 0)
                : document.addEventListener('WeixinJSBridgeReady', e),
              window.wx.miniProgram
            );
        },
        function (e) {
          if (c)
            return (
              window.QQJSBridge && window.QQJSBridge.invoke
                ? setTimeout(e, 0)
                : document.addEventListener('QQJSBridgeReady', e),
              window.qq.miniProgram
            );
        },
        function (e) {
          if (u) {
            document.addEventListener('DOMContentLoaded', e);
            var n = window.my;
            return {
              navigateTo: n.navigateTo,
              navigateBack: n.navigateBack,
              switchTab: n.switchTab,
              reLaunch: n.reLaunch,
              redirectTo: n.redirectTo,
              postMessage: n.postMessage,
              getEnv: n.getEnv,
            };
          }
        },
        function (e) {
          if (g) return document.addEventListener('DOMContentLoaded', e), window.swan.webView;
        },
        function (e) {
          if (v) return document.addEventListener('DOMContentLoaded', e), window.tt.miniProgram;
        },
        function (e) {
          if (p) {
            window.QaJSBridge && window.QaJSBridge.invoke
              ? setTimeout(e, 0)
              : document.addEventListener('QaJSBridgeReady', e);
            var n = window.qa;
            return {
              navigateTo: n.navigateTo,
              navigateBack: n.navigateBack,
              switchTab: n.switchTab,
              reLaunch: n.reLaunch,
              redirectTo: n.redirectTo,
              postMessage: n.postMessage,
              getEnv: n.getEnv,
            };
          }
        },
        function (e) {
          if (f)
            return (
              window.WeixinJSBridge && window.WeixinJSBridge.invoke
                ? setTimeout(e, 0)
                : document.addEventListener('WeixinJSBridgeReady', e),
              window.ks.miniProgram
            );
        },
        function (e) {
          if (l) return document.addEventListener('DOMContentLoaded', e), window.tt.miniProgram;
        },
        function (e) {
          if (_)
            return (
              window.JDJSBridgeReady && window.JDJSBridgeReady.invoke
                ? setTimeout(e, 0)
                : document.addEventListener('JDJSBridgeReady', e),
              window.jd.miniProgram
            );
        },
        function (e) {
          return document.addEventListener('DOMContentLoaded', e), a;
        },
      ],
      y = 0;
    y < h.length && !(E = h[y](b));
    y++
  );
  E || (E = {});
  var B = 'undefined' != typeof uni ? uni : {};
  if (!B.navigateTo) for (var S in E) i(E, S) && (B[S] = E[S]);
  return (B.webView = E), B;
});
