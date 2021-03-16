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
    "url": "about-me.html",
    "revision": "8c1678d91dadd0db70e16e12cceb4c56"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "e82c3d2bd05c8cd9059f82d35d777694"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "16c06e53f2ecf7527a7eb81224309a87"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "fcc313b8d8442b7db7f19b6b6e0c7abc"
  },
  {
    "url": "browserconfig.xml",
    "revision": "442e9f6c5a719398e36f3bb2f7a43b8e"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "a211f3d1a84fdf3bcc36abf6f00b2e0d"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "f0792d1d03b6537162d38b13a57a4949"
  },
  {
    "url": "favicon.ico",
    "revision": "1e290107ddecddb6c4d48f5d0e52c461"
  },
  {
    "url": "fonts/glober-bold.otf",
    "revision": "121e82bcc734bcc455ba860242946217"
  },
  {
    "url": "fonts/glober-light.otf",
    "revision": "32a3ac5c11cc78938242b6647345e6d8"
  },
  {
    "url": "fonts/glober-regular.otf",
    "revision": "8b3cab254968dd1131b832755c9d006a"
  },
  {
    "url": "fonts/glober-semibold.otf",
    "revision": "5ce32fc4cbc95cea0ebef61f05041953"
  },
  {
    "url": "fonts/glober-xbold.otf",
    "revision": "a928de9dafa6444eef7771df1b82a646"
  },
  {
    "url": "images/close.svg",
    "revision": "ad4201fd617ad9eae86ef25156b27991"
  },
  {
    "url": "images/glitch-transition.gif",
    "revision": "8766d9d13c4b259612860adcdd243297"
  },
  {
    "url": "images/me.jpg",
    "revision": "845a1c5d6888d9751660ea4d8bed1f9c"
  },
  {
    "url": "images/noise.png",
    "revision": "a01861329c124a24a9fc7514f2c3c7c7"
  },
  {
    "url": "images/social-2x.png",
    "revision": "8324fad07b3af0f69b682e69cedab9b7"
  },
  {
    "url": "images/social.png",
    "revision": "5215b0661d416476f4bab9e60c075aab"
  },
  {
    "url": "index.html",
    "revision": "d24dd482cee4a52f50b9ba638b249c3a"
  },
  {
    "url": "mail.php",
    "revision": "a49d52b0259787772f55c4dfca42857d"
  },
  {
    "url": "manifest.json",
    "revision": "1ca898a274829a1c1997f4eea457fda8"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "841fb5a19128de6f62b958fe87f9fb3a"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "c557ee3f42b398e56e3abd9689c6e029"
  },
  {
    "url": "scripts/main.min.js",
    "revision": "6566b364112e33a3d7e54972c9cd6dfb"
  },
  {
    "url": "styles/main.css",
    "revision": "95b99b6149662584cc07f48cef6f7e0c"
  },
  {
    "url": "styles/main.min.css",
    "revision": "25fc61c2a859054e7bee7d643c56d551"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
