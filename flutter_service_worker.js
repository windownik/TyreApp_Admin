'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b725bb84052a8b3cb24d65bcbd1b20be",
"index.html": "59dcb3af1f952ba56a170acb4156f737",
"/": "59dcb3af1f952ba56a170acb4156f737",
"main.dart.js": "07971455a66d8aa6f50aeb3c38b5abdc",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "d662809113b7fb422abfc4426008e734",
"pipe.jenkins": "1e2a7ced6e8c77935aaee5d41ab66211",
"icons/Icon-192.png": "936bd02ad07ddfa190c2b6f0bc2c2476",
"icons/Icon-maskable-192.png": "936bd02ad07ddfa190c2b6f0bc2c2476",
"icons/Icon-maskable-512.png": "df8cb58f4d04231918a680901660a62f",
"icons/Icon-512.png": "df8cb58f4d04231918a680901660a62f",
"manifest.json": "96af557a94c79cec0d77a3b81c3ba7f0",
"nginx.conf": "deb5f6fa02d91cf6142639f2eda00e5b",
".git/config": "82e2def00fc31aa1cccdabc31981b176",
".git/objects/3e/ab379688d183fb5e6927f972f08d3f3b7e2833": "93c4d1793312b36d6871c35e3370609c",
".git/objects/50/70681dfc1d85ae925ed589f3839c95d711c884": "a3e6fb1fb253ac6e8253108583dad953",
".git/objects/6f/8afe8484adb328a7ec69a4aa63959393548ee8": "456f8738465c1b7bdebc715fc09f9340",
".git/objects/6f/8c9599e00d1f476b15b039f18edd247948f3bc": "9355e2f518933e7e05c924263beec5dc",
".git/objects/5f/ebab65a96d0fddbf1b0b07104c5af6b1ca1b56": "d5b110ea7df47618f1b0b47f1f4c8031",
".git/objects/d9/9ff78b6e9f37e6930182554913b9dc3e98e06d": "b2e97cb4b34851099d718d1568cd541c",
".git/objects/bb/60bfb7fac53c31ae0c93ca419d0882c71c0525": "a40dfd684ff2f7180141eadb9bd34b47",
".git/objects/a2/0956a31cbce86825a5eef3156a1eb6c7963bbc": "791e519adcfb0746fe43747f7ea038a3",
".git/objects/pack/pack-84fd4cf01ea9765e107fed196b9784bc32688d1c.pack": "bf0f2ab3a9021def7a4800a8c506a769",
".git/objects/pack/pack-84fd4cf01ea9765e107fed196b9784bc32688d1c.idx": "cae99dd98ece9b8de5e9d07b6fd6ca2c",
".git/objects/7c/399f5d14e47b5b22f9cd3762da5439d251600c": "adbfb8d87da83279503e6c2fb6a3985e",
".git/objects/45/d2e27eb3c346a1955e49af78cd2fccc76cbd0a": "d9421e1ea667ce42f7b3b37b3f82cb0f",
".git/objects/28/0f2d01ea7186978d8138b5cc86d51fb8df38ff": "9ff4f8c99046e76e7d23a2391e97f345",
".git/objects/7e/9bc5556ad1633d30d6495254d7ac32e8da6da6": "f2816ea4050dc73d2f9679788191cff4",
".git/objects/ba/dbe250439ad36b6ff5f1e8135d7da90fcc6e0c": "587b9104bc8c11cfb7c848910d9b1e4a",
".git/objects/d2/7483dcb78237edef3fe2eee7686b92ec260095": "563aa41d70dcb263898bb5ae834ad1cb",
".git/objects/c5/1af6be21ce398af0005c5daadddf7b13e60ce3": "77c4b98c96eba35fd5e617836a4e0e9d",
".git/objects/c5/93572eef1b9294a9c9115f6fde39f4e0eb9244": "32bec084a72d8736127ca287a2ca621d",
".git/objects/77/b19da6b9622c096ba9f855b60e980ebd67f78f": "d79c6faee8c8d166c0efa13b800e82e5",
".git/objects/77/6f6652f241383142a3902bd303064587430f26": "b8d778a03c0d86607da45b9579551901",
".git/objects/12/c9761344d106c6d9085288b23ede3b07476e59": "e65a62a19228d9745f15cc6edb855bdc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d554cd3be6bcd1879fd341a0b8fa9623",
".git/logs/refs/heads/main": "d554cd3be6bcd1879fd341a0b8fa9623",
".git/logs/refs/remotes/origin/HEAD": "da1ac2af35ae38364dba9ec59a1e25d7",
".git/logs/refs/remotes/origin/main": "84d05ccc5d051a002fcfe059550ec5d5",
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
".git/refs/heads/main": "d093ff24b9d06b483596b43da1acb8d9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d093ff24b9d06b483596b43da1acb8d9",
".git/index": "98ef3d44584a292736ea7535834f1bf3",
".git/packed-refs": "90b2460de6853322395928f5877f9dc6",
".git/COMMIT_EDITMSG": "60b725f10c9c85c70d97880dfe8191b3",
"assets/AssetManifest.json": "278cfa0bfa323d1a9f4aaea4cd5d5de4",
"assets/NOTICES": "883f087ce930e7e19b52e69c4beb1df0",
"assets/FontManifest.json": "65dd5a702cb97c7c9c094e61b6cc4369",
"assets/AssetManifest.bin.json": "4fb6bbe16d7d0ee226a8194e35142329",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "4a416eef8e01737e637da80205d2c399",
"assets/fonts/MaterialIcons-Regular.otf": "28830522ecbe9d72526c4c113c6f5815",
"assets/assets/svg/car_icon.svg": "d5f5f981eaf4468f21b46f08bb4c3f8d",
"assets/assets/svg/wheel.svg": "4e8ae5d89f3ed09a0d4e2c7ab45e8207",
"assets/assets/svg/delete_user.svg": "95933add37706c94f7c53e74ccbaf78b",
"assets/assets/svg/question_circle.svg": "df05e3e103ee9c66a330392887cf6f01",
"assets/assets/svg/logout_person.svg": "c06fca9b34c617c085547eaea3e4efda",
"assets/assets/svg/logo_full_1.svg": "ddacaf58002b2f1ce27ed732854fd07c",
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
"assets/assets/icons/icon.png": "ca9ecbf556fe7f17cc8b0a0039619086",
"assets/assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/UKNumberPlate.ttf": "ec455d87409fd009880ea60dc2948a1d",
"assets/assets/fonts/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/assets/fonts/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/translations/en.json": "ad665a75f77c73dc35bd6ab292c68186",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
