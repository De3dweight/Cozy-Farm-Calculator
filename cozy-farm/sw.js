const CACHE_NAME="cozy-farm-v3";
const ASSETS=[
  "./",
  "./index.html",
  "./app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./bg.jpg",
  "./wood.jpg",
  "./bgm.mp3",
  "./fonts/VT323-Regular.ttf",
  "./fonts/PressStart2P-Regular.ttf"
];

self.addEventListener("install", event=>{
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache=>Promise.allSettled(ASSETS.map(asset=>cache.add(asset))))
  );
});

self.addEventListener("activate", event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.map(key=>key!==CACHE_NAME && caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event=>{
  event.respondWith(
    caches.match(event.request).then(res=>res||fetch(event.request))
  );
});
