import * as actionTypes from './actionTypes';



// PRODUCT_ACTION_START
export const productActionStart = () => ({
  type: actionTypes.PRODUCT_ACTION_START
});

// PRODUCT_ACTION_FAIL
export const productActionFail = (error) => ({
  type: actionTypes.PRODUCT_ACTION_FAIL,
  error: error
});

// ADD_PRODUCT
export const addProduct = (
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
  type: actionTypes.ADD_PRODUCT,
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
export const editProduct = (
  productId,
  updates = {}
)=>({
  type: actionTypes.EDIT_PRODUCT,
  productId,
  updates
});

// REMOVE_PRODUCT
export const removeProduct = (
  productId
)=>({
  type: actionTypes.REMOVE_PRODUCT,
  productId
});

// RATE_PRODUCT
export const rateProduct = (
  productId = '',
  rating = 0
)=>({
  type: actionTypes.RATE_PRODUCT,
  productId,
  rating
});

// INCREASE_PRODUCT_COUNT
// incase any user return product or seller added product
export const increaseProductCount = (
  productId = 0,
  count = 0
) => ({
  type: actionTypes.INCREASE_PRODUCT_COUNT,
  productId,
  count
});

// INCREASE_PRODUCT_COUNT
// incase any user buy product or seller remove product
export const decreaseProductCount = (
  productId = 0,
  count = 0
) => ({
  type: actionTypes.DECREASE_PRODUCT_COUNT,
  productId,
  count
});
