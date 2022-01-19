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
    "revision": "4a1d351f2ca475b6799e38b182a6c649"
  },
  {
    "url": "adb-phone.html",
    "revision": "f2f4f950531452dfab1220459308884c"
  },
  {
    "url": "assets/css/0.styles.4522ba09.css",
    "revision": "5550ee1e6646330a0e001669505cabb9"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.9eb3e458.js",
    "revision": "428cb7969ee9e4f4e4d50ea7aa3b7101"
  },
  {
    "url": "assets/js/10.155aa0a4.js",
    "revision": "730a97c02536c97948d57059c848e7da"
  },
  {
    "url": "assets/js/11.09cf4136.js",
    "revision": "62c31a748c9ea7297d1d8296755c6ab8"
  },
  {
    "url": "assets/js/12.f9660cd8.js",
    "revision": "33d66d4006d8c5be90445d9bd55376e2"
  },
  {
    "url": "assets/js/13.a0080b5e.js",
    "revision": "ed6402ee500df51753122f1071ed74a2"
  },
  {
    "url": "assets/js/14.368bf069.js",
    "revision": "38b66fddb5a425b2a0b85fd51ce705ab"
  },
  {
    "url": "assets/js/15.e386ea22.js",
    "revision": "4043a7d6fc3ab32240b75656631046e9"
  },
  {
    "url": "assets/js/3.bc77920b.js",
    "revision": "f99abf1657ee43287bb56f9eacf8e844"
  },
  {
    "url": "assets/js/4.fe402fa1.js",
    "revision": "984a1c34ddba81027abc75ba3d7219e8"
  },
  {
    "url": "assets/js/5.bcb9235f.js",
    "revision": "1743bbb71da740cffa9d4044ece2db4a"
  },
  {
    "url": "assets/js/6.970cad6e.js",
    "revision": "efba2d742619e1a936d5fba2a1adfb88"
  },
  {
    "url": "assets/js/7.42eb45b2.js",
    "revision": "53db31416e830e30dcc766c9e2ad0778"
  },
  {
    "url": "assets/js/8.24763d6f.js",
    "revision": "05769d90287b33a1a3292743c2622742"
  },
  {
    "url": "assets/js/9.5f2bb706.js",
    "revision": "274b7f1562991d36ffa56b7a67003d92"
  },
  {
    "url": "assets/js/app.0648becf.js",
    "revision": "58a0c4a478d8d2f9fc825aae93e9751f"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "f8ca076a5ded59f816533c0905ce21e8"
  },
  {
    "url": "categories/index.html",
    "revision": "8933d376596f3faee787fdda18831663"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "9f55bfd337d83a986b65aaac20387e4a"
  },
  {
    "url": "categories/测试/index.html",
    "revision": "3a8af261f0622d344dc55a7fd2722f3d"
  },
  {
    "url": "index.html",
    "revision": "3cf015b67d9c662b249feb762a9aa212"
  },
  {
    "url": "tag/ADB/index.html",
    "revision": "3fcd8f30d0a9152f993e4e4f72f2d976"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "1c9ffa8142a1d7469f90d006fd43b01e"
  },
  {
    "url": "tag/index.html",
    "revision": "7d683c2f7fb24efe82848bd71941d25b"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "eb4858acdba6c83b068a3dfae37f01ec"
  },
  {
    "url": "test_my_site.html",
    "revision": "217eb4d8620ae441f32bd1cc53cd9686"
  },
  {
    "url": "timeline/index.html",
    "revision": "9a6044f9c77adff146c15f1a36aec0c5"
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
