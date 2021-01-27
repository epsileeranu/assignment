const products = [
  {
    id: '1',
    subcategoryId: '1',
    sellerId: '1',
    name: 'first product',
    description: 'first product description',
    status: {
      display: true
    },
    rating: 2,
    price: 100,
    sale: {
      price: 50,
      saleEndAt: 1
    },
    images: [
      'https://picsum.photos/400',
      'https://picsum.photos/400'
    ],
    shipping: {
      height: 0,
      weight: 1,
      length: 2,
      width: 3
    },
    tags: ['first', '1', 'start', 'unary'],
    count: 0,
    createdAt: 0,
    lastModifiedAt: 0
  },
  {
    id:'2',
    subcategoryId: '1',
    sellerId: '2',
    name: 'second product',
    description: 'first product description',
    status: {
      display: true
    },
    rating: 2,
    price: 200,
    sale: {
      price: 150,
      saleEndAt: 1
    },
    images: [
      'https://picsum.photos/400',
      'https://picsum.photos/400'
    ],
    shipping: {
      height: 0,
      weight: 1,
      length: 2,
      width: 3
    },
    tags: ['second', 'secondry', 'binary'],
    count: 0,
    createdAt: 0,
    lastModifiedAt: 0
  },
  {
    id: '3',
    subcategoryId: '2',
    sellerId: '1',
    name: 'third product',
    description: 'first product description',
    status: {
      display: true
    },
    rating: 2,
    price: 300,
    sale: {
      price: 50,
      saleEndAt: 1
    },
    images: [
      'https://picsum.photos/400',
      'https://picsum.photos/400'
    ],
    shipping: {
      height: 0,
      weight: 1,
      length: 2,
      width: 3
    },
    tags: ['third', 'tertiary'],
    count: 0,
    createdAt: 0,
    lastModifiedAt: 0
  },
  {
    id: '4',
    subcategoryId: '1',
    sellerId: '2',
    name: 'fourth product',
    description: 'fourth product description',
    status: {
      display: true
    },
    rating: 2,
    price: 302,
    sale: {
      price: 50,
      saleEndAt: 1
    },
    images: [
      'https://picsum.photos/400',
      'https://picsum.photos/400'
    ],
    shipping: {
      height: 0,
      weight: 1,
      length: 2,
      width: 3
    },
    tags: ['third', 'tertiary'],
    count: 0,
    createdAt: 0,
    lastModifiedAt: 0
  },
  {
    id: '5',
    subcategoryId: '3',
    sellerId: '1',
    name: 'fifth product',
    description: 'fifth product description',
    status: {
      display: true
    },
    rating: 2,
    price: 41,
    sale: {
      price: 40,
      saleEndAt: 1
    },
    images: [
      'https://picsum.photos/400',
      'https://picsum.photos/400'
    ],
    shipping: {
      height: 0,
      weight: 1,
      length: 2,
      width: 3
    },
    tags: ['third', 'tertiary'],
    count: 0,
    createdAt: 0,
    lastModifiedAt: 0
  }
];

module.exports = products;
