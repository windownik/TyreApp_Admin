'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b725bb84052a8b3cb24d65bcbd1b20be",
"index.html": "e7f10ef0852cec6aa83db710110c3cae",
"/": "e7f10ef0852cec6aa83db710110c3cae",
"main.dart.js": "34a09797decd67a42d49c2931c1d54cd",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "aadf9c68a820dc0a503bba64c8532fa6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pipe.jenkins": "d8b04799697450a4298334098f99189d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b94a81957008377068ba1133eb5e44c",
".git/config": "e959a4891a69591ecdaef70dfdffbc7d",
".git/objects/0c/150e462c0a52d0d93885f1290be4a6a313212a": "48f96ace5cf8665c5cf70e84d882fc46",
".git/objects/3e/f1852cbf7b4117dbe22f99a1d74e27550a9465": "c28c4760abab4663c769ebcaa40fd1ed",
".git/objects/68/50ef63c3342d9af6854754f750b85dd0f12a15": "eda6e1026a2c9024af9a63e4233c6435",
".git/objects/3b/7681dc3c225a3987d831775695eb238245c5ab": "134436572ce64bf201422ed969cebe2d",
".git/objects/03/b90fea2bf978501ec31ee6692ec05e2c8bba1f": "04648fbf217be57bc7561b06fba9f1cf",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/779201f0b1fe38fba7bad5bc03dea1838754c7": "b09e6d9b4c88d937bc185753b2d4de4a",
".git/objects/67/81124c8a085c9900ea527ac67cfb6371d044e2": "ff5e0ed4b25aa56a928e27f7f18d4758",
".git/objects/93/fa9d231ed4fa0ffc42ac21f9ec2a1cb0c4d47e": "4b471edaed1009b756d90413abc841e1",
".git/objects/94/93e9476d054f6ecc1fc8432a381364f7b2e7ee": "c836dc691cc81b4a71dc12effa5bb775",
".git/objects/34/8f5de3efbf6534423b1f1c36202053e3df011d": "3ce885bde6ecc98c187c1a3627ead2c0",
".git/objects/5a/4fa49adb4eef23e2dbd98a47baf9644b5da660": "bf956f584b0006958bfabf565d875f1b",
".git/objects/33/7abdc0844638724d7c6fd61c3b6b47ff521248": "9db84be3294cc9c15a5bbe7e90fd3679",
".git/objects/05/efb248d5d44c8df0690b54493b6b3eff151d12": "37dae4896f2d2c3aeb2014f78438382c",
".git/objects/05/f78bd6f13d7ceaabc8500b089a288c6a6abc25": "a9e21917bcb9c4c320c5b011c08c8410",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/b2/dd3eeaea0fbf3613975b2524b3f1907b5dd790": "6055d273f1f03c11ba69e1742076c307",
".git/objects/d9/196ad45275eb793c4277d3409d0b30197291e5": "855f70d19f1c9c7092eb3d5221aabf57",
".git/objects/d9/9599a273324ec4c7a53f651890dbcc0aa29a31": "21aad1df95d3b183f135cebc9e6fdb68",
".git/objects/ad/bb0c062fee6656441f122a723240c7698f42f8": "41281bc90f17bb0df7e933ccae2f366f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/7100f6badf8a02999f07cb8f0279ac711f60f6": "3b92154aaa0f6b709b4cbfe0775d9874",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/3526d54f5b47d5acc0ac099ce4675cc3d2090e": "5fe53483cd7377e7deab609cab442f13",
".git/objects/a5/572990ed8af36917c69854bbf5d391fcdc7cbd": "dfc531073a53dc24bd77ec2c387ce814",
".git/objects/d1/87c24325047a72f1b5f76f7cfcb7257a4710b4": "3257b0f0ded183eb64df30cf416e8225",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/ce75960054dbad4988bfde243165a6c5bd13a7": "b20d89dd5f981b46e99e5b1569c5d74a",
".git/objects/eb/45d9cf16601b78c381a03b2cd460e39f263efb": "43ef94858d06a8e2cc65954fd889ccec",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/73fdc83d0b74c70f7b41c5f078822e3013390f": "be097e8364b21db96c22485b65511ccd",
".git/objects/c7/dbc98d6a4ca184303d49fccc4a5608d319a298": "3ea1f072343043e247c15f965e198681",
".git/objects/c0/3445db33ccbbacbf18c876e3472f3a6bf25661": "73f0f783dd03e550850f9b62f42a5ba4",
".git/objects/fc/5d85b9a01dfcec5f2e0ac430c1c100730d876b": "ae554cc849c14d5c1b04022c1b5afc64",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/5f4378f0a4cd23fc70b5153d74c4dadf3b4865": "324f89641aac8d85434a28b3f9ab590c",
".git/objects/ec/5d6ec33b6d124e9df5db9cfb75191c8a602261": "f5d14db08373b0457869ce70498254a0",
".git/objects/20/2134e22bd846db5ff65f1df7c7675f6013699a": "87214f2e9fdfe34055020b0dcdfa42fd",
".git/objects/18/5fed77693141e06ba6678dc7003766dbafde41": "32ad3da91365191b8128f279fd811041",
".git/objects/27/6cfeb140f3a69bdd1ea4a774c618f228ada4b5": "42b08afeb3f5ea0889f9b62d6844dada",
".git/objects/27/97f4a839eb1cefddf1ae525bd73f8eada08e08": "1e469a870a9e666de37ac2c3d6e8bd24",
".git/objects/pack/pack-956393cdc0c785f587ff4dd54fbea4647d31a4ac.idx": "eba03efdde0d918996025286bb74ab50",
".git/objects/pack/pack-956393cdc0c785f587ff4dd54fbea4647d31a4ac.pack": "b22249d40afebe330d0e5e09427c945b",
".git/objects/29/d4bc6b8d6538afffb48e0bee67c414ea4da551": "adfbfb215db52c9ae904b236c7f08915",
".git/objects/42/dde51048530b75af38c2b318ef0c0c15a45f72": "5338875f6da9bba84c60baa40039eb22",
".git/objects/45/fc1e952a52e9e322c92e6e424a696c4d4bcfa4": "fdb32f040a7ec4513294b4a5d1c6adc6",
".git/objects/1a/68bb8f9330a5b7d30ad0b988bdc1e69de52f9e": "cc1eacb49397b300ee389ee4a819f307",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/4d/577570bcde18667af6c7aa01da67f3a2aab47c": "90d78e9f5ffbff1dcbf696ba2cc4ccd3",
".git/objects/4d/098280dca659721c2447d6084f2437b0d95682": "13398db6bb254f5c8c88008c2c86f304",
".git/objects/72/f97ccd69bb15099057cf4454a082dbc3fa6efe": "c43dc5d1781021ea551d2b97aacd7f86",
".git/objects/44/6ef33517532fce1c4ac9da2192d1da0dc29338": "3a01c612605faa52bf9bd3445dbd7034",
".git/objects/44/917cd478a6a5f32a0dc5feeba9e84f8a249311": "9c243e6b93ab16bd5287ae7095276473",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/22741c38bfa038bd7da2d240abe89293324424": "a6ab00a3390b3e5698a2e457259a7d22",
".git/objects/9f/48138c87bad23d1552de63cfbd747188a9de80": "893987702793975a4dccd5e6a041f106",
".git/objects/53/52f04efd22393f8b66953fb86b80cc59a0521b": "83206d444c4d415ab64732e21c5d7e06",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/d2ad4fbbf69712366d870f455011165a85131c": "b8f6d2deea5dd37af00b1f7f89fb56a2",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/06/84ffc358409525253ac1c92677d9a4eaf001d8": "0941c4fb0e9af6060a1aa381f41d6a42",
".git/objects/06/0d1bc19a166815752d83de158cca047ebb8dc6": "9c5928b48cb5d42cc43cd5195814a3f5",
".git/objects/99/bd3f064663568cc6306e296d688cc2cf398e52": "37c4fe0244eed4ab9a283002f41d3488",
".git/objects/52/c124488ed9687d7f4e1295dd4cfe99c64f2955": "9b32252b36acd7511eeb5fdc1b6d32ca",
".git/objects/64/4c00268443825bec2059b2f959695ac13f93e8": "71f6128d60c24f50ecaf70b6ccd3a0a2",
".git/objects/64/e603970c137d2b233decb5e1a8b75393b5202b": "0c63bcbc82da76eb4a2acae6a1732e7f",
".git/objects/bf/9dd08c0c8da1959484a556fc0a8d8c20ccbcf9": "62c7f22b8afa72d0c618453ede749d6e",
".git/objects/d3/555098d3d5c6b244be841cf455cc191ad0e6bd": "674f167a94c6eeb613586d25bcb888dd",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dc/c8e0aba6267df05d57ace0e00a51d879350dac": "3592c710aad97860654c75e46bca26e6",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/de38fa991eea65e67d2de9157bd7f0b22e5136": "c2f2f47ba0cc3d5b9ae556122daa6cee",
".git/objects/ef/9b13f3dda75c4c5109d785c56c3c312bd58c02": "00e3500df024d7458490167c74e57bb6",
".git/objects/c4/ed78c76b6a008d3e2dd6852aadfd741601c63d": "25a403019a214554aff7b86a177d369f",
".git/objects/ea/f08e187630f2f49421ac7ca8947575d3b3fcfe": "e6830165096efb5c680b6051eb52eccd",
".git/objects/ea/6dd70f9fa4dff0c24aaf2a610e8dc67a778916": "22dfbae328d689b56c3d02bb7379299d",
".git/objects/ea/cb862fb19d21d7fba7b14c6a47f110d87a7aef": "d88b51e00cc31119e611d83a0d2be301",
".git/objects/e6/089100beac521faff4bd9cac2bb4a73e18a6a0": "f725f08090f2b1efdc86e035dd073939",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/cb/dc4438917e134073d7791e2445d35f87d85e98": "9aed1f9996239b54c6897859484a4497",
".git/objects/f8/6633d121c2d44c1d9acab01ae0e021ae195fb6": "70fba670630d6f60b98d33473197e471",
".git/objects/f8/774dd82f4bcbb4d8b519504da2f5f53b6f0c90": "299011aac281c3aa959fbf998437e481",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e602cad04944380deef7112978eace5d2bd096": "6a65a8fcba0893231e3852991a2f7298",
".git/objects/2c/4bb11e8dc292de97c8013879ed20d804abcb3c": "cfff193e341b6259bebedb1f7afeaac4",
".git/objects/24/1ecc7a992d1f4a7c88066d3e2647e3a0e14689": "acf650598febc24ff6697f461b357944",
".git/objects/8d/8ded6aa683160f479f3a81c1d68751e650cb48": "86a7224f0a0f20f399025434bd53b144",
".git/objects/15/4ba25b59eabc655bead8f0d4c812b6b50df58d": "f11cc04be20c61fbde24d28942c0526c",
".git/objects/82/80926fa44d289672e6b380ffd777bb82bda684": "a3027e4cc28b9352b68694cdf6c19598",
".git/objects/49/7e5fe7a0463e9a7b5af3f5fc81a54838b9db9f": "3f213bab49be811157e23d1a84e95619",
".git/objects/14/4947680801b612717949f54a4966a1883a4014": "160f832e012dc8851ca8253fcf4d99ff",
".git/objects/22/df6f5d9908ef7fe5ef579e9167e5c53e80c152": "ddb6d2597f9f60400f7a631dbf3cee76",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3a4e6c5d7d76dccfa7925301b7de8e89",
".git/logs/refs/heads/main": "3a4e6c5d7d76dccfa7925301b7de8e89",
".git/logs/refs/remotes/origin/HEAD": "47615c7182f55985c6d766acdae252a6",
".git/logs/refs/remotes/origin/main": "ad592575569806a6dcce772483f11b70",
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
".git/refs/heads/main": "826bacd6faa53fe6ee82084614be5676",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "826bacd6faa53fe6ee82084614be5676",
".git/index": "4916bc50611044ddd385b9a7b2850773",
".git/packed-refs": "69f0dcb8f2ed4b296f3b8fcc38824b86",
".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
"assets/AssetManifest.json": "75934b52c427a1646e93d9b2b16563ba",
"assets/NOTICES": "b10793601ecc76629d949e5b26bdd786",
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
