/* global importScripts, workbox */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {

	workbox.setConfig({
		debug: false
	});

	workbox.core.setCacheNameDetails({
		prefix: 'magnobiet-com',
		suffix: 'v1'
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

	workbox.precaching.precacheAndRoute([{"revision":"5394ce753ff388d08d3770502d9b7b8e","url":"404.html"},{"revision":"3b242b0882e69db27b438f0b5e188b60","url":"android-chrome-144x144.5d9d5400.png"},{"revision":"aa04b04dcee13caeaaf3872726d22406","url":"android-chrome-192x192.7374e0a4.png"},{"revision":"e2c92859411c2878f517c4d1df6f4d50","url":"android-chrome-256x256.b41cbf27.png"},{"revision":"b06a7ac0feb658bd1f2cf7eed848cf7f","url":"android-chrome-36x36.9b97462a.png"},{"revision":"4cebb64e014add9c111622f0ce4948cd","url":"android-chrome-384x384.2e2fa43e.png"},{"revision":"9e18bd32265dd33b96f8f6ebbef53d93","url":"android-chrome-48x48.c8c7fa7e.png"},{"revision":"ddab6bc9f8718a4021fda06fa93b6499","url":"android-chrome-512x512.e1b8951d.png"},{"revision":"ed156c25370ef56567d4ec4ec0c8e382","url":"android-chrome-72x72.4d8ff35d.png"},{"revision":"ddb2b5314fc5e3611c681f50e64753c6","url":"android-chrome-96x96.a2737158.png"},{"revision":"da866f60fc77188e5b5e8dcb1b2dcab4","url":"app.0313c2ae.js"},{"revision":"922896a2e93583f27f58dc924e59f124","url":"apple-touch-icon.a7e3b695.png"},{"revision":"462bd988c33f157c6aa11e863156e8b7","url":"favicon-16x16.469b4b3b.png"},{"revision":"d61d477c532de9b6792a02a91a1376db","url":"favicon-194x194.5342e610.png"},{"revision":"a63a213ae6d7f1f0f0e2dec89f2e665e","url":"favicon-32x32.b01651cb.png"},{"revision":"7cafe3751e4a732996589512bb0f9f86","url":"favicon.cbf1b0ae.ico"},{"revision":"ed81680db98006982d4c441e3669db9d","url":"google9133bf0da9c1b52a.html"},{"revision":"673ac0f751a1257422f26d1a0244a4fa","url":"index.html"},{"revision":"113fdb15e1c91718931c8390b2173061","url":"main.ed5a8dac.css"},{"revision":"3ee9707e40bff8ced324d87665df58ef","url":"safari-pinned-tab.1f2a1ca2.svg"},{"revision":"f4c119c9e9b48382aba1730d02a92f57","url":"site.webmanifest"}]);

}
