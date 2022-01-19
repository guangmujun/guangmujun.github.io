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
    "revision": "5334dfc31169b7a094f0ab0ca6f4b63a"
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
    "url": "assets/js/1.7c1ec8be.js",
    "revision": "428cb7969ee9e4f4e4d50ea7aa3b7101"
  },
  {
    "url": "assets/js/10.851bf250.js",
    "revision": "55567e157924abf14bed3f9bf2db5461"
  },
  {
    "url": "assets/js/11.58fe7857.js",
    "revision": "d54ea3ccf9c028631731064e12790ad7"
  },
  {
    "url": "assets/js/12.9923bf29.js",
    "revision": "249537e9d4086f3fb1559af82c37b1b4"
  },
  {
    "url": "assets/js/13.8b9c0517.js",
    "revision": "59b9bedd305136e171b10b2d95b50eae"
  },
  {
    "url": "assets/js/14.b1803106.js",
    "revision": "6916ff0cd178c71bc0ade1bd2c03a533"
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
    "url": "assets/js/3.55a967fc.js",
    "revision": "f4db067d4b1ff41583a5d79a669b8ea1"
  },
  {
    "url": "assets/js/4.bec76c12.js",
    "revision": "6b535fdb7a43793d2f2b397a65d07e73"
  },
  {
    "url": "assets/js/5.871a8c1f.js",
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
    "url": "assets/js/app.bfa72bbc.js",
    "revision": "eb4bd813443f7a7e4a03fbb6bd249e93"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "eb23b931386074899a8995f598ee13ab"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "a8481bd4c2e4d5a9844c034705b66264"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "e913c0f342a5d6829c7d48873618b809"
  },
  {
    "url": "categories/index.html",
    "revision": "56f7f5b415e6fb663210f5bed89e5979"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "ad4c76d2c3f3f9e50dc607ea01b1b715"
  },
  {
    "url": "index.html",
    "revision": "653413b2f3a8b3edd8e33a5ea6097b46"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "c5fd703508057b2fc2d40e23e872d8a3"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "c49819736185f46ba7b6933fdc0fa268"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "5fa3c6ab33d1d9a0fd1d077a97c726d2"
  },
  {
    "url": "tag/index.html",
    "revision": "e9b323ecb6a01d0f5268425ec0071a39"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "66bd6c119bc5342307156689f2364ffa"
  },
  {
    "url": "timeline/index.html",
    "revision": "c1e9e781f2d7af651a5b672bd1a2cd6f"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "c457c68f57786337ef1704cb3bac90b9"
  },
  {
    "url": "web-scraper.html",
    "revision": "2bfa3e073dc988add9c00d9e8ed226fe"
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
