/* global importScripts, workbox */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {

  workbox.setConfig({
    debug: false
  });

  workbox.core.setCacheNameDetails({
    prefix: 'magnobiet-com',
    suffix: 'v2-2022'
  });

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-stylesheets'
    })
  );

  workbox.routing.registerRoute(
    /\.(?:js|css|html|json)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'static'
    })
  );

  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|svg|ico)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60
        })
      ]
    })
  );

  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

}
