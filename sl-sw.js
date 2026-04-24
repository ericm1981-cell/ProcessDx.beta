const CACHE = 'sitelevel-v1';
const ASSETS = [
  '/sitelevel.html',
  '/worksample.html',
  '/processdx.html',
  '/linerx.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
