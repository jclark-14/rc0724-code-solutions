'use strict';
const orderHistory = [
  {
    orderDate: 'August 4, 2020',
    orderDeliver: 'August 8, 2020',
    price: 34,
    shippedTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    items: [
      {
        type: 'book',
        price: 31.55,
        name: 'JavaScript for impatient programmers',
        author: 'Dr. Axel Rauschmayer',
        returnBy: 'September 7, 2020',
      },
    ],
  },
  {
    orderDate: 'July 19, 2020',
    orderDeliver: 'July 20, 2020',
    price: 44.53,
    shippedTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    items: [
      {
        type: 'book',
        price: 41.33,
        name: 'The Timeless Way of Building',
        author: 'Christopher Alexander',
        returnBy: 'August 19, 2020',
      },
    ],
  },
  {
    orderDate: 'July 4, 2020',
    orderDeliver: 'July 7, 2020',
    price: 17.22,
    shippedTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    items: [
      {
        type: 'electronic',
        price: 15.98,
        name: 'Gamecube Controller Adapter',
        returnBy: 'August 5, 2020',
      },
    ],
  },
  {
    orderDate: 'July 3, 2020',
    orderDeliver: 'July 5, 2020',
    price: 138.93,
    shippedTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    items: [
      {
        type: 'electronic',
        price: 94.95,
        name: 'GameCube Controller - Super Smash Bros. Edition(Nintendo Switch)',
        returnBy: 'August 4, 2020',
      },
      {
        type: 'book',
        price: 33.99,
        name: 'The Art of Sql',
        author: 'Christopher Alexander',
        returnBy: 'August 4, 2020',
      },
    ],
  },
];
const order4 = [
  {
    orderDate: 'July 3, 2020',
    orderDeliver: 'July 5, 2020',
    price: 138.93,
    shippedTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    item: 'GameCube Controller - Super Smash Bros. Edition(Nintendo Switch)',
    returnBy: 'August 4, 2020',
    isABook: false,
  },
  {
    orderDate: 'July 3, 2020',
    orderDeliver: 'July 5, 2020',
    price: 138.93,
    shippedTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    item: 'The Art of Sql',
    itemAuthor: 'Dr. Axel Rauschmayer',
    returnBy: 'August 4 2020',
    isABook: true,
  },
];
