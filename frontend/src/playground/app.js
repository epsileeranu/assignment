import { createStore, combineReducers } from 'redux';
import categories from '../fixtures/category';
import subcategories from '../fixtures/subcategory';

// actions

// category actions
// ADD_CATEGORY
const addCategory = (
  {
    id = '',
    title = '',
    description = '',
    image = {mobile: '', desktop: ''}
  } = {}
)=>({
  type: 'ADD_CATEGORY',
  category: {
    id,
    title,
    description,
    image,
    status: { display: true },
    createdAt: 0
  }
});

// EDIT_CATEGORY
const editCategory = (
  categoryId = '',
  updates = {}
)=>({
  type: 'EDIT_CATEGORY',
  categoryId,
  updates
});

// REMOVE_CATEGORY
const removeCategory = (
  categoryId = ''
)=>({
  type: 'REMOVE_CATEGORY',
  categoryId
});

// subcategory actions
// ADD_SUBCATEGORY
const addSubcategory = (
  {
    id = '',
    categoryId = '',
    title = '',
    description = '',
    image = {mobile: '', desktop: ''}
  } = {}
)=>({
  type: 'ADD_SUBCATEGORY',
  subcategory: {
    id,
    categoryId,
    title,
    description,
    image,
    status: { display: true },
    createdAt: 0
  }
});


// EDIT_SUBCATEGORY
const editSubcategory = (
  subcategoryId,
  updates = {}
) => ({
  type: 'EDIT_SUBCATEGORY',
  subcategoryId,
  updates
});
// REMOVE_SUBCATEGORY
const removeSubcategory = (
  subcategoryId = ''
)=>({
  type: 'REMOVE_SUBCATEGORY',
  subcategoryId
});

// product actions
// ADD_PRODUCT
const addProduct = (
  {
    id = '', // remove
    subcategoryId = '',
    sellerId = '',
    title = '',
    description = '',
    rating = {
      avgRating: 0, numberOfRatings: 0
    }, // remove
    price = 0,
    sale = {price:0, saleEndAt:0},
    images = [],
    shipping = {
      height: 0, weight: 0,
      length: 0, width: 0
    },
    tags = [],
    count = 0,
    createdAt = 0, // remove
  } = {}
)=>({
  type: 'ADD_PRODUCT',
  product: {
    id: '', // remove
    subcategoryId,
    sellerId,
    title,
    description,
    status: { display: true },
    rating, // assign to default
    price,
    sale,
    images,
    shipping,
    tags,
    count,
    createdAt, // assign to 0
    lastModifiedAt: 0
  }
});

// EDIT_PRODUCT
const editProduct = (
  productId,
  updates = {}
)=>({
  type: 'EDIT_PRODUCT',
  productId,
  updates
});

// REMOVE_PRODUCT
const removeProduct = (
  productId
)=>({
  type: 'REMOVE_PRODUCT',
  productId
});

// RATE_PRODUCT
const rateProduct = (
  productId = '',
  rating = 0
)=>({
  type: 'RATE_PRODUCT',
  productId,
  rating
});

// INCREASE_PRODUCT_COUNT
// incase any user return product or seller added product
const increaseProductCount = (
  productId = 0,
  count = 0
) => ({
  type: 'INCREASE_PRODUCT_COUNT',
  productId,
  count
});

// INCREASE_PRODUCT_COUNT
// incase any user buy product or seller remove product
const decreaseProductCount = (
  productId = 0,
  count = 0
) => ({
  type: 'DECREASE_PRODUCT_COUNT',
  productId,
  count
});

