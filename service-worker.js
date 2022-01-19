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
    "revision": "de9ad09e6bc57d52bb4ed9b900dcbb23"
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
    "url": "assets/img/e46f9dc2d0bc9e5f62ab688e1675b616.e46f9dc2.png",
    "revision": "e46f9dc2d0bc9e5f62ab688e1675b616"
  },
  {
    "url": "assets/js/1.9eb3e458.js",
    "revision": "428cb7969ee9e4f4e4d50ea7aa3b7101"
  },
  {
    "url": "assets/js/10.851bf250.js",
    "revision": "55567e157924abf14bed3f9bf2db5461"
  },
  {
    "url": "assets/js/11.f5c3d59a.js",
    "revision": "3d0e882b841b9d53af9040c9939dbc55"
  },
  {
    "url": "assets/js/12.7716d1a6.js",
    "revision": "d23315c269efa1a2b9afce77306f148d"
  },
  {
    "url": "assets/js/13.b25ccd62.js",
    "revision": "3c4dda22cc66e0dfa17979b8fcf6eab6"
  },
  {
    "url": "assets/js/14.03c13a34.js",
    "revision": "96987f99021ea0b6448114b1fb535442"
  },
  {
    "url": "assets/js/15.e72d06b8.js",
    "revision": "d5bf7deba565b8d88242949a602cba34"
  },
  {
    "url": "assets/js/16.9fe2f265.js",
    "revision": "d1dc66dd30e93a707a88a5c4bf89a5d1"
  },
  {
    "url": "assets/js/3.9ac81061.js",
    "revision": "f4db067d4b1ff41583a5d79a669b8ea1"
  },
  {
    "url": "assets/js/4.9e97b71a.js",
    "revision": "6b535fdb7a43793d2f2b397a65d07e73"
  },
  {
    "url": "assets/js/5.15535138.js",
    "revision": "2db0569d2acbb21cfb8463eef05d92ba"
  },
  {
    "url": "assets/js/6.1ecf8bc9.js",
    "revision": "b169d154d100cf9505374677d3d710d2"
  },
  {
    "url": "assets/js/7.b7b70b29.js",
    "revision": "f699235d05a5bc9fae83268e959ca601"
  },
  {
    "url": "assets/js/8.2e9efc42.js",
    "revision": "cc8f1fdf371e6db415edaf6ad675600f"
  },
  {
    "url": "assets/js/9.2794c8e8.js",
    "revision": "1ad43d3efa493911d3158347937dac76"
  },
  {
    "url": "assets/js/app.2913e12d.js",
    "revision": "e89b5dd10f98578a6d55c24eac0a14cb"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "6ba1ce53244daeebbca6a97b47d43f9f"
  },
  {
    "url": "categories/index.html",
    "revision": "e0e0b45a28832bf08c0acafb199bf0d1"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "12b48f8b2c6137b4fb92edad88c85dbd"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "77c1f7ed0b0c1206585efb6a7f6e244b"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "11093fd969018a7f2d84bf923c522dbc"
  },
  {
    "url": "index.html",
    "revision": "1a3885cb3127175b9be69120dc63e06d"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "a3482e27da67b7b4bdfa6ac44bf439f8"
  },
  {
    "url": "tag/index.html",
    "revision": "53014384fa03bf36a16cb54f2e3fa215"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "507312134383d391b649a5acc0701e12"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "f5f6d7b3defc62d04042a7efe84836d5"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "f1f96ab4f9b6ad64708f027a01f96e51"
  },
  {
    "url": "timeline/index.html",
    "revision": "8653f7a81fae4437729d19069a54f556"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "8fec671c32ab2b17bbfcd8abed1a04ec"
  },
  {
    "url": "web-scraper.html",
    "revision": "a6140dc8967780906058427410c3d8b9"
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
