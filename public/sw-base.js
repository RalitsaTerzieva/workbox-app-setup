importScripts('workbox-sw.prod.v2.0.0.js')

const workboxSW = new self.WorkboxSW();

const THIRTY_DAYS_IN_SECONDS = 60 * 60 * 24 * 30;

workboxSW.router.registerRoute(/.*(?:googleapis|gstatic)\.com.*$/, workboxSW.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts',
    cacheExpiration: {
        maxEntries: 3,
        maxAgeSeconds: THIRTY_DAYS_IN_SECONDS
    }
}));

workboxSW.router.registerRoute('https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css', 
    workboxSW.strategies.staleWhileRevalidate({
        cacheName: 'material-css'
}));

workboxSW.router.registerRoute(/.*(?:firebasestorage\.googleapis)\.com.*$/, workboxSW.strategies.staleWhileRevalidate({
    cacheName: 'post-images'
}));


workboxSW.precache([]);