'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0125a2dc223b669e6ae5dd4998df64c3",
"index.html": "e1f3e63de8e0662983fcf86ad8c6ae2a",
"/": "e1f3e63de8e0662983fcf86ad8c6ae2a",
"main.dart.js": "53e495da3996920349e0e48eed43412a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "145b9bb8088752e4c931db7ac5f9b118",
".git/config": "210d3e86d2e5d635a42db4ff076b304d",
".git/objects/59/83b3afe151019dd1f0f03b8e2fc948c2f9db0a": "c866ea43855ca669a6a940758befa12c",
".git/objects/66/acb2075c51aebeeb9a72b840309beaff31ca6b": "17c6928580ed881a4b61fec928c94298",
".git/objects/69/521dbf1043ab9f58a3a4516c37ae14ab2aab3a": "358a312013214aaed3f559501d105306",
".git/objects/67/2cede97bca157822dbae5742aa8305f21a3fc8": "8221a61c60873bb86111b00f6cc8a849",
".git/objects/d9/a9e277243f2a3455babc48c529193fcf1a7138": "e2097a7da9d33174fb3f0af150658248",
".git/objects/pack/pack-9cca50f10b8dd4fe4e5da280c38507649119a006.pack": "9bf0c34ff7d9173a5111ae096e992afb",
".git/objects/pack/pack-9cca50f10b8dd4fe4e5da280c38507649119a006.idx": "f4e9e9b496ad232857d04ac4d7971aa1",
".git/objects/7d/4c2fad3ffb7b606ee48350fb39adaf9efe7230": "7caef93879af190548a7ab511f8b8ed7",
".git/objects/87/e3a35426aa6008f15bbf1b5633f73d843bab85": "0f4b6daf817687c0e884130148efa5d8",
".git/objects/17/b9f705a1cb00cae5d80dea6563a7db6187b3ca": "ad31cf6304d4962d43363365c3c6ed18",
".git/objects/44/4d203531df5fa0868aa0471ddf20a384ec7fe9": "639b74ff0bdbaf09bf431a787347967b",
".git/objects/9f/ddac77ea5651f283a9af191a026c02b22a36be": "8b311289cc0e9f9ba07b61e07d632665",
".git/objects/6e/52bc519cb4ba3af746fb053724e93ac0327b9a": "2dc937d6267c189b8f6172c49dae753c",
".git/objects/30/4df3745dc79aafc34a5a56d42f53c0f067b24a": "0b5521d0a307fbcc28e9f29603761fa8",
".git/objects/39/a9a063164730862ea5e2a1fd090482f0150bff": "1eb5eece8b206b96abb552bb5d535ca0",
".git/objects/0a/ac93a2f7b6c6c0ae6e1ff43749cf1e3ca26100": "51fbc2e77fb9199b6cb31e03dbc5a8b0",
".git/objects/d4/8e88bb88b004860af5bfa2c8a5799a153bb1e9": "ed5bc9c95b2e339a602ff5a51a9fec1f",
".git/objects/ba/6db9b7048af5c7ca053a8985aaf610a80974bb": "1ef5c710fd2644679852d641e4e31c3f",
".git/objects/a0/25dff89bb8b1cc555b88f4843a924c30b36e53": "985a882cd0e9ef9e1e2b9c22696a3a1d",
".git/objects/a6/fc3e45a1dc4d32b96ad72572c573adba497dfb": "0aa32f01ee6c905bde98480c6fad7a89",
".git/objects/a1/398b338084cbaf0e99d89cb6089715baa78a6d": "02dc4e91b5e7a3ec6ab241de1c601d92",
".git/objects/a1/d587aac8131496475c52e9d069acd5a7f75ee9": "290f9e3c5fb9fe15b545260cce46d706",
".git/objects/ef/285db3c5eec453885f276878759eb000ecd73b": "e1d572fd57ce9f098613ca035d921c1a",
".git/objects/e6/11e2c7e08ad8e13e9b6beabc8719640d1a79f9": "cc4cb4fdc61cc17e3c50c867fe185f08",
".git/objects/f1/b9b2ab0091e16ead145eac3edf248cfe8bed6d": "70290acd090b8edc10924e6573fed182",
".git/objects/ce/16d554aba916ded80d6ce77c78eee8b61a5c6b": "db76186106945bbc94efb7e9bec0a08e",
".git/objects/2d/f0d7ed7b226076cae8d218c9a5bb85aedab1a7": "473a3730de00fb89a18ba642d95e2c9b",
".git/objects/1d/c226ddc00a11a9813844b00fb5edaf87921c38": "d73b813d540247e93f9aa23afe6b3f47",
".git/objects/76/4098f2719fd9cc641e1860fc4b291ddfe442a9": "d8ed0eb8bdb3ebe8fa36102688aa2a2e",
".git/objects/8b/d538ff0ee98a14171be6fcbddfef566b96221f": "b42b222ebcd4faec75891e689fece2f8",
".git/objects/14/ff7a8ee6fbe19ca4ee81f5d88211db9060b841": "d40c0caaa38a28035f3b0f47992c950f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "97691894c27ab87c8307cda8ed4b2e58",
".git/logs/refs/heads/main": "97691894c27ab87c8307cda8ed4b2e58",
".git/logs/refs/remotes/origin/HEAD": "d01bd7e7c930ae546bb75856008f25c5",
".git/logs/refs/remotes/origin/main": "5991cc0fbf3d6d6441f8e55aee35c443",
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
".git/refs/heads/main": "4496e13920b146ddc6fc86bf4d06b251",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "4496e13920b146ddc6fc86bf4d06b251",
".git/index": "683c5d85945ba0125c77242e05408433",
".git/packed-refs": "11920eea0aa544e43462dd52d69c778e",
".git/COMMIT_EDITMSG": "3532d11855ca175f717185077d3ca4ca",
"assets/images/author.jpg": "21958251e768776a26491c69f315e66f",
"assets/AssetManifest.json": "a6d08fb446f939b6ebb5e2b342466cb1",
"assets/NOTICES": "a4605938ada745c6ab2ebf157978fba1",
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