// user actions
// ADD_USER
const addUser = (
  {
    firstName = '',
    middleName = '',
    lastName = '',
    image = '',
    gender = '',
    email = '',
    contactNumber = '',
  } = {}
)=>({
  type: 'ADD_USER',
  user: {
    id: '1',
    firstName,
    middleName,
    lastName,
    image,
    gender,
    email,
    contactNumber,
    addresses: [],
    createdAt: 0
  }
});
// EDIT_USER
const editUser = (
  userId = '',
  updates = {}
)=>({
  type: 'EDIT_USER',
  userId,
  updates
});
// REMOVE_USER
const removeUser = (
  userId = ''
)=>({
  type: 'REMOVE_USER',
  userId
});
// ADD_ADDRESS
const addAddress = (
  userId = '',
  address = {}
)=>({
  type: 'ADD_ADDRESS',
  userId,
  address
});
// EDIT_ADDRESS
const editAddress = (
  userId = '',
  addressId = '',
  updates = {}
)=>({
  type: 'EDIT_ADDRESS',
  userId,
  addressId,
  updates
});
// REMOVE_ADDRESS
const removeAddress = (
  userId = '',
  addressId = ''
)=>({
  type: 'REMOVE_ADDRESS',
  userId,
  addressId
});

// cart actions
// ADD_PRODUCT_TO_CART
const addProductToCart = (
  userId,
  productId,
  subcategoryId,
  categoryId
)=>({
  type: 'ADD_PRODUCT_TO_CART',
  userId,
  productId,
  subcategoryId,
  categoryId
});
// REMOVE_PRODUCT_FROM_CART
const removeProductFromCart = (
  userId,
  productId,
  subcategoryId,
  categoryId
)=>({
  type: 'REMOVE_PRODUCT_FROM_CART',
  userId,
  productId,
  subcategoryId,
  categoryId
});

// INCREASE_PRODUCT_COUNT_OF_CART
const increaseProductCountOfCart = (
  userId,
  productId,
  subcategoryId,
  categoryId,
  count = 1
)=>({
  type: 'INCREASE_PRODUCT_COUNT_OF_CART',
  userId,
  productId,
  subcategoryId,
  categoryId,
  count
});
// DECREASE_PRODUCT_COUNT_OF_CART
const decreaseProductCountOfCart = (
  userId,
  productId,
  subcategoryId,
  categoryId,
  count = 1
)=>({
  type: 'DECREASE_PRODUCT_COUNT_OF_CART',
  userId,
  productId,
  subcategoryId,
  categoryId,
  count
});


// orders actions
// addOrder
const placeOrder = (
  user = {
    userId: '',
    addressId: '',
    deliveryNotes: '',
  },
  tracking = {
    trackingId: '',
    status: '',
    estimatedDelivery: 0
  },
  payment = {
    method: '',
    transactionId: ''
  },
  products = [
    {productId: '', subcategoryId: '', categoryId: '', count: 0}
  ]
)=>({
  type: 'PLACE_ORDER',
  order: {
    id: '',
    user: {
      userId: user.userId,
      addressId: user.addressId,
      deliveryNotes: user.deliveryNotes
    },
    tracking: {
      trackingId: tracking.trackingId,
      status: tracking.status,
      estimatedDelivery: tracking.estimatedDelivery
    },
    payment: {
      method: payment.method,
      transactionId: payment.transactionId
    },
    products: [...products],
    createdAt: 0
  }
});
// editOrder

// seller actions
// ADD_SELLER
// EDIT_SELLER
// REMOVE_SELLER


// faq actions
// ADD_FAQ_SECTION
// EDIT_FAQ_SECTION
// REMOVE_FAQ_SECTION
// ADD_FAQ
// EDIT_FAQ
// REMOVE_FAQ


// filter actions
// SET_TEXT_FILTER
const setTextFilter = (
  text = ''
)=>({
  type: 'SET_TEXT_FILTER',
  text
});
// SET_CATEGORY_ID
const setCategoryId = (
  categoryId = 0
) => ({
  type: 'SET_CATEGORY_ID',
  categoryId
});

