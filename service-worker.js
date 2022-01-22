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
    "revision": "1dd00b6d40d135c94ad97ca17791680f"
  },
  {
    "url": "adb-phone.html",
    "revision": "c3c93c32fb78f54662fc03b13fb5e533"
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
    "url": "assets/js/14.663f5e8a.js",
    "revision": "138fc81aa1b3ec40ac8d6991dc6e306c"
  },
  {
    "url": "assets/js/15.1b2bafe0.js",
    "revision": "fe76fea1a6522995f9d653fb642570ff"
  },
  {
    "url": "assets/js/16.b9001bcd.js",
    "revision": "0c7a0d18b6017759606cd99ee833d48a"
  },
  {
    "url": "assets/js/17.25d5c66b.js",
    "revision": "f68c5e301da3666623d44610c1ff8427"
  },
  {
    "url": "assets/js/18.efc7576a.js",
    "revision": "feebb0ae5c5fd9ea730aafac65d6cb2c"
  },
  {
    "url": "assets/js/19.7df6d260.js",
    "revision": "92d8478bd2a6d44dd96478dc9e51ad45"
  },
  {
    "url": "assets/js/20.0a54f468.js",
    "revision": "be23f906cd2ce0522cb2f32eb8305d3e"
  },
  {
    "url": "assets/js/21.4e7653fb.js",
    "revision": "bb9e6397f1ca683a7e93e9662de6affd"
  },
  {
    "url": "assets/js/22.5d2c13c7.js",
    "revision": "a0b8d5384c2567176e177f245bae4a52"
  },
  {
    "url": "assets/js/23.4a41994b.js",
    "revision": "84b0d2f78e638d55c3efcdbaac3da9a9"
  },
  {
    "url": "assets/js/24.fe1e8cfa.js",
    "revision": "fa8c9f1073df7ab3b2f94330932b5b9d"
  },
  {
    "url": "assets/js/25.4a6bf464.js",
    "revision": "d575cc2ce87910b42429f085e1a54687"
  },
  {
    "url": "assets/js/26.78f3dcbb.js",
    "revision": "b8190c43fefe2b5e5b115300cd0a8075"
  },
  {
    "url": "assets/js/27.4a344430.js",
    "revision": "9b755f5ac0a45683210577fbdcb724c7"
  },
  {
    "url": "assets/js/28.62fce8fe.js",
    "revision": "2cf97f419c6959c2e8d4dd551224a2bf"
  },
  {
    "url": "assets/js/29.7470ccc0.js",
    "revision": "1901462d019d45fd9720298a99c93e4c"
  },
  {
    "url": "assets/js/3.bc77920b.js",
    "revision": "f99abf1657ee43287bb56f9eacf8e844"
  },
  {
    "url": "assets/js/30.dd45db15.js",
    "revision": "41e502bc74f54febb39d6cc7aea371b3"
  },
  {
    "url": "assets/js/31.1ed4e681.js",
    "revision": "0f8bcc6624fa9042157132c5b746dceb"
  },
  {
    "url": "assets/js/32.b151f6c5.js",
    "revision": "d77df4b94d5948dfc43d62354d5b457d"
  },
  {
    "url": "assets/js/33.cea0d5ee.js",
    "revision": "2eff46a53e997663404387d2447fe673"
  },
  {
    "url": "assets/js/34.048eef43.js",
    "revision": "3b157c841e7c57c0978d257239f38d35"
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
    "url": "assets/js/9.74e30184.js",
    "revision": "c6dc361d826b53d9929525cad29ded93"
  },
  {
    "url": "assets/js/app.969ca8ba.js",
    "revision": "3c122c23f807593bbaa8d13756b9a68f"
  },
  {
    "url": "basketball-middle-operate-ball.html",
    "revision": "22b70d73d7f1402e91aaaa038a920c01"
  },
  {
    "url": "categories/GIS/index.html",
    "revision": "d45643b331589af634894881db66e9a0"
  },
  {
    "url": "categories/index.html",
    "revision": "df8de253119717da9e0fa5e32ab909dd"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "eef1a9883fbd89d2125fae8304f0fbbc"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "b648f291da954cdd536f9d1237819402"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "536d3942a4ec8f8eb51284b27cf5e2de"
  },
  {
    "url": "categories/数据挖掘/index.html",
    "revision": "0452c79af8fa062ac51c2187059161d2"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "6631bbc21872f9e0db5e0b2e66833ce4"
  },
  {
    "url": "daily-thinking-future-life.html",
    "revision": "e80132ad0efbd99358c0324537573080"
  },
  {
    "url": "data-mining-random-state.html",
    "revision": "f822061c36e8e893a2e946721db9dbf7"
  },
  {
    "url": "get-part-video-to-gif.html",
    "revision": "6c744244c186f3d61d16c1d847c3091a"
  },
  {
    "url": "index.html",
    "revision": "554abfa33a55a40144b88ce49fc79388"
  },
  {
    "url": "make-blog-by-hugo-and-github.html",
    "revision": "8d1ef80e9397f6b9650fd206e7a1ecf3"
  },
  {
    "url": "picture-bed-aliyun-oss-picgo.html",
    "revision": "064ebe477dd3531af86fa311a0606e98"
  },
  {
    "url": "python-learning-guide-to-python.html",
    "revision": "aba7b03a65c00df89a141a84ef7de55c"
  },
  {
    "url": "python-learning-os-list-dir-file-rename.html",
    "revision": "6cc3fdd1473ebcd46e69c47a56ecb4a1"
  },
  {
    "url": "python-learning-pick-up-conda-cmd.html",
    "revision": "fffb4304deef3585bcde12383fa8a524"
  },
  {
    "url": "python-learning-protect-code.html",
    "revision": "21f600af08071e81d9c22fd85ffe4dd7"
  },
  {
    "url": "python-learning-pycharm-dataframe-warning.html",
    "revision": "e6fc3d9abfba4c9ecc67ef31912fd668"
  },
  {
    "url": "python-learning-pyinstaller-problem.html",
    "revision": "fc3dc0b6fc75ac82a7081376cf76c6aa"
  },
  {
    "url": "python-learning-pyinstaller-python-to-exe.html",
    "revision": "b762e974b1734aa8e4251cdac2f9b558"
  },
  {
    "url": "python-learning-zip.html",
    "revision": "0c7dbe456007a0152def206bcc2fc480"
  },
  {
    "url": "python-problem-error-in-pip-install-gdal.html",
    "revision": "c4248c555d113f6615e4ec1b45eb1ba9"
  },
  {
    "url": "python-problem-error-in-python-exe-pyd.html",
    "revision": "f2a02eb36c14039e264668c7fe7392e2"
  },
  {
    "url": "python-problem-install-package-from-inter.html",
    "revision": "02e261497ea5136e27b9ed12c319da09"
  },
  {
    "url": "python-problem-numpy-dll-load-failed.html",
    "revision": "0d3f1e40dd7cd6c025d8d041dde8ecb7"
  },
  {
    "url": "python-problem-numpy-show-config.html",
    "revision": "66c7d421ee56c692839a835a63d02762"
  },
  {
    "url": "qgis-tutorial-base-one.html",
    "revision": "12a56c2c81f43ee990fde9111e40d6a7"
  },
  {
    "url": "qgis-tutorial-base-two.html",
    "revision": "55c70148b7b021b98a32a13bdbdb7a4d"
  },
  {
    "url": "tag/ADB/index.html",
    "revision": "2f2006e87774528ed46ac9bf5955e723"
  },
  {
    "url": "tag/conda/index.html",
    "revision": "792f53c5de2109e98ac3abe74b78b59a"
  },
  {
    "url": "tag/DataFrame/index.html",
    "revision": "815e2fa4981130b35ef86a9f41d69e4d"
  },
  {
    "url": "tag/GDAL/index.html",
    "revision": "f700e501f4efe0988c744b7e5e0422f6"
  },
  {
    "url": "tag/GIF/index.html",
    "revision": "49fa2006357770f59a8d5c8dc5458f9f"
  },
  {
    "url": "tag/GIS/index.html",
    "revision": "c368eb5be3bf4ef4c68215ce3e25fabb"
  },
  {
    "url": "tag/GitHub/index.html",
    "revision": "d1b9d46116ea5801061fcca399d8da00"
  },
  {
    "url": "tag/Hugo/index.html",
    "revision": "73ec8965b0f247b1c55d06dda98feeb7"
  },
  {
    "url": "tag/index.html",
    "revision": "b3fc32aa454a42ffbadd2109ed523cae"
  },
  {
    "url": "tag/listdir/index.html",
    "revision": "6f72bd27648d45f15936ca1049bbe615"
  },
  {
    "url": "tag/Numpy/index.html",
    "revision": "b1fb6c8ae9b11d85eb7e286c27ba4825"
  },
  {
    "url": "tag/PicGo/index.html",
    "revision": "3af9dbecec8e05b7e1878b0e5b73cb76"
  },
  {
    "url": "tag/Pip/index.html",
    "revision": "6dc76d9ca847f034a7412806a6dce705"
  },
  {
    "url": "tag/Print/index.html",
    "revision": "3d90d0b105e7c699a3f0c96edad138fa"
  },
  {
    "url": "tag/Pyd/index.html",
    "revision": "b5132bad59a9c687b2bd8c944bfbc4b5"
  },
  {
    "url": "tag/pyinstaller/index.html",
    "revision": "ba84fc9b891c3fb05668a4a9ba89b59c"
  },
  {
    "url": "tag/Pyinstaller/index.html",
    "revision": "d041a0219883c8a48493a7ddf5e86ec2"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "0bfe2dd78646c1c7570f4cf3704aefda"
  },
  {
    "url": "tag/Python/page/2/index.html",
    "revision": "1a85ef7a751fb722e70ea052df019eb2"
  },
  {
    "url": "tag/QGIS/index.html",
    "revision": "1b858b10852e97811a96f85f7411e696"
  },
  {
    "url": "tag/Warning/index.html",
    "revision": "46d279699eaff020ad0376e620d392e3"
  },
  {
    "url": "tag/Zip/index.html",
    "revision": "40d5ba33646adadcbfdf68d8882f0b83"
  },
  {
    "url": "tag/保护/index.html",
    "revision": "6702511ebcecc934e9480d36bd7f69ca"
  },
  {
    "url": "tag/博客搭建/index.html",
    "revision": "a8546eefb2d170bb688f013067f1b76a"
  },
  {
    "url": "tag/图床/index.html",
    "revision": "294cad7339deb2c62b8af68c6c2eca83"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "759b0e20108f9e981a6b022aa64d80bd"
  },
  {
    "url": "tag/思考/index.html",
    "revision": "9092756a58ed33a8d4fea413865fa914"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "61054fb78c08bc41d757d075f0146521"
  },
  {
    "url": "tag/教程/index.html",
    "revision": "7d2b9a68e95a77621feed459d37ee136"
  },
  {
    "url": "tag/数据挖掘/index.html",
    "revision": "ec2331aceedd218c0e52ea53763ba3d7"
  },
  {
    "url": "tag/格式转换/index.html",
    "revision": "eb33086b585b659bdbaf2b4192fbdbdf"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "99a0778346226221c1494ea30c51c7af"
  },
  {
    "url": "tag/篮球/index.html",
    "revision": "fe692309702d0ada4a637eda0e250710"
  },
  {
    "url": "tag/问题/index.html",
    "revision": "d7bef322d001305230f2a894c075f34d"
  },
  {
    "url": "tag/阿里云/index.html",
    "revision": "90b8d4b9abbfc4fd2fa32d8a513b553d"
  },
  {
    "url": "timeline/index.html",
    "revision": "0070a810ce518d694a69e9cb1f465fad"
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
