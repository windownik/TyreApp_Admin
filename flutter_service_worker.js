'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b725bb84052a8b3cb24d65bcbd1b20be",
"index.html": "6c588fbd6313c0e6722c99b629156926",
"/": "6c588fbd6313c0e6722c99b629156926",
"main.dart.js": "b3236ae3904f996a5e4651b4def1b692",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pipe.jenkins": "1e2a7ced6e8c77935aaee5d41ab66211",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b94a81957008377068ba1133eb5e44c",
".git/config": "82e2def00fc31aa1cccdabc31981b176",
".git/objects/66/fb50c51ced3c38647ec2ce9801e097f405e9ff": "04a5d11134189a40b77c86943fc882c1",
".git/objects/50/8e9c276ee8f0112952a9ad8424bdfba1112699": "b8c054253e658e564dd072325327a1f5",
".git/objects/57/f94f6895fd338febaf74172b24efca1a2d35bb": "eebcb1655aa01d280d734e47754819c7",
".git/objects/6f/25e332113e6fa6bf49da285f006b219c3759ff": "5443177f1f695f4b536db289f66e2b69",
".git/objects/9b/e082cbaa9e099112d413a500b0fe1251db6436": "bf48f84416c6e5e143466609f52c4c7d",
".git/objects/9e/6407e167dde3ccc1f7f8ac178f0b3768c008c0": "a41011dad6c6ec6bad515edd790a5e68",
".git/objects/9e/71a430c96f105564b8cf2f99ac371228452426": "f49dc14fd3c85feeda57ae943f6a5cb9",
".git/objects/32/b37f7e41c73e84131df31dbf3d0ba7e54d2642": "42cad1e020991e6587c082d890048d1a",
".git/objects/56/2b91233f6c601a4d56313cb0d8da99b2393a6c": "c0fcf9cfcb3b81c4a543d6f4f07efb30",
".git/objects/51/9fe6b56e94707e7d3c8b7dda1998b71095722d": "4129a84bda39cffa236142bf4afd00f8",
".git/objects/67/66089f5252059d560883d4318047ae0ea12a3c": "4069412a7968ce2726488f37b46e3e1e",
".git/objects/33/9e780ed041fd3e061edb3be18c5c24e113762a": "6a0aa786d0d1e36cf85d6578e4187a32",
".git/objects/05/1b566cfa5775814f20fde7313e850d296c724c": "7660f9d2ad1194f0076a12108c0a29e6",
".git/objects/9d/efb5bfbf19a891768362147f1ec334542dacc2": "3f786e96ae780718876cc937ad5c081b",
".git/objects/02/1f778ee76d7cf70ae47202b6395b49bf7e7440": "877b32451bc2026fdeaefabf587503fc",
".git/objects/d7/fe0d8953da2008c434885affd847ecb95f1c0b": "535750c0cf3414c970a9acffd21cf622",
".git/objects/d0/6ac30d8a5f7109b7a78cc4055c85834b0e7e3b": "f91fefffa5b11be6c4fd4daa733d79fa",
".git/objects/df/7b33b851ea7417b5c7bd695cfcc494267b65b2": "e1357b8f24baa9f9bf5431b830350e4a",
".git/objects/bd/eee7be431e1c2518ffd52bdf295c71c5e60a4c": "27c6d6d13c43c1ca066fda512f27a285",
".git/objects/d6/12ab9c8d9423f83278e3d393362fbeac1ee3a9": "60ae326bf1aa853583746043fe17c7df",
".git/objects/bc/621237e8bd6689740f16aeb7d1d59082261aad": "dd30f7fdc9ab0f0f2755d482b8d0fbea",
".git/objects/ae/6da03b40699e04e10ecaa5812928e39690b014": "edfbe6550e992dd82a7a786be4fb3d04",
".git/objects/d8/eee7d9761df0ea838be50cd8bb1d3eea80dce6": "d97b166fe1de7464cadbdd2541e99869",
".git/objects/e5/06d05f7b5e84ed48c876e7e9459f6a2b89591b": "c8a3d61bfd95d2544a8f1b4c1802038b",
".git/objects/f3/a95d15881cb3424296d06c59e5f795e6952df5": "a089cc7b3b641b7989e5ed966edd285a",
".git/objects/eb/59fc7c91bac1015fdbd96dec2a758a0de3ba72": "d229a1bb7e32a107f5cfe4cce6f66551",
".git/objects/c7/4c7486cd5b240cc4deb6eedd2f0a650d5fae0e": "cc3cde674b40bb975527ea023b1bde59",
".git/objects/f5/c128e743b5023c507bbe8dcfb6af47cac9bf5c": "6ad29551b0bb8271b799dba58d4f4d75",
".git/objects/f5/9e8971e629e4276a8f9e056c97e35c19346240": "32eded96013b7aa23905147955549415",
".git/objects/fe/e911f57c74d5092545ef5a6ce00ca3fffe04ac": "b789c40168dbbd342f18ffe07835db4e",
".git/objects/c8/708b9f6e906d37eb71c86984428c2881272a46": "ba83e664cdf02592641d05702033ffd0",
".git/objects/fb/a79dc71329e4eb5f34ce3e20ded6e3d6e7e498": "005a10fd624543cc82529142126441e4",
".git/objects/c6/14c7fa4073a4b58e19f01bf38cea9f9b866596": "b1901d7aa6d829849f070b4fa7aa7e03",
".git/objects/ec/4ac4e2c179115c5bb7b3153e128a78c9f99566": "a79d45d32d7e0a52c87bb20d56bde3d8",
".git/objects/20/201215b85e42a1c1d16175035cc754e95683dc": "6d76373f1650db10e3c94993623c023c",
".git/objects/18/f9518ba8ce239569436244a795c46cc3b21b9b": "b18a43cd625e463fa094251d6a859ca2",
".git/objects/27/0a0205314827cc9dfc54d6e260296292e46b38": "80a3e714994fe2c4f22d1709936459d8",
".git/objects/27/3f88d8c6de91aca3ce940dcd8fe2ea935289f7": "770b90e2fd912abed20e47ec32329092",
".git/objects/pack/pack-6554adc74b6ce7fee1f56bb68c2ca3ee51475b94.idx": "2475ff6e7a582c357d312ceb4ac0f5ce",
".git/objects/pack/pack-6554adc74b6ce7fee1f56bb68c2ca3ee51475b94.pack": "005f73ca1cd3fe6ae4c385657fbce6f9",
".git/objects/11/f6f5a3738f58ce7e63b9341d0a5d87f9254d18": "3ffb41e828cabec170b79a9c7f0faa0e",
".git/objects/11/acba47bd5811d955191349219935f56912b208": "274a8c4df822429ad87fd4ca0bf1c001",
".git/objects/7d/67ed0ad42d0cf1954e3cb72f2b197444c5012f": "dbd42c6aaa97436ef9da49053f5913d8",
".git/objects/7c/d52fc583c7a62cb02a9045d629d444881bae97": "9b1a2322585271c9f923616f28467ac3",
".git/objects/1f/a39544675889328b2f5a8358aa21c7f7c2ff9e": "2ca65f5c6d4c5d635cb82cb28d034f2f",
".git/objects/44/4434d90152b7a629e36f11358324e5248a33b2": "a00e640f2edbcc3f6d779271220a0790",
".git/objects/43/988d3daa13ae28717e87e589f76f18f4b94e8f": "017201e6d70997800382d8b3f771acc4",
".git/objects/6b/a269ca3aaa7486e1439e02da5feb5b3b7aa5e6": "5a14bc87bef7c68d5d5bd5e232e6dbd8",
".git/objects/6b/ec97479206a71efc4ab6a45ff958af6ef5a169": "604ccb0e4d3265f2f617c61ba283e2cc",
".git/objects/07/6a36691a887405abfd9d35190888d69c3087e8": "d25b653089e8cc744b3e6d5d746e3de8",
".git/objects/38/0ebfda0f0cc52586bcde563a119a8cdfa5d120": "afc4062f8ac53a5ae7811e9ffcd6feba",
".git/objects/38/3a905fec5c04b49a45bd480b8135a78e443617": "b055c18102ff04fcca3c2012d4982cd6",
".git/objects/00/890f21cd7667b62c078af2309a5e4bbd799869": "2a9e7c419e248af07d81c7ce8d491ee7",
".git/objects/65/1d5a3f155d71d68d400c9362d610922f7668bb": "9691c5724c1481bae0c4bc018134f3b2",
".git/objects/65/e9e6a7357307204f7f7754ddf27c0731cf1427": "22e2b920d68586a5fc6e4c44adb5bd9b",
".git/objects/98/2b932054fcbbc123d99016536188653e1dfdfa": "5409964159f72d598b6ac6b874dcbdd0",
".git/objects/3f/14bfed1679ebe586db4a4def1492a6655dead6": "e95f98986d8b279ccde0d7003261a04d",
".git/objects/30/035bea0b381a6e358a0ed5f9b4e97216809cf2": "53874d32ed7ca5c213369464ea4c5247",
".git/objects/5e/7aa62e53d0ee0a5ed001370f1016cd0b1277fe": "93ea535c425a10df8136b43f7a781a7f",
".git/objects/5b/2defd1962c027b313624584191af2c6e2579b7": "bb705da2b913720d11f627acbdfaac80",
".git/objects/06/85aeca5f6101ab8e9c1783c38599af19b284e0": "ec464444723eda305fab418c24fd312d",
".git/objects/99/c1a2202a1d82c8d4200bda54a89da20ed1c7be": "dcd56a31ec33505a114dd8503406830a",
".git/objects/0f/ecf592d4f56a3efa26245643a6629d10b790a8": "0f70a6c33b152e87f9322f92c5695698",
".git/objects/0f/26ecee436b0b6741aae39895e26b2c07bc470a": "161331be583986adc27ea4722ba39ce4",
".git/objects/bf/8118a1f10fb649026ff5eda39467a1b596453c": "0f7e950117281d07e9fcf021d60daa16",
".git/objects/a7/f4f0a80d774e767761d8072a634650f5188f14": "8a0ab6cdffdca1914540972698d752e2",
".git/objects/b1/fa188edffdfc10b75f1acc8d2df721a77eccc4": "171614d568c7e61bde72f11cd13c4449",
".git/objects/dd/bfd827a605d6200ef0927c399221623c59ba39": "0a89c024de765734f13ec0a433271ec0",
".git/objects/dd/55ee284ad0c63ba4182ddb16799032b3ff3093": "c4633b4d31a5092a23c25c3889228daf",
".git/objects/dc/15dc92b0bd6992093898ac3eb87b4534ebf136": "a50a1e415afb2fa17dcb55ff96443f2a",
".git/objects/aa/8634cfe8998a43ed618e0b75a7840e590b3408": "0bb0b5d9b3a2e9ae358c025c3fde01b4",
".git/objects/a1/bb69ffe35d9899079c7b7e790e2f57f3fde66e": "2ec05af2a870a210f61c2dd8d6ea17aa",
".git/objects/ea/387054c207a6236e7a50daaac84ff1976417ae": "dc11a36421d7fd66264525501cc63d01",
".git/objects/e1/b9cc33386cf4487a96423c2a71fffda6a2504c": "9b07b1aa416dabed33119eb0930afee6",
".git/objects/cc/5a98b9688fae5aa108307b179e73b4212438cc": "d03b4657f70a7f84bef8ac64af20b3b4",
".git/objects/cc/37fdd4b4f618c536764c4b7d07ae958c2a1f7a": "9ac64e2742b615fe9241c02bf9b321d7",
".git/objects/e8/06e4394ac3122a96f0882a807ffb5a520af3c0": "b1645ad3c0bf786696eca4da2362eff0",
".git/objects/fa/1b039a3e86ec451a165386a21d5a4dd21fa76a": "397cf277b25a07937a40b410eba87ad1",
".git/objects/fa/e3dec5393fe6157aff2b0ee2163e2dbaa22a1d": "8f62998213d7741a97709617b8cd6d4f",
".git/objects/e9/821ce50e6a5b1b46425ede6cb1df06aae3c7bc": "b7d72013c9895179fbf1803b9fe8fb67",
".git/objects/f1/6a7454cdb19611e110b5e6adf47e47a95d4405": "fced1a60dc38dd044bdac77d2a1d3417",
".git/objects/f1/1f638448bd896e117d5256545ebef51960fe3f": "c2fb1d15103f3e657867257c453f098a",
".git/objects/ce/f13a6d429fd02bfb5e9b2cd6fac34886b35e2f": "9295444d188db024564e99efa808d967",
".git/objects/41/bc9157010c89229491cba69bb25c436ac50a56": "b1053be5f9ba9bcaca79cc7fd5a211c1",
".git/objects/77/04089295f8ec4dd2a196feab11c90393b2dadc": "a88f7e612391ed539a619b511ba99695",
".git/objects/70/60ea71667277a544d7ac43e4af485a61e1e887": "5dc894a6b82469e5c2c6d3f997e55d61",
".git/objects/70/23e16c014f999a109bbc1023c5c34ac29ffb26": "f1c55b4600d444dcee442b642771f75a",
".git/objects/4a/298cc21dea7ea74253c7ae82740c265c7d65c4": "cd63a0d6c722bd8e182df6d0be425224",
".git/objects/4a/0d06ea0d6a677e98415441f574ad245b443683": "f8b3429ba5096e29067bcdedc3452fdf",
".git/objects/23/88968299c4ac798ea66bac35152ac15a7a542a": "2fc9e51875b161f44293a0675f3ab3fd",
".git/objects/15/78ecac2be8fad8ae4521e37a12456e903b6799": "bee39a12cc28dc537e56cc03e438db99",
".git/objects/1d/53b9cb3b3649ef08fddd05a3e9405969cc39a4": "07cc499df11ff2d6ea91aeb07cd229ad",
".git/objects/1d/5f29930a401b865b34683f6274701eb3f48723": "4d77f1cdbd3c1775d402c71e8d10608f",
".git/objects/2e/db4edda8b8f9f7a58435d35e3082e570987918": "dfa1029cc5efcb50aa9013a8215a4ffa",
".git/objects/47/ab29d0c92a14dbc56f702ab610c707c7e04cab": "49a0f1434488473461acef1793d12df7",
".git/objects/14/c5369f0a4bfa395927aa2983f08636581fdbad": "928c0a0476c81a0f648c20d74207ba7b",
".git/objects/14/9a6216e386fb9561e3e83b71dc87442a144eff": "1f657b6de587a60a96ba67ab6e0ea910",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ce6d4a6fee633def08c58da766f96ef8",
".git/logs/refs/heads/main": "ce6d4a6fee633def08c58da766f96ef8",
".git/logs/refs/remotes/origin/HEAD": "015b2ed7a72be5f30bf6abfc8acc2e4b",
".git/logs/refs/remotes/origin/main": "8793d4103821d1dcfe68cb713acdae4e",
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
".git/refs/heads/main": "8431a3300d1e32c597f189dcef072caf",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8431a3300d1e32c597f189dcef072caf",
".git/index": "f80fc8d7c08ba092226ca00b7f058fb5",
".git/packed-refs": "bc55d5684e91bc186843f10a05164cd0",
".git/COMMIT_EDITMSG": "88cef02f63d160d8bf6f57dd4790d205",
"assets/AssetManifest.json": "75934b52c427a1646e93d9b2b16563ba",
"assets/NOTICES": "628b909d4fa699324be20001387f7674",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "3ca309487f05e1d6ab0cdb1d99ede4dc",
"assets/fonts/MaterialIcons-Regular.otf": "8df9b0a71fbac606945f6be72919b140",
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
