import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  authReducer,
  cartReducer,
  categoryReducer,
  orderReducer,
  productReducer,
  subcategoryReducer,
  userReducer,

  categoryFilterReducer,
  subcategoryFilterReducer,
  productFilterReducer,
  userFilterReducer
} from './reducers/index';



const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose;
const logger = store => {
  return (next) => {
    return (action) => {
      console.log('[Middleware] Dispatching', action.type);
      const result = next(action);
      // console.log('[Middlerware] next state', store.getState());
      return result;
    }
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  category: categoryReducer,
  order: orderReducer,
  product: productReducer,
  subcategory: subcategoryReducer,
  user: userReducer,

  categoryFilters: categoryFilterReducer,
  productFilters: productFilterReducer,
  subcategoryFilters: subcategoryFilterReducer,
  userFilters: userFilterReducer,
});

// store creation
const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
  );

  return store;
};

export default configureStore;
