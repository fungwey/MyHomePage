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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "11676be94ffcc67d2adff12cef47d4ae"
  },
  {
    "url": "about/index.html",
    "revision": "5290518b0fde3bde148e9d49ae27d02d"
  },
  {
    "url": "assets/css/0.styles.44946212.css",
    "revision": "88607c356ea7293075add4124524d48e"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.06f21dc2.js",
    "revision": "5fa95692f3bea6a7a57c2f0357f0080d"
  },
  {
    "url": "assets/js/11.19c62109.js",
    "revision": "59ef051badab1e6853a29914986c8dfd"
  },
  {
    "url": "assets/js/12.417e583a.js",
    "revision": "cbd81f09593eceae5a83cb50a8b5af75"
  },
  {
    "url": "assets/js/13.52a297b0.js",
    "revision": "f6d1ac6601813b6888f7e8831744d49b"
  },
  {
    "url": "assets/js/14.63eeca5f.js",
    "revision": "c404c7f5c2bca90e2c2de44b267e7642"
  },
  {
    "url": "assets/js/15.63084e62.js",
    "revision": "c4950eb63398ee16120191b8a1a68c63"
  },
  {
    "url": "assets/js/16.f0bb592b.js",
    "revision": "7f87a1fccf5bde5e14fc3b829006027b"
  },
  {
    "url": "assets/js/17.c05f46ac.js",
    "revision": "082ec38bddf9c8a975a0fecc73a584ef"
  },
  {
    "url": "assets/js/18.63506e1c.js",
    "revision": "9bbe71a396e89070af1b935e25996239"
  },
  {
    "url": "assets/js/19.a61f9ee6.js",
    "revision": "b27f5f4b3ecbb00285eee1137f7c1ad1"
  },
  {
    "url": "assets/js/2.85fb9aa8.js",
    "revision": "03fa57901bb91e0c13543234810b827b"
  },
  {
    "url": "assets/js/20.c0f99a69.js",
    "revision": "60d44facf60fbe46e94736bda876175c"
  },
  {
    "url": "assets/js/21.d680c238.js",
    "revision": "cdfb06cc295abdbb65b8c99811fee509"
  },
  {
    "url": "assets/js/3.0c5556ac.js",
    "revision": "c8372231b2e5d74bce5ef323c07214ca"
  },
  {
    "url": "assets/js/4.5fc753de.js",
    "revision": "c3d81372a5406239a36a906163cd27b9"
  },
  {
    "url": "assets/js/5.963f7c73.js",
    "revision": "ba1094fbb84054bf43dcc8e12aedf00f"
  },
  {
    "url": "assets/js/6.ff3b66b1.js",
    "revision": "bf7d014b0c98452b7f338412eebd2594"
  },
  {
    "url": "assets/js/7.580d12c2.js",
    "revision": "d26f8d4984b5061c91408a1a772bfc0b"
  },
  {
    "url": "assets/js/8.c7449347.js",
    "revision": "e81cdcbc4752c297a377d6240f113c27"
  },
  {
    "url": "assets/js/9.7e4e85ae.js",
    "revision": "f8a37781d377476a89ac6fdc03a592b6"
  },
  {
    "url": "assets/js/app.5b16e818.js",
    "revision": "2e8524564451cad7e7d2ba2054fac4be"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "8ce4a85906cb3d9b917f7efdadc4082c"
  },
  {
    "url": "index.html",
    "revision": "12544565109f32399382a4048e858be1"
  },
  {
    "url": "life/2020-01-01.html",
    "revision": "ebc3bfb2663e22b4214c68221ed6fb44"
  },
  {
    "url": "life/index.html",
    "revision": "409f2df867c903c92cd20f1ee54d043a"
  },
  {
    "url": "massage/index.html",
    "revision": "b91fb005dbb23c9d5e1a060daff2553b"
  },
  {
    "url": "ponder/2020-01-01.html",
    "revision": "97da0e8a25295ff1764800ac98d5ff03"
  },
  {
    "url": "ponder/index.html",
    "revision": "26a302256d995e6950b59f66ac51a219"
  },
  {
    "url": "tags/index.html",
    "revision": "4c9d87e8e71b9f928eb4accbdead4dbc"
  },
  {
    "url": "technology/2020-01-19.html",
    "revision": "80319ad7a76b7d93d6db1f49f787a902"
  },
  {
    "url": "technology/index.html",
    "revision": "8a2017c3e38025dc23f672c4d0a12149"
  },
  {
    "url": "timeLine/index.html",
    "revision": "93611ce9494592aecde0efd58209cd1e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
