'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b725bb84052a8b3cb24d65bcbd1b20be",
"index.html": "6195fda6d7add0d54e28d667f06bf67c",
"/": "6195fda6d7add0d54e28d667f06bf67c",
"main.dart.js": "a9592b997b0675b146a8692a9da9035b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pipe.jenkins": "1e2a7ced6e8c77935aaee5d41ab66211",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b94a81957008377068ba1133eb5e44c",
".git/config": "82e2def00fc31aa1cccdabc31981b176",
".git/objects/57/f94f6895fd338febaf74172b24efca1a2d35bb": "eebcb1655aa01d280d734e47754819c7",
".git/objects/51/9fe6b56e94707e7d3c8b7dda1998b71095722d": "4129a84bda39cffa236142bf4afd00f8",
".git/objects/d0/6ac30d8a5f7109b7a78cc4055c85834b0e7e3b": "f91fefffa5b11be6c4fd4daa733d79fa",
".git/objects/ae/6da03b40699e04e10ecaa5812928e39690b014": "edfbe6550e992dd82a7a786be4fb3d04",
".git/objects/e5/06d05f7b5e84ed48c876e7e9459f6a2b89591b": "c8a3d61bfd95d2544a8f1b4c1802038b",
".git/objects/f5/9e8971e629e4276a8f9e056c97e35c19346240": "32eded96013b7aa23905147955549415",
".git/objects/pack/pack-6554adc74b6ce7fee1f56bb68c2ca3ee51475b94.idx": "2475ff6e7a582c357d312ceb4ac0f5ce",
".git/objects/pack/pack-6554adc74b6ce7fee1f56bb68c2ca3ee51475b94.pack": "005f73ca1cd3fe6ae4c385657fbce6f9",
".git/objects/30/035bea0b381a6e358a0ed5f9b4e97216809cf2": "53874d32ed7ca5c213369464ea4c5247",
".git/objects/0f/26ecee436b0b6741aae39895e26b2c07bc470a": "161331be583986adc27ea4722ba39ce4",
".git/objects/dd/bfd827a605d6200ef0927c399221623c59ba39": "0a89c024de765734f13ec0a433271ec0",
".git/objects/dd/55ee284ad0c63ba4182ddb16799032b3ff3093": "c4633b4d31a5092a23c25c3889228daf",
".git/objects/dc/15dc92b0bd6992093898ac3eb87b4534ebf136": "a50a1e415afb2fa17dcb55ff96443f2a",
".git/objects/aa/8634cfe8998a43ed618e0b75a7840e590b3408": "0bb0b5d9b3a2e9ae358c025c3fde01b4",
".git/objects/ce/f13a6d429fd02bfb5e9b2cd6fac34886b35e2f": "9295444d188db024564e99efa808d967",
".git/objects/70/23e16c014f999a109bbc1023c5c34ac29ffb26": "f1c55b4600d444dcee442b642771f75a",
".git/objects/23/88968299c4ac798ea66bac35152ac15a7a542a": "2fc9e51875b161f44293a0675f3ab3fd",
".git/objects/1d/53b9cb3b3649ef08fddd05a3e9405969cc39a4": "07cc499df11ff2d6ea91aeb07cd229ad",
".git/objects/1d/5f29930a401b865b34683f6274701eb3f48723": "4d77f1cdbd3c1775d402c71e8d10608f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6b84cd49552a2b69ed24095fe37bbed2",
".git/logs/refs/heads/main": "6b84cd49552a2b69ed24095fe37bbed2",
".git/logs/refs/remotes/origin/HEAD": "015b2ed7a72be5f30bf6abfc8acc2e4b",
".git/logs/refs/remotes/origin/main": "3a6f24bae1513d6e65c883df524ae34e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f7b424403a8c563b2e0c41ca11b83516",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f7b424403a8c563b2e0c41ca11b83516",
".git/index": "ea43b67af5509186bc7a2825d63e6c06",
".git/packed-refs": "bc55d5684e91bc186843f10a05164cd0",
".git/COMMIT_EDITMSG": "55741f1c58d562145fbf82a4676ea3cd",
"assets/AssetManifest.json": "75934b52c427a1646e93d9b2b16563ba",
"assets/NOTICES": "628b909d4fa699324be20001387f7674",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "3ca309487f05e1d6ab0cdb1d99ede4dc",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/svg/car_icon.svg": "d5f5f981eaf4468f21b46f08bb4c3f8d",
"assets/assets/svg/logo_full.svg": "ad4c75fb6077e0f6f594309512de8a4b",
"assets/assets/svg/wheel.svg": "4e8ae5d89f3ed09a0d4e2c7ab45e8207",
"assets/assets/svg/delete_user.svg": "95933add37706c94f7c53e74ccbaf78b",
"assets/assets/svg/question_circle.svg": "df05e3e103ee9c66a330392887cf6f01",
"assets/assets/svg/logout_person.svg": "c06fca9b34c617c085547eaea3e4efda",
"assets/assets/svg/hands_shake_icon.svg": "1905876d08740d672412680dd8f716ae",
"assets/assets/svg/service_sessions.svg": "5b1431bd4df81f616a65c96bca23d55b",
"assets/assets/svg/person_icon.svg": "9c9ec7f31be3aa6d337f75a77e718c56",
"assets/assets/svg/gbp_sign.svg": "6c6b9e00e08e781cf0b5b2943812fe8a",
"assets/assets/svg/change_email.svg": "665da3fb2726ce5dc84b17d7de9b51e6",
"assets/assets/svg/wheel_white.svg": "0d07602e44d57fc9c2fb86c5820c6281",
"assets/assets/svg/pencil.svg": "dc10a0950aa21a2e46ad95ceb5ca4e87",
"assets/assets/svg/change_name.svg": "2bfcee0f5a5e30d247ba26892bb80730",
"assets/assets/svg/wheel_button.svg": "d3dad1e3cdc4d8eaa90d8895cf8227d7",
"assets/assets/svg/logo.svg": "ade3d14c72f5b12dca4c840a73ec7614",
"assets/assets/svg/archive_empty.svg": "8c5c4f11f520aca11d19ad6ef87d52e7",
"assets/assets/svg/blue_spline.svg": "ca49263f05d22ba50107109f88ca938a",
"assets/assets/other_img/front_car.png": "a489b57b830f117ba9bacefdb67d6837",
"assets/assets/other_img/front_wheel.png": "6761c3f7b370338bf238f26c28bc6e5f",
"assets/assets/other_img/car_service.png": "18d54ef7ee043b283c8446e0d62ab636",
"assets/assets/other_img/vehicle_horizontal.png": "b8490b195c3226dc7f86ecd2c77b46c6",
"assets/assets/other_img/rear_wheel.png": "32ad9b2a04a124421ac0929ca1818082",
"assets/assets/other_img/bacground.png": "83e93f106520fdf252e430c05d2317ef",
"assets/assets/other_img/splash.png": "6173dc052c567a39e5d89cf2ce0a86d8",
"assets/assets/other_img/logo.png": "df25ffb81a3859b51ec9d00148219384",
"assets/assets/other_img/vehicle_vertical.png": "7b5a215f769f67734b3833a3c9208e7c",
"assets/assets/other_img/rear_car.png": "f8816b86be4eb33c5661b1a824f31f82",
"assets/assets/other_img/car_with_wheels.png": "988ed1dfda9a6d1401a79c6a35d810e9",
"assets/assets/translations/en.json": "ad665a75f77c73dc35bd6ab292c68186",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
