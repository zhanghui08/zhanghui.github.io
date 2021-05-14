/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "60b23fb134e65110f35ef4681c61a927"
  },
  {
    "url": "assets/css/0.styles.acfffbb5.css",
    "revision": "aefad21838200dcaef7455e04b5fb6a6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e70d64e8.js",
    "revision": "b075d5d4fbfab8dd3a54520e6d3737ab"
  },
  {
    "url": "assets/js/11.6e0b7ff2.js",
    "revision": "9a28b7b74e4093171f75d7a6b3c2bef2"
  },
  {
    "url": "assets/js/12.9c0279be.js",
    "revision": "1b7e80bf91d17a7bff9b3c6799974f2a"
  },
  {
    "url": "assets/js/13.4a02f44b.js",
    "revision": "b44584031ed33061603181aee29a9164"
  },
  {
    "url": "assets/js/14.4ca11e8c.js",
    "revision": "4b0711b671416d18700756b273f57ba8"
  },
  {
    "url": "assets/js/15.7da2212c.js",
    "revision": "0be5add3e5edce804097e902baec0c06"
  },
  {
    "url": "assets/js/16.437f0410.js",
    "revision": "76781e285847bea741402834ecc148ab"
  },
  {
    "url": "assets/js/17.5835b2f3.js",
    "revision": "78b40a48a2943ba2e177b8a5ae8b283c"
  },
  {
    "url": "assets/js/2.1f15f8f6.js",
    "revision": "d772febc674076cc97242e77fe81e8eb"
  },
  {
    "url": "assets/js/3.301dd809.js",
    "revision": "e256fdfde36490cc0fa0bb764eaa6d92"
  },
  {
    "url": "assets/js/4.f748970b.js",
    "revision": "419e91ea31c1fe6fb2a9f674bf9a87a8"
  },
  {
    "url": "assets/js/5.4ea63480.js",
    "revision": "8d7f1b3c500c162516d6204765db1c16"
  },
  {
    "url": "assets/js/6.2721a543.js",
    "revision": "14136eafeba0b9c35494b5f4b8bd4a12"
  },
  {
    "url": "assets/js/7.e3689d62.js",
    "revision": "26adde45b9166f34df99e5eae1cb7478"
  },
  {
    "url": "assets/js/8.be26c923.js",
    "revision": "f780d5c6757d4b7947d08e4de17bc44e"
  },
  {
    "url": "assets/js/9.0b5a2aed.js",
    "revision": "c51b73a711446278a7607e72d4070ed4"
  },
  {
    "url": "assets/js/app.af9a026c.js",
    "revision": "610a237ab04f057202db827cb9cdd9ad"
  },
  {
    "url": "index.html",
    "revision": "4bad73c94fb3c92e4e5c1876d2719cfa"
  },
  {
    "url": "web/css/index.html",
    "revision": "6ca3b6626668212ad30a6a5f89b5632d"
  },
  {
    "url": "web/git/index.html",
    "revision": "458f8492190035e6abe12327497c82c5"
  },
  {
    "url": "web/html/index.html",
    "revision": "2cab131d32adec58dbc68bbd1502b293"
  },
  {
    "url": "web/javascript/index.html",
    "revision": "4d8dc0bfcc4a3f3c0fc6913519d41fe5"
  },
  {
    "url": "web/react/index.html",
    "revision": "ca5a8dc3c1a9d92e0cc1d193132251fb"
  },
  {
    "url": "web/vue/index.html",
    "revision": "19690d91bb8ebe2e41bf73930cf4e0ee"
  },
  {
    "url": "web/vue/test2.html",
    "revision": "061def34aaaa1484bdb0385deb243e52"
  },
  {
    "url": "web/vue/test3.html",
    "revision": "6483ca0eeb8c2a631ef61d3368141cc1"
  },
  {
    "url": "web/vue/vue3.0.html",
    "revision": "46e16b4c30563ddf96beefa232033409"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
