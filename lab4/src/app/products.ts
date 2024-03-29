export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  imgGallery: string[];
  rating: number;
  sum: number,
  cnt: number,
  // currentImgIndex: number,
}

export const products = [
  {
    id: 1,
    name: 'Iphone 13 128gb',
    price: 298160,
    description: 'A large phone with one of the best screens',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'],
    // currentImgIndex: 0,
    rating: -1,
    sum: 0,
    cnt: 0
  },
  {
    id: 2,
    name: 'Logitech G102',
    price: 8902,
    description: 'Good black gaming mouse',
    link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h50/hea/64119545036830.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/he2/h8f/64119550246942.jpg?format=gallery-medium'],
    rating: -1,
    sum: 0,
    cnt: 0
  },
  {
    id: 3,
    name: 'SSD Kingston SA400S37',
    price: 18400,
    description: 'Fast SSD 480gb',
    link: 'https://kaspi.kz/shop/p/ssd-kingston-sa400s37-480-gb-6800659/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/h70/hb2/63763877920798.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/hff/h36/63763878445086.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/hae/h99/63763879428126.jpg?format=gallery-medium'],
    rating: -1,
    sum: 0,
    cnt: 0
  },
  {
    id: 4,
    name: 'Xiaomi Mi Portable Photo Printer',
    price: 28000,
    description: 'New portable small photo printer 1080',
    link: 'https://kaspi.kz/shop/p/xiaomi-mi-portable-photo-printer-xmkddyj01ht-belyi-101006836/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/h50/hd3/64095405834270.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/he5/hc0/64095408422942.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h39/h9d/64095411765278.jpg?format=gallery-medium'],
    rating: -1,
    sum: 0,
    cnt: 0
  },
  {
    id: 5,
    name: 'Apple iPad 2021',
    price: 155556,
    description: 'A large and conviniet apple ipad 2021',
    link: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-4-gb-64-gb-serebristyi-102301731/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/h7e/h90/64072646492190.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h32/ha3/64072647737374.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/hd9/h6d/64072649244702.jpg?format=gallery-medium'],
    rating: -1,
    sum: 0,
    cnt: 0
  },
  {
    id: 6,
    name: 'Backpack OEM 102011-141217',
    price: 6449,
    description: 'Big volume black backpack',
    link: 'https://kaspi.kz/shop/p/rjukzak-oem-102011-141217-chernyi-107354519/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/hfb/h9f/65094363021342.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/hc7/h3b/65094363283486.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h3f/h4b/65094363545630.jpg?format=gallery-medium'],
    rating: -1,
    sum: 0,
    cnt: 0
  },
  {
    id: 7,
    name: 'Keyboard LEAVEN K620',
    price: 9598,
    description: 'Nice light multicolor keyboard mechanic',
    link: 'https://kaspi.kz/shop/p/leaven-k620-chernyi-106785769/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h8c/64562900140062.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h84/h79/66542442446878.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h3a/h54/66542444019742.jpg?format=gallery-medium'],
    rating: -1,
    sum: 0,
    cnt: 0
  },
  {
    id: 8,
    name: 'Thermopasta Arctic MX-4',
    price: 1150,
    description: 'small good thermopasta',
    link: 'https://kaspi.kz/shop/p/termopasta-arctic-mx-4-4-g-109576930/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/hff/hc3/82331889434654.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/hff/hc3/82331889434654.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/hff/hc3/82331889434654.jpg?format=gallery-medium'],
    rating: -1,
    sum: 0,
    cnt: 0
  },
  {
    id: 9,
    name: 'Router Wi-Fi TP-LINK TD-W8961N',
    price: 11567,
    description: 'Wifi 4, 4 ports white fast router',
    link: 'https://kaspi.kz/shop/p/wi-fi-tochka-dostupa-tp-link-td-w8961n-7600132/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/hc5/hb2/63760533192734.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/hc5/hb2/63760533192734.jpg?format=gallery-medium'],
    rating: -1,
    sum: 0,
    cnt: 0
  },
  {
    id: 10,
    name: 'Монитор Sanc M2736PB',
    price: 66619,
    description: '4k 27d gaming monitor',
    link: 'https://kaspi.kz/shop/p/sanc-m2736pb-chernyi-101738150/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/h48/h43/64310085910558.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h5e/h28/64310088138782.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h97/hc5/64310091350046.jpg?format=gallery-medium'],
    rating: -1,
    sum: 0,
    cnt: 0
  },
  {
    id: 11,
    name: 'Galaxy A24',
    price: 70717,
    description: '1080 cheap but good phone',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h2b/h81/80750151434270.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h1d/hed/80750151565342.jpg?format=gallery-medium'],
    rating: -1,
    sum: 0,
    cnt: 0
  },
  {
    id: 12,
    name: 'Case for iphone',
    price: 137,
    description: 'Cheap simple case for iphone 11',
    link: 'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=354430100',
    imgGallery: ['https://resources.cdn-kaspi.kz/img/m/p/he5/hb3/64408556175390.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/he5/hb3/64408556175390.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/he5/hb3/64408556175390.jpg?format=gallery-medium'],
    rating: -1,
    sum: 0,
    cnt: 0
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/