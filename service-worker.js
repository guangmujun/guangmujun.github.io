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
    "revision": "c96677783ec9bcec59492a431dc7fcde"
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
    "url": "assets/js/1.2cf35c0d.js",
    "revision": "01825788560694cb2b137f194badea74"
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
    "url": "assets/js/14.ff84e1d9.js",
    "revision": "d7a5cc94edad799d4c7ebe5e5b4afe88"
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
    "url": "assets/js/8.9c386a5f.js",
    "revision": "197f734b1ac470f24e112e2b622c2125"
  },
  {
    "url": "assets/js/9.4f81b671.js",
    "revision": "c20f9294ea2fad96438f26ce1eb6821f"
  },
  {
    "url": "assets/js/app.492679bd.js",
    "revision": "0eaefb08455c4314352cc44bcb2f93fe"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "26c26a6cc88929135fcd60b125ae028c"
  },
  {
    "url": "categories/index.html",
    "revision": "55316ac81476533c5e22ef83eb01db13"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "2ae9dd1025a8cdb1d84dc8976cc2dc05"
  },
  {
    "url": "categories/测试/index.html",
    "revision": "9523e4a64a16aab474fd3890e8bd3100"
  },
  {
    "url": "index.html",
    "revision": "7a6e82900c2b3860792dbf38dd61bb9d"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "503f169daf44a1b3476c5c093a06ea30"
  },
  {
    "url": "tag/index.html",
    "revision": "49baec3b3a73d0525eb10a0f909ce776"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "b10652b20570c2ad943f9eab70d350f3"
  },
  {
    "url": "test_my_site.html",
    "revision": "5136be359104e0768bb01a65c4633061"
  },
  {
    "url": "timeline/index.html",
    "revision": "3b6e10b95a546427398847082c36c80c"
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
