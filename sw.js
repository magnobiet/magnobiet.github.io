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

  workbox.precaching.precacheAndRoute([{"revision":"26f5ce114b3e6ce4c25d754bf9fb4ad5","url":"404.html"},{"revision":"273f2fdebf282806e234083dd4edf316","url":"android-chrome-144x144.d96d0e2c.png"},{"revision":"5088a63d002661a7290a193b6a37a141","url":"android-chrome-192x192.2e8808d9.png"},{"revision":"d6b26d6a2f17c8bc1cd09484b82ace6f","url":"android-chrome-256x256.f216f8f8.png"},{"revision":"ad058c7c2b3f814a399c4ee26c35b7a8","url":"android-chrome-36x36.f0c47f26.png"},{"revision":"16e3e8c39ac9389c115498344c038790","url":"android-chrome-384x384.c0c56896.png"},{"revision":"501944576a8aba972e616c69d47340bc","url":"android-chrome-48x48.cb49ec1a.png"},{"revision":"d7b1deb08109492595bb9303350fb816","url":"android-chrome-512x512.f7c1b46b.png"},{"revision":"0218912a4758cbb129618fe4adaf2beb","url":"android-chrome-72x72.c663f580.png"},{"revision":"f80f527ec08237764332d54908020e41","url":"android-chrome-96x96.be9b8f59.png"},{"revision":"791457db62244fa50a23f000ced5c649","url":"app.15bb1a9e.js"},{"revision":"455163150c541c4666d6d9d5da9f3582","url":"apple-touch-icon.be4732db.png"},{"revision":"f7d32e6bde2363d276f2754dc8345ba3","url":"favicon-16x16.07ac5146.png"},{"revision":"322da080a28a8302dbb0a2409b1f827a","url":"favicon-194x194.69a505ec.png"},{"revision":"2d08258b8cbf1dbc77a260052e665f91","url":"favicon-32x32.f51279a0.png"},{"revision":"ed81680db98006982d4c441e3669db9d","url":"google9133bf0da9c1b52a.html"},{"revision":"1df2fb908894792be8b52d91e2f654a7","url":"index.html"},{"revision":"260708dc8b09f5087748d7fc3fb8a737","url":"main.8a3a1ee9.css"},{"revision":"a2050e48bc111fa5cb8e104afe117196","url":"safari-pinned-tab.2c401b91.svg"},{"revision":"fcfc347fbc2b45f8ac17549be1fb02cc","url":"share-preview.7d858fa3.png"},{"revision":"08bbef1416e7b239c94594b9f6a9b99a","url":"site.webmanifest"}]);

}
