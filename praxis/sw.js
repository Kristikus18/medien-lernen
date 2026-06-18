const CACHE_NAME = "medien-praxis-v1";
const FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "../data.js",
  "../icon-192.png",
  "../icon-512.png",
  "../apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  const isPraxisFile =
    url.origin === location.origin &&
    (url.pathname.endsWith("/praxis/") ||
      url.pathname.endsWith("/praxis/index.html") ||
      url.pathname.endsWith("/praxis/styles.css") ||
      url.pathname.endsWith("/praxis/app.js") ||
      url.pathname.endsWith("/praxis/manifest.webmanifest") ||
      url.pathname.endsWith("/data.js"));

  if (isPraxisFile) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