// SET_START_DATE
const setStartDate = (
  startDate = 0
)=>({
  type: 'SET_START_DATE',
  startDate
});
// SET_END_DATE
const setEndDate = (
  endDate = 0
)=>({
  type: 'SET_END_DATE',
  endDate
});
// SORT_BY_DATE_ASC
const sortByDateAsc = ()=>({
  type: 'SORT_BY_DATE_ASC'
});
// SORT_BY_DATE_DESC
const sortByDateDesc = ()=>({
  type: 'SORT_BY_DATE_DESC'
});
// SET_SUBCATEGORY_ID
const setSubcategoryId = (
  subcategoryId = 0
) => ({
  type: 'SET_SUBCATEGORY_ID',
  subcategoryId
});
// SET_SELLER_ID
const setSellerId = (
  sellerId = 0
) => ({
  type: 'SET_SELLER_ID',
  sellerId
});
// SET_LOW_PRICE
const setLowPrice = (
  lowPrice = 0
)=>({
  type: 'SET_LOW_PRICE',
  lowPrice
});
// SET_HIGH_PRICE
const setHighPrice = (
  highPrice = 0
)=>({
  type: 'SET_HIGH_PRICE',
  highPrice
});
// UNSET_PRICE
const unsetPrice = ()=>({
  type: 'UNSET_PRICE'
});
// SORT_BY_PRICE_ASC
const sortByPriceAsc = ()=>({
  type: 'SORT_BY_PRICE_ASC'
});
// SORT_BY_PRICE_DESC
const sortByPriceDesc = ()=>({
  type: 'SORT_BY_PRICE_DESC'
});
// ADD_RATING_COUNT
const addRatingCount = (
  rating = 0
)=>({
  type: 'SORT_BY_RATING',
  rating
});
// REMOVE_RATING_COUNT
const removeRatingCount = (
  rating = 0
)=>({
  type: 'REMOVE_RATING_COUNT',
  rating
});

// SET_NAME_TEXT_FILTER
const setNameTextFilter = (
  name = ''
)=>({
  type: 'SET_NAME_TEXT_FILTER',
  name
});
// SET_EMAIL_TEXT_FILTER
const setEmailTextFilter = (
  email = ''
)=>({
  type: 'SET_EMAIL_TEXT_FILTER',
  email
});
// SET_GENDER_FILTER
const setGenderFilter = (
  gender = ''
)=>({
  type: 'SET_GENDER_FILTER',
  gender
});
// SET_CONTACT_NUMBER_TEXT_FILTER
const setContactTextFilter = (
  contactNumber = ''
)=>({
  type: 'SET_CONTACT_NUMBER_TEXT_FILTER',
  contactNumber
});

// SET_PIN_CODE_TEXT_FILTER
const setPinCodeTextFilter = (
  pinCode = ''
)=>({
  type: 'SET_PIN_CODE_TEXT_FILTER',
  pinCode
});
// SET_STATE_TEXT_FILTER
const setStateTextFilter = (
  state = ''
)=>({
  type: 'SET_STATE_TEXT_FILTER',
  state
});

