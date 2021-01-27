import * as actionTypes from '../actions/actionTypes';


// categoryFilterReducer
const categoryFilterReducerDefaultState = {
  text: '',
  sortByTitle: 'titleAsc'
};
export const categoryFilterReducer = (state = categoryFilterReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.SET_CATEGORY_TEXT_FILTER:
      return {...state, text: action.text};
    case actionTypes.SET_SORT_BY_CATEGORY_TITLE:
      return {...state, sortByTitle: action.sortByTitle};
    default:
      return state;
  }
};


// subcategoryFilterReducer
const subcategoryFilterReducerDefaultState = {
  categoryId: '',
  text: '',
  sortByTitle: 'titleAsc'
};
export const subcategoryFilterReducer = (state = subcategoryFilterReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.SET_CATEGORY_ID:
      return {...state, categoryId: action.categoryId};
    case actionTypes.SET_SUBCATEGORY_TEXT_FILTER:
      return {...state, text: action.text};
    case actionTypes.SET_SORT_BY_SUBCATEGORY_TITLE:
      return {...state, sortByTitle: action.sortByTitle};
    default:
      return state;
  }
};


// productFilterReducer
const productFilterReducerDefaultState = {
  text: '',
  subcategoryId: '',
  sellerId: '',
  sortByTitle: '',
  sortByPrice: 'priceAsc',
  lowPrice: 0,
  highPrice: Infinity,
  ratings: [],
  tags: []
};
export const productFilterReducer = (state = productFilterReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.SET_PRODUCT_TEXT_FILTER:
      return {...state, text: action.text};
    case actionTypes.SET_SUBCATEGORY_ID:
      return {...state, subcategoryId: action.subcategoryId};
    case actionTypes.SET_SELLER_ID:
      return {...state, sellerId: action.sellerId};
    case actionTypes.SET_LOW_PRICE:
      return {...state, lowPrice: action.lowPrice};
    case actionTypes.SET_HIGH_PRICE:
      return {...state, highPrice: action.highPrice};
    case actionTypes.UNSET_PRICE:
      return {...state, lowPrice: 0, highPrice: Infinity};
    case actionTypes.SET_SORT_BY_PRODUCT_TITLE:
      return {...state, sortByTitle: action.sortByTitle, sortByPrice: ""};
    case actionTypes.SET_SORT_BY_PRODUCT_PRICE:
      return {...state, sortByPrice: action.sortByPrice, sortByTitle: ""};

    case actionTypes.ADD_RATING_COUNT:
      const afterAddRatings = state.ratings.concat(action.rating);
      return {...state, ratings: afterAddRatings};
    case actionTypes.REMOVE_RATING_COUNT:
      const afterRemoveRatings = state.ratings.filter(rating => rating !== action.rating);
      return {...state, ratings: afterRemoveRatings};
    case actionTypes.UNSET_RATING:
      return {...state, ratings: []};

    default:
      return state;
  }
};


// userFilterReducer
const userFilterReducerDefaultState = {
  name: '',
  email: '',
  gender: '',
  contactNumber: '',
  pinCode: '',
  state: '',
  sortByTitle: 'titleAsc',
};
export const userFilterReducer = (state = userFilterReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.SET_USER_TEXT_FILTER:
      return {...state, name: action.name};
    case actionTypes.SET_GENDER_FILTER:
      return {...state, gender: action.gender};
    case actionTypes.SET_EMAIL_TEXT_FILTER:
      return {...state, gender: action.email};
    case actionTypes.SET_CONTACT_NUMBER_TEXT_FILTER:
      return {...state, gender: action.contactNumber};
    case actionTypes.SET_PIN_CODE_TEXT_FILTER:
      return {...state, pinCode: action.pinCode};
    case actionTypes.SET_STATE_TEXT_FILTER:
      return {...state, state: action.state};
    case actionTypes.SET_SORT_BY_USER_TITLE:
      return {...state, sortByTitle: action.sortByTitle};
    default:
      return state;
  }
};


// order filter
// seller filter
// cart filter
