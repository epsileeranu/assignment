const products = [
  {
    id: '1',
    subcategoryId: '1',
    sellerId: '1',
    title: 'first product',
    description: 'first product description',
    status: {
      display: true
    },
    rating: {
      avgRating: 2,
      numberOfRatings: 0
    },
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
    count: 10,
    createdAt: 0,
    lastModifiedAt: 0
  },
  {
    id:'2',
    subcategoryId: '1',
    sellerId: '2',
    title: 'second product',
    description: 'first product description',
    status: {
      display: true
    },
    rating: {
      avgRating: 4,
      numberOfRatings: 0
    },
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
    count: 5,
    createdAt: 0,
    lastModifiedAt: 0
  },
  {
    id: '3',
    subcategoryId: '2',
    sellerId: '1',
    title: 'third product',
    description: 'first product description',
    status: {
      display: true
    },
    rating: {
      avgRating: 1,
      numberOfRatings: 0
    },
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
    count: 9,
    createdAt: 0,
    lastModifiedAt: 0
  },
  {
    id: '4',
    subcategoryId: '1',
    sellerId: '2',
    title: 'fourth product',
    description: 'fourth product description',
    status: {
      display: true
    },
    rating: {
      avgRating: 4,
      numberOfRatings: 0
    },
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
    count: 5,
    createdAt: 0,
    lastModifiedAt: 0
  },
  {
    id: '5',
    subcategoryId: '3',
    sellerId: '1',
    title: 'fifth product',
    description: 'fifth product description',
    status: {
      display: true
    },
    rating: {
      avgRating: 4,
      numberOfRatings: 0
    },
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
    count: 4,
    createdAt: 0,
    lastModifiedAt: 0
  }
];

module.exports = products;
