const CACHE_NAME = 'presensi-v5';

const urlsToCache = [
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 🔥 INSTALL → simpan cache awal
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 🔄 ACTIVATE → hapus cache lama
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});

// 🌐 FETCH → ambil dari cache dulu, baru internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
