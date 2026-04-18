const CACHE_NAME = 'presensi-v1';

self.addEventListener('install', e => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', e => {
  // default saja (belum cache berat)
});