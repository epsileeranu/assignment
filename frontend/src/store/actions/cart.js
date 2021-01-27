import * as actionTypes from './actionTypes';


// CART_ACTION_START
export const cartActionStart = () => ({
  type: actionTypes.CART_ACTION_START
});

// CART_ACTION_FAIL
export const cartActionFail = (error) => ({
  type: actionTypes.CART_ACTION_FAIL,
  error: error
});

// ADD_PRODUCT_TO_CART
export const addProductToCart = (
  userId,
  productId,
  subcategoryId,
  categoryId
)=>({
  type: actionTypes.ADD_PRODUCT_TO_CART,
  userId,
  productId,
  subcategoryId,
  categoryId
});

// REMOVE_PRODUCT_FROM_CART
export const removeProductFromCart = (
  userId,
  productId,
  subcategoryId,
  categoryId
)=>({
  type: actionTypes.REMOVE_PRODUCT_FROM_CART,
  userId,
  productId,
  subcategoryId,
  categoryId
});

// INCREASE_PRODUCT_COUNT_OF_CART
export const increaseProductCountOfCart = (
  userId,
  productId,
  subcategoryId,
  categoryId,
  count = 1
)=>({
  type: actionTypes.INCREASE_PRODUCT_COUNT_OF_CART,
  userId,
  productId,
  subcategoryId,
  categoryId,
  count
});

// DECREASE_PRODUCT_COUNT_OF_CART
export const decreaseProductCountOfCart = (
  userId,
  productId,
  subcategoryId,
  categoryId,
  count = 1
)=>({
  type: actionTypes.DECREASE_PRODUCT_COUNT_OF_CART,
  userId,
  productId,
  subcategoryId,
  categoryId,
  count
});

