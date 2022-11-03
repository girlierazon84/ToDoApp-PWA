const cacheName = 'todoapp-offline';
const preCache = [
    './',
    './index.html',
    './mystyle.css',
    './myscript.js',
    './manifest.json'
]



self.addEventListener('install', e => {
    console.log('The SW is installed!');
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(preCache))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});