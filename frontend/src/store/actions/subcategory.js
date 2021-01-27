import * as actionTypes from './actionTypes';



// SUBCATEGORY_ACTION_START
export const subcategoryActionStart = () => ({
  type: actionTypes.SUBCATEGORY_ACTION_START
});

// CATEGORY_ACTION_FAIL
export const subcategoryActionFail = (error) => ({
  type: actionTypes.SUBCATEGORY_ACTION_FAIL,
  error: error
});

// ADD_SUBCATEGORY
export const addSubcategory = (
  {
    id = '',
    categoryId = '',
    title = '',
    description = '',
    image = {mobile: '', desktop: ''}
  } = {}
)=>({
  type: actionTypes.ADD_SUBCATEGORY,
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
export const editSubcategory = (
  subcategoryId,
  updates = {}
) => ({
  type: actionTypes.EDIT_SUBCATEGORY,
  subcategoryId,
  updates
});

// REMOVE_SUBCATEGORY
export const removeSubcategory = (
  subcategoryId = ''
)=>({
  type: actionTypes.REMOVE_SUBCATEGORY,
  subcategoryId
});
