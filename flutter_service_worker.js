'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "b493275d5cfb28c62864809bfa09f167",
"/": "b493275d5cfb28c62864809bfa09f167",
"main.dart.js": "1aa6aebd5cd942d20764ad90934c31ba",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "e30f6a9c18fa876b325dbdbf2d63aa0e",
"assets/NOTICES": "f46d3f3d0521948d83f55ec0dd8ffa90",
"assets/FontManifest.json": "037b695bb4cef093d6393c53c0379f96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/webServices.png": "a15d37a24ac473dbff2d9a59ff1a35da",
"assets/assets/images/splash.gif": "74e284d19ad344602377b11d106ea6c4",
"assets/assets/images/portfolio11.webp": "7ba8fe91cf048f2d59764ba32a9e1b25",
"assets/assets/images/portfolio2.png": "78f7e124a8dfc501d509ff2cd8ae2188",
"assets/assets/images/portfolio6.webp": "4af75d5142f824f96a9bbd9a00ab881d",
"assets/assets/images/drawerIcon.png": "d40e399fac399801e7452c512a6b0812",
"assets/assets/images/portfolio10.webp": "faf4b67c7b3cd5c7b66ca9e847371afb",
"assets/assets/images/instagram.png": "e57c5a7524ec14b78513070b56ae58bd",
"assets/assets/images/fb.png": "ca88b216db9dc6b6fa09e3ebb1705e72",
"assets/assets/images/customerServices.png": "79ac9cbdcf490b244369be06119f3f0f",
"assets/assets/images/socialMediaServices.png": "c589e225b47eecedf378005c51c1858c",
"assets/assets/images/photoshotServices.png": "96470bb43e94d63368d8d70732c9b884",
"assets/assets/images/portfolio1.webp": "3b5f87990f814f22c939da09139b5e81",
"assets/assets/images/logo1.png": "1c99890821eb8be46430c361596130d0",
"assets/assets/images/dataEntryServices.png": "99db12741f74171c0ba2a8b336493e2f",
"assets/assets/images/seoServices.png": "6712e47a08529b4d06941738754b2a59",
"assets/assets/images/logo2.png": "bc571f83a6fe86408983ffdcdd48e25b",
"assets/assets/images/graphicServices.png": "4d0e2a8fb6f451ad81dd6b8d0fe21e4e",
"assets/assets/images/twitter.png": "60b4f6b8e0a4a0638d5fa21c376b47f3",
"assets/assets/images/linkedIn.png": "d70b122caeda5be8dd41f617cf9b9248",
"assets/assets/images/portfolio3.webp": "5542e94252e313508a535e63455b5c78",
"assets/assets/images/portfolio8.webp": "9d8262bf647422f0830acdf33d42515e",
"assets/assets/images/profile2.jpeg": "796d192939da3d9ae5347e203549ef1c",
"assets/assets/images/youtube.png": "f128076c745202406f4fa6bcc5c11015",
"assets/assets/images/mobileServices.png": "823ea9657f9cea5711cc3de2483f21f0",
"assets/assets/images/portfolio4.webp": "f76d128638ba04cd0f4c7f6d50c5c349",
"assets/assets/images/photoEditingServices.png": "fa3a6046f68b0eadeb19eb478b9a7ced",
"assets/assets/images/whatsapp.png": "b471b48dd3755261ca03bb2f3a746b08",
"assets/assets/images/portfolio12.webp": "ff81e0371870756c5aad63c368d36851",
"assets/assets/images/marketingServices.png": "f0b0ca682e205d39dd6423910f1ce08c",
"assets/assets/images/portfolio5.webp": "85edf4827a7cad1e3f34861e4c419edb",
"assets/assets/images/googleAdvertiseServices.png": "873ebc4b4c138288f988d4e5b2144d64",
"assets/assets/images/profile1.png": "9865d29c8cf79c6bcae1ea0f46c60a27",
"assets/assets/images/videoServices.png": "3008705d496081afe589f627f7426f09",
"assets/assets/images/profile3.jpeg": "65619e20287b7b18c566cf4c83ee6570",
"assets/assets/images/portfolio9.webp": "cea205d304c716332cad89a5f37c63ad",
"assets/assets/fonts/mulish_black.ttf": "50006ac3857ea680fd0a1082b7c64ceb",
"assets/assets/fonts/sf_pro_display_regular.otf": "f4245a5167ad609c4ba2d0850d553bd2",
"assets/assets/fonts/gotham_medium.otf": "4518b6f067e234d6233006497cd0b36d",
"assets/assets/fonts/future_hv.TTF": "074a76d5e8105426711acdb8923bff90",
"assets/assets/fonts/babib.ttf": "2b4ed315f1c83555c41d6773d6754d99",
"assets/assets/fonts/anti_pasto_reg.ttf": "d477d0ec831cf90942527c703701a6c4",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