// ---------- reducers ----------
// category reducer
const categoryReducerDefaultState = [];
const categoryReducer = (state = categoryReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_CATEGORY':
      return [...state, action.category];
    case 'EDIT_CATEGORY':
      return state.map(category => {
        if(category.id === action.categoryId){

          const {
            title = category.title,
            description = category.description,
          } = action.updates;
          const updates = {
            title,
            description,
            image: {...category.image, ...action.updates.image},
            status: {...category.status, ...action.updates.status},
            lastModifiedAt: 0
          };

          return {...category, ...updates};
        }else{
          return category;
        }
      });
    case 'REMOVE_CATEGORY':
      return state.filter(({ id }) => (id !== action.categoryId));
    default:
      return state;
  }
};
// subcategory reducer
const subcategoryReducerDefaultState = [];
const subcategoryReducer = (state = subcategoryReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_SUBCATEGORY':
      //console.log('goona add', [...state, action.subcategory] );
      return [...state, action.subcategory];
    case 'EDIT_SUBCATEGORY':
      return state.map(subcategory => {
        if(subcategory.id === action.subcategoryId){

          const {
            categoryId = subcategory.categoryId,
            title = subcategory.title,
            description = subcategory.description,
          } = action.updates;
          const updates = {
            categoryId,
            title,
            description,
            image: {...subcategory.image, ...action.updates.image},
            status: {...subcategory.status, ...action.updates.status},
            lastModifiedAt: 0
          };

          return {...subcategory, ...updates};
        }else{
          return subcategory;
        }
      });
    case 'REMOVE_SUBCATEGORY':
      return state.filter(({ id }) => (id !== action.subcategoryId));
    default:
      return state;
  }
};
// productReducer
const productReducerDefaultState = [];
const productReducer = (state = productReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_PRODUCT':
      return [...state, action.product];
    case 'EDIT_PRODUCT':
      return state.map(product => {
        if(product.id === action.productId){
          const {
            subcategoryId = product.subcategoryId,
            title = product.title,
            description = product.description,
            price = product.price,
            count = product.count
          } = action.updates;
          const updates = {
            subcategoryId,
            title,
            description,
            status: {...product.status, ...action.updates.status},
            rating: {...product.rating, ...action.updates.rating},
            price,
            sale: {...product.sale, ...action.updates.sale},
            images: [...product.images, ...action.updates.images],
            shipping : {...product.shipping, ...action.updates.shipping},
            tags: [...product.tags, ...action.updates.tags],
            count,
            lastModifiedAt: 0
          };

          return {...product, ...updates};
        }else{
          return product;
        }
      });
    case 'REMOVE_PRODUCT':
      return state.filter(({ id }) => (id !== action.productId));
    case 'RATE_PRODUCT':
      return state.map(product => {
        if(product.id === action.productId){
          const {
            avgRating, numberOfRatings
          } = product.rating;
          const newAvgRating = Math.floor((numberOfRatings * avgRating + action.rating)/(numberOfRatings + 1));
          const rating = {
            avgRating: newAvgRating,
            numberOfRatings: numberOfRatings + 1
          };

          return {...product, rating};
        }else{
          return product;
        }
      });
    case 'INCREASE_PRODUCT_COUNT':
      return state.map(product => {
        if(product.id === action.productId){
          const count = product.count + action.count;
          return {...product, count};
        }else{
          return product;
        }
      });
    case 'DECREASE_PRODUCT_COUNT':
      return state.map(product => {
        if(product.id === action.productId){
          const count = product.count - action.count;
          return {...product, count};
        }else{
          return product;
        }
      });
    default:
      return state;
  }
};
// user reducer
const userReducerDefaultState = [];
const userReducer = (state = userReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_USER':
      return [...state, action.user];
    case 'EDIT_USER':
      return state.map(user => {
        if(user.id === action.userId){
          return {...user, ...action.updates};
        }else{
          return user;
        }
      });
    case 'REMOVE_USER':
      return state.filter(({ id }) => id !== action.userId);
    case 'ADD_ADDRESS':
      return state.map(user=> {
        if(user.id === action.userId){
          const addresses = user.addresses.concat(action.address);
          return {...user, addresses};
        }else{
          return user;
        }
      });
    case 'EDIT_ADDRESS':
      return state.map(user => {
        if(user.id === action.userId){
          const addresses = user.addresses.map(address => {
            if(address.id === action.addressId){
              return {...address, ...action.updates};
            }else{
              return address;
            }
          });
          return {...user, addresses};
        }else{
          return user;
        }
      });
    case 'REMOVE_ADDRESS':
      return state.map(user => {
        if(user.id === action.userId){
          const addresses = user.addresses.filter(({id}) => id !== action.addressId);
          return {...user, addresses};
        }else{
          return user;
        }
      });
    default:
      return state;
  }
};
// order reducer
// seller reducer


//---------- filters ----------

