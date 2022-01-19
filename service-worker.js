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
    "revision": "16a836a853a939fc9e147e4acb28e761"
  },
  {
    "url": "adb-phone.html",
    "revision": "b91b5848f588aaf3e2e29a129e691908"
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
    "url": "assets/js/app.1c2cf578.js",
    "revision": "76916290364230e3904f6d6c85599342"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "c0b2acf8fd2a1fadb122c4a37ff42351"
  },
  {
    "url": "categories/index.html",
    "revision": "ed9a9dbfe9b6f9cc8a1a4b62e7e723e6"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "2a29b3850a2e38567ab1f6ad452ec7e9"
  },
  {
    "url": "categories/测试/index.html",
    "revision": "3e793c2647da84af06baadfa43490840"
  },
  {
    "url": "index.html",
    "revision": "ead3e140ca64ee733bc3550180ecd6af"
  },
  {
    "url": "tag/ADB/index.html",
    "revision": "8a7a6404260efadaad3c48f5795bc31d"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "8365ac99a4ffb1024f2dc924c7a2430c"
  },
  {
    "url": "tag/index.html",
    "revision": "ffca49edfa5ad327cb1060084f511db6"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "331f168181afb8d25a837d8fd492d94a"
  },
  {
    "url": "test_my_site.html",
    "revision": "1c777da7ffe6071595b6fb1e82e99b14"
  },
  {
    "url": "timeline/index.html",
    "revision": "125641020568bbcd46040b41855239b7"
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
