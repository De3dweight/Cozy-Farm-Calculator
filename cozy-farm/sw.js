const cacheName = 'cozy-farm-v1';
const filesToCache = [
  './',
  'index.html',
  'app.js',
  'sw.js',
  'manifest.json',
  'icon-512.png',
  'bg.jpg',
  'bgm.mp3',
  'VT323-Regular.ttf'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});