// categoryFilterReducer
const categoryFilterReducerDefaultState = {
  text: '',
  startDate: 0,
  endDate: 0,
  sortByDate: 'dateDesc'
};
const categoryFilterReducer = (state = categoryFilterReducerDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    case 'SORT_BY_DATE_DESC':
      return {...state, sortByDate: 'dateDesc'};
    case 'SORT_BY_DATE_ASC':
      return {...state, sortByDate: 'dateAsc'};
    default:
      return state;
  }
};

const getVisibleCategories = (categories, categoryFilters) => {
  const {
    text = '',
    startDate = 0,
    endDate = 0,
    sortByDate = 'dateDesc'
  } = categoryFilters;

  return categories.filter(category => {
    const startDateMatch = typeof startDate !== 'number' || category.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || category.createdAt <= endDate;
    const textMatch = category.title.toLowerCase().includes(text.toLowerCase());

    // console.log(startDateMatch, endDateMatch, textMatch);
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if(sortByDate === 'dateDesc'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if(sortByDate === 'dateAsc'){
      return a.createdAt > b.createdAt ? 1 : -1;
    }
  });
};

// subcategoryFilterReducer
const subcategoryFilterReducerDefaultState = {
  categoryId: '',
  text: '',
  startDate: 0,
  endDate: 0,
  sortByDate: 'dateDesc'
};
const subcategoryFilterReducer = (state = subcategoryFilterReducerDefaultState, action)=>{
  switch(action.type){
    case 'SET_CATEGORY_ID':
      return {...state, categoryId: action.categoryId};
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    case 'SORT_BY_DATE_DESC':
      return {...state, sortByDate: 'dateDesc'};
    case 'SORT_BY_DATE_ASC':
      return {...state, sortByDate: 'dateAsc'};
    default:
      return state;
  }
};
const getVisibleSubcategories = (subcategories, subcategoryFilters) => {
  const {
    categoryId = '',
    text = '',
    startDate = 0,
    endDate = 0,
    sortByDate = 'dateDesc'
  } = subcategoryFilters;

  return subcategories.filter(subcategory => {
    // console.log('this one',subcategory);
    const categoryIdMatch = subcategory.categoryId.toLowerCase().includes(categoryId.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || subcategory.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || subcategory.createdAt <= endDate;
    const textMatch = subcategory.title.toLowerCase().includes(text.toLowerCase());

    console.log(categoryIdMatch, startDateMatch, endDateMatch, textMatch);
    return categoryIdMatch && startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if(sortByDate === 'dateDesc'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if(sortByDate === 'dateAsc'){
      return a.createdAt > b.createdAt ? 1 : -1;
    }
  });
};
// productFilterReducer
const productFilterReducerDefaultState = {
  text: '',
  subcategoryId: '',
  sellerId: '',
  startDate: 0,
  endDate: 0,
  sortByPrice: 'priceAsc',
  lowPrice: -Infinity,
  highPrice: Infinity,
  ratings: [],
  tags: []
};
const productFilterReducer = (state = productFilterReducerDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SET_SUBCATEGORY_ID':
      return {...state, subcategoryId: action.subcategoryId};
    case 'SET_SELLER_ID':
      return {...state, sellerId: action.sellerId};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    case 'SORT_BY_PRICE_DESC':
      return {...state, sortByPrice: 'priceDesc'};
    case 'SORT_BY_PRICE_ASC':
      return {...state, sortByPrice: 'priceAsc'};
    case 'SET_LOW_PRICE':
      return {...state, lowPrice: action.lowPrice};
    case 'SET_HIGH_PRICE':
      return {...state, highPrice: action.highPrice};
    case 'UNSET_PRICE':
      return {...state, lowPrice: -Infinity, highPrice: Infinity};
    case 'ADD_RATING_COUNT':
      const afterAddRatings = state.ratings.concat(action.rating);
      return {...state, ratings: afterAddRatings};
    case 'REMOVE_RATING_COUNT':
      const afterRemoveRatings = state.ratings.filter(rating => rating !== action.rating);
      return {...state, ratings: afterRemoveRatings};
    default:
      return state;
  }
};

const getVisibleProducts = (products, productFilters) => {
  const {
    text = '',
    subcategoryId = '',
    sellerId = '',
    startDate = 0,
    endDate = 0,
    lowPrice = -Infinity,
    highPrice = Infinity,
    ratings = [],
    tags = [],
    sortByPrice = 'priceAsc',
  } = productFilters;

  return products.filter(product => {
    const textMatch = product.title.toLowerCase().includes(text.toLowerCase())
    const subcategoryIdMatch = product.subcategoryId.toLowerCase().includes(subcategoryId.toLowerCase());
    const sellerIdMatch = product.sellerId.toLowerCase().includes(sellerId.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || product.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || product.createdAt <= endDate;
    const lowPriceMatch = typeof lowPrice !== 'number' || product.lowPrice >= lowPrice;
    const highPriceMatch = typeof highPrice !== 'number' || product.highPrice <= highPrice;
    const ratingsMatch = true;
    const tagsMatch = true;

    if(ratings.length !== 0){
      ratingsMatch = ratings.some(rating => rating === product.rating.avgRating);
    }
    if(tags.length !== 0){
      tagsMatch = tags.some(tag => product.tags.includes(tag));
    }

    return textMatch && subcategoryIdMatch &&
      sellerIdMatch && startDateMatch &&
      endDateMatch && lowPriceMatch &&
      highPriceMatch && ratingsMatch &&
      tagsMatch;
  }).sort((a,b) => {
    if(sortByPrice === 'priceDesc'){
      return a.price < b.price ? 1 : -1;
    }
    if(sortByPrice === 'priceAsc'){
      return a.price > b.price ? 1 : -1;
    }
  });
};

// userFilterReducer
const userFilterReducerDefaultState = {
  name: '',
  email: '',
  gender: '',
  contactNumber: '',
  pinCode: '',
  state: '',
  startDate: 0,
  endDate: 0,
  sortByDate: 'dateDesc',
};
const userFilterReducer = (state = userFilterReducerDefaultState, action)=>{
  switch(action.type){
    case 'SET_NAME_TEXT_FILTER':
      return {...state, name: action.name};
    case 'SET_GENDER_FILTER':
      return {...state, gender: action.gender};
    case 'SET_EMAIL_TEXT_FILTER':
      return {...state, gender: action.email};
    case 'SET_CONTACT_NUMBER_TEXT_FILTER':
      return {...state, gender: action.contactNumber};
    case 'SET_PIN_CODE_TEXT_FILTER':
      return {...state, pinCode: action.pinCode};
    case 'SET_STATE_TEXT_FILTER':
      return {...state, state: action.state};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    case 'SORT_BY_DATE_DESC':
      return {...state, sortByDate: 'dateDesc'};
    case 'SORT_BY_DATE_ASC':
      return {...state, sortByDate: 'dateAsc'};
    default:
      return state;
  }
};

// TODO
// sellerFilterReducer


// store creation
const store = createStore(
  combineReducers({
    categories: categoryReducer,
    categoryFilters: categoryFilterReducer,

    subcategories: subcategoryReducer,
    subcategoryFilters: subcategoryFilterReducer,

    products: productReducer,
    productFilters: productFilterReducer,

    users: userReducer,
    userFilters: userFilterReducer
  })
);


const unsubscribe = store.subscribe(()=>{
  const state = store.getState();
  const products = getVisibleProducts(state.products, state.productFilters);
  console.log(state.products, state.productFilters);
  //console.log(state);
});

// dispatching

//-----------category---------------

// const firstCat = {
//   id: '10',
//   title: 'tenth category',
//   description: 'tenth cat desc',
//   image: {
//     desktop: 'https://picsum',
//     mobile: ''
//   }
// };
// const secondCat = {
//   id: '20',
//   title: 'twenty category',
//   description: 'twenty cat desc',
//   image: {
//     desktop: 'https://desktop.com',
//     mobile: 'https://mobile.com'
//   }
// };
// const firstCategory = store.dispatch(addCategory(firstCat));
// const secondCategory = store.dispatch(addCategory(secondCat));
// const updates = {
//   title: 'tenth update category',
//   description: 'tenth cat desc',
//   image: {
//     desktop: 'https://mobile.com'
//   },
//   status: { display: false }
// };
// store.dispatch(editCategory(firstCategory.category.id, updates));
// store.dispatch(removeCategory(firstCategory.category.id));


// categories.map(category => store.dispatch(addCategory(category)));
// store.dispatch(setTextFilter('t'));
// store.dispatch(setStartDate(-500));
// store.dispatch(setEndDate(1000));
// store.dispatch(sortByDateAsc());
// store.dispatch(sortByDateDesc());


//-----------subcategory---------------

// const firstSubcat = {
//   id: '10',
//   categoryId: '1',
//   title: 'tenth sub category',
//   description: 'tenth sub category description',
//   image: {
//     mobile: 'https://picsum.photos/300',
//     desktop: 'https://picsum.photos/500'
//   }
// };
// const secondSubcat = {
//   id: '20',
//   title: 'twenty subcategory',
//   description: 'twenty subcat desc',
//   image: {
//     desktop: 'https://desktop.com',
//     mobile: 'https://mobile.com'
//   }
// };
// const firstSubcategory = store.dispatch(addSubcategory(firstSubcat));
// const secondSubcategory = store.dispatch(addSubcategory(secondSubcat));
// const updates = {
//   title: 'tenth update subcategory',
//   description: 'tenth cat desc',
//   image: {
//     desktop: 'https://mob.com'
//   },
//   status: { display: false }
// };
// store.dispatch(editSubcategory(firstSubcategory.subcategory.id, updates));
// store.dispatch(removeSubcategory(firstSubcategory.subcategory.id));

// console.log('adding');
// subcategories.map(subcategory => {
//   store.dispatch(addSubcategory(subcategory))
// });
// store.dispatch(setTextFilter(''));
// store.dispatch(setStartDate(-100));
// store.dispatch(setEndDate(50));
// store.dispatch(sortByDateAsc());
// store.dispatch(sortByDateDesc());


//-----------product---------------

const firstPro = {
  id: '10',
  subcategoryId: '1',
  sellerId: '1',
  title: 'tenth product',
  description: 'tenth product description',
  rating: {
    avgRating: 2, numberOfRatings: 3
  },
  price: 100,
  sale: {
    price: 90,
    saleEndAt: 10
  },
  images: [
    'https://picsum.photos/300',
    'https://picsum.photos/500'
  ],
  shipping: {
    height: 0, weight: 0,
    length: 0, width: 0
  },
  tags: ['tenth'],
  count: 10,
};
const secondSubcat = {
  id: '20',
  title: 'twenty subcategory',
  description: 'twenty subcat desc',
  image: {
    desktop: 'https://desktop.com',
    mobile: 'https://mobile.com'
  }
};
const firstProduct = store.dispatch(addProduct(firstPro));
// const secondSubcategory = store.dispatch(addSubcategory(secondSubcat));
// const updates = {
//   title: 'tenth update subcategory',
//   description: 'tenth cat desc',
//   image: {
//     desktop: 'https://mob.com'
//   },
//   status: { display: false }
// };
// store.dispatch(editSubcategory(firstSubcategory.subcategory.id, updates));
// store.dispatch(removeSubcategory(firstSubcategory.subcategory.id));

// console.log('adding');
// subcategories.map(subcategory => {
//   store.dispatch(addSubcategory(subcategory))
// });
// store.dispatch(setTextFilter(''));
// store.dispatch(setStartDate(-100));
// store.dispatch(setEndDate(50));
// store.dispatch(sortByDateAsc());
// store.dispatch(sortByDateDesc());


