self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cozy-farm').then(cache => 
      cache.addAll([
        './',
        'index.html',
      'app.js',
      'manifest.json',
      'sw.js',
      'icon-512.png',
      'bg.jpg',
      'bgm.mp3',
      'VT323-Regular.ttf'
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});