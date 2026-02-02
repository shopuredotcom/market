/* ======================================================
   ShoPure Service Worker
   Offline + Performance
   ====================================================== */

const CACHE_NAME = "shopure-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./favicon-32x32.png",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(
      response => response || fetch(event.request)
    )
  );
});
