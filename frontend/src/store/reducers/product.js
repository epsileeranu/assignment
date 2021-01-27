import * as actionTypes from '../actions/actionTypes';

import products from '../../fixtures/product';

const addProduct = (state, action) => {
  return {...state, products: state.products.concat(action.product)};
};

const editProduct = (state, action) => {
  const updatedProducts = state.products.map(product => {
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

  return {...state, products: updatedProducts};
};

const removeProduct = (state, action) => {
  const updatedProducts =  state.products.filter(({ id }) => (id !== action.productId));
  return {...state, products: updatedProducts};
};

const rateProduct = (state, action) => {
  const updatedProducts = state.products.map(product => {
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

  return {...state, products: updatedProducts};
};

const increaseProductCount = (state, action) => {
  const updatedProducts = state.products.map(product => {
    if(product.id === action.productId){
      const count = product.count + action.count;
      return {...product, count};
    }else{
      return product;
    }
  });

  return {...state, products: updatedProducts};
};

const decreaseProductCount = (state, action) => {
  const updatedProducts = state.products.map(product => {
    if(product.id === action.productId){
      const count = product.count - action.count;
      return {...product, count};
    }else{
      return product;
    }
  });

  return {...state, products: updatedProducts};
};


// productReducer
const productReducerDefaultState = {
  products: [...products],
  loading: true,
  error: false
};
export const productReducer = (state = productReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.ADD_PRODUCT: return addProduct(state, action);
    case actionTypes.EDIT_PRODUCT: return editProduct(state, action);
    case actionTypes.REMOVE_PRODUCT: return removeProduct(state, action);
    case actionTypes.RATE_PRODUCT: return rateProduct(state, action);
    case actionTypes.INCREASE_PRODUCT_COUNT: return increaseProductCount(state, action);
    case actionTypes.DECREASE_PRODUCT_COUNT: return decreaseProductCount(state, action);
    default: return state;
  }
};
