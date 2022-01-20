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
    "revision": "dd715d6cc1cbc02e220da0461c2ded0e"
  },
  {
    "url": "adb-phone.html",
    "revision": "eb5abd9d094d6a63b093edd5fd5186c3"
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
    "url": "assets/js/1.39ca602c.js",
    "revision": "8190571741b9b6943a678cac13736b43"
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
    "url": "assets/js/12.51b782a4.js",
    "revision": "f5317b42bbe5b751b85b95200fba06bc"
  },
  {
    "url": "assets/js/13.b89c746e.js",
    "revision": "deee02720c73d928629e697d14dc6913"
  },
  {
    "url": "assets/js/14.35f5a287.js",
    "revision": "d072e8fbf5f09cdebc4c2805cd494de1"
  },
  {
    "url": "assets/js/15.3e546926.js",
    "revision": "d0b9d8625515c8e97bb1c2801e4db142"
  },
  {
    "url": "assets/js/16.7f51b45c.js",
    "revision": "0686f5c797ed7073433c0a6fae2f7879"
  },
  {
    "url": "assets/js/17.3181e329.js",
    "revision": "58fc59e337b913436fbb978ae717c401"
  },
  {
    "url": "assets/js/18.e844dea1.js",
    "revision": "99c37bd5983a0e4ec670c539e12464a7"
  },
  {
    "url": "assets/js/19.43e0b257.js",
    "revision": "8f01497d5f43fe749e681edf39829261"
  },
  {
    "url": "assets/js/20.abea19ad.js",
    "revision": "b292a7765d788923819ba72543d35d62"
  },
  {
    "url": "assets/js/21.2b722b3b.js",
    "revision": "68a01f734dfae24abda669796666e35b"
  },
  {
    "url": "assets/js/22.b4bbfb8b.js",
    "revision": "70219fc876521e2e23b1a0c5238a7624"
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
    "url": "assets/js/8.cf923e7d.js",
    "revision": "bd6494ed5b4ef2bd4f9295b543f4ec4d"
  },
  {
    "url": "assets/js/9.29080f6c.js",
    "revision": "400747508d9db9fc3e67d85a26123e86"
  },
  {
    "url": "assets/js/app.dbadedba.js",
    "revision": "8de876d3badd1019247fdf85ff2bb991"
  },
  {
    "url": "basketball-middle-operate-ball.html",
    "revision": "d48ee73402c79b14fd271b8cd2c5fdb3"
  },
  {
    "url": "categories/GIS/index.html",
    "revision": "9ea96ffcaa895516e9cb9bfabf503759"
  },
  {
    "url": "categories/index.html",
    "revision": "2cef4719731089e42aa91a89c6a20296"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "6d6bf836d69453da05b332a4fa8a9519"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "a25c40a1729f5cc0753048811e287faf"
  },
  {
    "url": "categories/数据挖掘/index.html",
    "revision": "dbf3db4b23ef068f7485d32d87d48578"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "1e8de3b24b0b583042b3fdac8392ddf9"
  },
  {
    "url": "daily-thinking-future-life.html",
    "revision": "06d8ea79620a44415be7997fb4323d5a"
  },
  {
    "url": "data-mining-random-state.html",
    "revision": "d988e7e7256057b4d2db9140899282e8"
  },
  {
    "url": "get-part-video-to-gif.html",
    "revision": "54cb253dee577a21f5fecf1b3d1bf3b7"
  },
  {
    "url": "index.html",
    "revision": "bcbdf5a7a17934bf37727cf8d02acada"
  },
  {
    "url": "make-blog-by-hugo-and-github.html",
    "revision": "3eb52b2ddb7ec987637aecbbe0436941"
  },
  {
    "url": "picture-bed-aliyun-oss-picgo.html",
    "revision": "7930420c01116a9e09a043d91ee1f9df"
  },
  {
    "url": "python-problem-numpy-show-config.html",
    "revision": "a06daf85f8854324bf80d7a0261245bd"
  },
  {
    "url": "qgis-tutorial-base-one.html",
    "revision": "b48ca3b91d7b42a4448498ca4c306bde"
  },
  {
    "url": "qgis-tutorial-base-two.html",
    "revision": "b822c674aec826ae84c05d614f979dc9"
  },
  {
    "url": "tag/ADB/index.html",
    "revision": "905cff1629c3ce7156eb413915f06286"
  },
  {
    "url": "tag/GIF/index.html",
    "revision": "209362f4a6d586ddccd6987689021cf7"
  },
  {
    "url": "tag/GIS/index.html",
    "revision": "b99fc8e60e44b8441ca6b18ce33cf6cb"
  },
  {
    "url": "tag/GitHub/index.html",
    "revision": "e34526384a79c95f70ed6ffe2191a0ba"
  },
  {
    "url": "tag/Hugo/index.html",
    "revision": "e1f3e8e384c039997adcc48108574c1e"
  },
  {
    "url": "tag/index.html",
    "revision": "4996b9bc0586a7439c6df0c1500c6e0b"
  },
  {
    "url": "tag/Numpy/index.html",
    "revision": "3dce89a60f2fa31dd0bec2ec3c7c0667"
  },
  {
    "url": "tag/PicGo/index.html",
    "revision": "6972b4e565bafd0aa6c050ce1e7ac2a1"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "0508894a74de7a7f169a6c0569b2567d"
  },
  {
    "url": "tag/QGIS/index.html",
    "revision": "2918e2a765f049161ad5582a13ef5177"
  },
  {
    "url": "tag/博客搭建/index.html",
    "revision": "c0e7172f2beb499b84ad17f5916d2daa"
  },
  {
    "url": "tag/图床/index.html",
    "revision": "360c897bf3dd0b745eefab05cf0be56e"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "462a403f7991f1bd51339d475e8babba"
  },
  {
    "url": "tag/思考/index.html",
    "revision": "94a4f6142792a1d865d2f5e0d8d5ba78"
  },
  {
    "url": "tag/教程/index.html",
    "revision": "cd0553e5a9bcf2d35411e7ace1be8892"
  },
  {
    "url": "tag/数据挖掘/index.html",
    "revision": "09ac67f74912ad604daab806cd745b09"
  },
  {
    "url": "tag/格式转换/index.html",
    "revision": "62f64901aeffc9624cd9cee52789f727"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "0e616e782ed2864d625c80c0e7dac1b3"
  },
  {
    "url": "tag/篮球/index.html",
    "revision": "0ffe0d0e5a6e9bc6a1e73a0d9779bdff"
  },
  {
    "url": "tag/问题/index.html",
    "revision": "ea05b584ea79a31c723af935cf50d008"
  },
  {
    "url": "tag/阿里云/index.html",
    "revision": "c8910b3a00acba53af0e4a842261f8f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "e2f477ebaa91e294882fd4785d5ca8fd"
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
