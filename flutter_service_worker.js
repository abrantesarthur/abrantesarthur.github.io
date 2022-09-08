'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0125a2dc223b669e6ae5dd4998df64c3",
"index.html": "24f88b9193a574e63e3415579ce9ee03",
"/": "24f88b9193a574e63e3415579ce9ee03",
"main.dart.js": "7a02ca827c65e91e12bf17ad2baf241d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "145b9bb8088752e4c931db7ac5f9b118",
".git/config": "210d3e86d2e5d635a42db4ff076b304d",
".git/objects/59/ef6cb002edc6ec02cdbbb2d3c055a6e8b87fcd": "397a54f195f800d2376b5b05ade5fabe",
".git/objects/9e/b95ab7879db17aa0fd4097d36c73aef3b5ba45": "e1cfce032bb9f7948740ea0ece2524d2",
".git/objects/04/46a9dc853b85875befa8f815ba9dc02bc636f6": "feba9ddd0d5fcec274e3b75a174080df",
".git/objects/58/7fb4cf07567782856a4d0ae2f8197b3c0f9bd8": "b719c6e41c30bf509cb7f192d7d70e49",
".git/objects/67/b8915ab2eb87550de641fbb06f2b9fd07ea369": "1a5e0d610bd364ad671f215f8b9e96fc",
".git/objects/60/925858851d54509fb29d6a15197acb8f54677f": "f00fb7a5277191115157b65f3a7fe1f7",
".git/objects/5f/831acbff09c5198892a7a07c7e51bafe6aaa57": "abc7691c7bbb06989bc4ffbc33607c09",
".git/objects/05/044f23ee260fa84b5945dfb592f89d70d872d9": "bdf80c158b30d12a1a062daa6669d799",
".git/objects/b2/ef55fa5d6995dc3c26223476f5447bae4ce423": "46ce1e43bb0123021f0f504cde3b41f3",
".git/objects/fd/236870149a18c5cbd0d859d1ed6e80ae463da8": "da85c604df04a47c08423d6ed2521812",
".git/objects/f2/e91ce8ff42032449f6af15cbced62446aa9bf1": "3c183bc21b61e19bf476456aba5eb3dc",
".git/objects/4e/38efa79a700127438fb92fe4e0731e30112791": "a29fc155d1217a5769bcd11126e9d029",
".git/objects/18/eb8ef5e28ac4bfdd149f852ac44d35fcbc71a0": "4fd068f0e3542fe8250a3e08ca3b6f79",
".git/objects/pack/pack-bd8dc91b592b4238e6a8f7bae8addad7a7d2cc01.pack": "362a77a712670a6ab3989563abf13960",
".git/objects/pack/pack-bd8dc91b592b4238e6a8f7bae8addad7a7d2cc01.idx": "dbea93db9d76e399d1aaf4cf676d82ad",
".git/objects/29/248d6a7dcb185f1a5a07e08f989540dc92fd5c": "c748112f3b8f64121b7085da3ee091c0",
".git/objects/89/6153f34e01627daf9d319f2d0e328a20efd6d4": "ec689a359e6204be805593b45d9a1856",
".git/objects/74/5599dd074b6adb10a08de62293bdd61c9ceadd": "91a4b2db5477c90e8a366afb2f0dfbb0",
".git/objects/62/0569bf0c652562fac91910f9758f7573e65317": "c828b6b517f6fc517b7e1b467c5d0bda",
".git/objects/39/7b677b9bb2093788b6264a08ba50c908e21fdb": "931d3fee18bdd1ca34a56d0c8cd2d29c",
".git/objects/90/469d39ef47b11fbeef92f60e72dec5c5936c59": "4dd0dc97b8746f7765c54dbf86592857",
".git/objects/a0/a242dee71f5ac9de19640b6e61fccdd4103ee0": "bde53e35e5e799f9eecfbf94036d4dd7",
".git/objects/cc/10da323d79d6eac694d474ac5d37460299ed35": "ccfe1550a70ae6af6609c8eb43332ff4",
".git/objects/e7/4f40e5a8d9a5746d7ee22b5bc144e6dee44e6a": "95176048577100beda93759a4ed71c07",
".git/objects/cb/538deebcdc221a276a6231e1f077208829a5d4": "e3af2bb3e8817aeb35209885f791c02d",
".git/objects/8c/487f8c4ada2f887da690ca02009b1f6e4e599c": "5183d44dc6a3f9129c7625ab0ce5a06f",
".git/objects/7a/8df4b8833c34a3dffd2990ee675c84843964f2": "0a805c67386c74370e04df61b534da80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3ea70f89bd8125b4ba494a6754c4c5d4",
".git/logs/refs/heads/main": "3ea70f89bd8125b4ba494a6754c4c5d4",
".git/logs/refs/remotes/origin/HEAD": "ce70e13845f6260738844207f87425bf",
".git/logs/refs/remotes/origin/main": "01b8e1f599e385c8a8736cafd2d91cb3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "983bfaaafff7f61f455d8efc7312d9a2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "983bfaaafff7f61f455d8efc7312d9a2",
".git/index": "1e5ecb3cfcb6058e796f73e22ed6e228",
".git/packed-refs": "de7d101289bbed19d7f6c76061d9fa55",
".git/COMMIT_EDITMSG": "43b1d41873d6cfb50b0ba384a75f7650",
"assets/images/author.jpg": "21958251e768776a26491c69f315e66f",
"assets/AssetManifest.json": "a6d08fb446f939b6ebb5e2b342466cb1",
"assets/NOTICES": "80493c50b3ac54d442eb05aa2499f70c",
"assets/FontManifest.json": "c535046c67e93d4b66d01c9cf0ad8cb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/OpenSans-SemiBold.ttf": "c35a5d833fe9bc6cc802a275fd612137",
"assets/fonts/OpenSans-Light.ttf": "8ac55d3905f927b83e36d04a7342b839",
"assets/fonts/OpenSans-Bold.ttf": "8ff9b5735ccb338267f0034d83fe8214",
"assets/fonts/OpenSans-Medium.ttf": "ab21dae0926dcf5203881d4522ac2a55",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/OpenSans-Regular.ttf": "22ab03a6b890f2f142a137a38bf1d4ae"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
