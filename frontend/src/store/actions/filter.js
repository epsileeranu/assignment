import * as actionTypes from './actionTypes';


// SET_CATEGORY_TEXT_FILTER
export const setCategoryTextFilter = (
  text = ''
)=>({
  type: actionTypes.SET_CATEGORY_TEXT_FILTER,
  text
});
// SET_SUBCATEGORY_TEXT_FILTER
export const setSubcategoryTextFilter = (
  text = ''
)=>({
  type: actionTypes.SET_SUBCATEGORY_TEXT_FILTER,
  text
});
// SET_PRODUCT_TEXT_FILTER
export const setProductTextFilter = (
  text = ''
)=>({
  type: actionTypes.SET_PRODUCT_TEXT_FILTER,
  text
});
// SET_USER_TEXT_FILTER
export const setUserTextFilter = (
  text = ''
)=>({
  type: actionTypes.SET_USER_TEXT_FILTER,
  text
});


// SET_SORT_BY_CATEGORY_TITLE
export const setSortByCategoryTitle = (
  sortByTitle = ''
) => ({
  type: actionTypes.SET_SORT_BY_CATEGORY_TITLE,
  sortByTitle: sortByTitle
});

// SET_SORT_BY_SUBCATEGORY_TITLE
export const setSortBySubcategoryTitle = (
  sortByTitle = ''
) => ({
  type: actionTypes.SET_SORT_BY_SUBCATEGORY_TITLE,
  sortByTitle: sortByTitle
});

// SET_SORT_BY_PRODUCT_TITLE
export const setSortByProductTitle = (
  sortByTitle = ''
) => ({
  type: actionTypes.SET_SORT_BY_PRODUCT_TITLE,
  sortByTitle: sortByTitle
});

// SET_SORT_BY_USER_TITLE
export const setSortByUserTitle = (
  sortByTitle = ''
) => ({
  type: actionTypes.SET_SORT_BY_USER_TITLE,
  sortByTitle: sortByTitle
});

// SET_CATEGORY_ID
export const setCategoryId = (
  categoryId = 0
) => ({
  type: actionTypes.SET_CATEGORY_ID,
  categoryId
});

// SET_START_DATE
export const setStartDate = (
  startDate = 0
)=>({
  type: actionTypes.SET_START_DATE,
  startDate
});

// SET_END_DATE
export const setEndDate = (
  endDate = 0
)=>({
  type: actionTypes.SET_END_DATE,
  endDate
});

// SORT_BY_DATE
export const sortByDate = (
  sortByDate = ''
)=>({
  type: actionTypes.SORT_BY_DATE,
  sortByDate: sortByDate
});

// SET_SUBCATEGORY_ID
export const setSubcategoryId = (
  subcategoryId = 0
) => ({
  type: actionTypes.SET_SUBCATEGORY_ID,
  subcategoryId
});

// SET_SELLER_ID
export const setSellerId = (
  sellerId = 0
) => ({
  type: actionTypes.SET_SELLER_ID,
  sellerId
});

// SET_LOW_PRICE
export const setLowPrice = (
  lowPrice = 0
)=>({
  type: actionTypes.SET_LOW_PRICE,
  lowPrice: parseInt(lowPrice)
});

// SET_HIGH_PRICE
export const setHighPrice = (
  highPrice = 0
)=>({
  type: actionTypes.SET_HIGH_PRICE,
  highPrice: parseInt(highPrice)
});

// UNSET_PRICE
export const unsetPrice = ()=>({
  type: actionTypes.UNSET_PRICE
});

// SET_SORT_BY_PRICE
export const setSortByProductPrice = (
  sortByPrice = ''
)=>({
  type: actionTypes.SET_SORT_BY_PRODUCT_PRICE,
  sortByPrice: sortByPrice
});

// ADD_RATING_COUNT
export const addRatingCount = (
  rating = 0
)=>({
  type: actionTypes.ADD_RATING_COUNT,
  rating:rating
});


// REMOVE_RATING_COUNT
export const removeRatingCount = (
  rating = 0
)=>({
  type: actionTypes.REMOVE_RATING_COUNT,
  rating:rating
});

// UNSET_RATING
export const unsetRating = () => ({
  type: actionTypes.UNSET_RATING,
});

    // SET_EMAIL_TEXT_FILTER
export const setEmailTextFilter = (
  email = ''
)=>({
  type: actionTypes.SET_EMAIL_TEXT_FILTER,
  email
});

// SET_GENDER_FILTER
export const setGenderFilter = (
  gender = ''
)=>({
  type: actionTypes.SET_GENDER_FILTER,
  gender
});

// SET_CONTACT_NUMBER_TEXT_FILTER
export const setContactTextFilter = (
  contactNumber = ''
)=>({
  type: actionTypes.SET_CONTACT_NUMBER_TEXT_FILTER,
  contactNumber
});

// SET_PIN_CODE_TEXT_FILTER
export const setPinCodeTextFilter = (
  pinCode = ''
)=>({
  type: actionTypes.SET_PIN_CODE_TEXT_FILTER,
  pinCode
});

// SET_STATE_TEXT_FILTER
export const setStateTextFilter = (
  state = ''
)=>({
  type: actionTypes.SET_STATE_TEXT_FILTER,
  state
});
