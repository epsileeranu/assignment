import * as actionTypes from './actionTypes';


// CATEGORY_ACTION_START
export const categoryActionStart = () => ({
  type: actionTypes.CATEGORY_ACTION_START
});

// CATEGORY_ACTION_FAIL
export const categoryActionFail = (error) => ({
  type: actionTypes.CATEGORY_ACTION_FAIL,
  error: error
});

// ADD_CATEGORY
export const addCategory = (
  {
    id = '',
    title = '',
    description = '',
    image = {mobile: '', desktop: ''}
  } = {}
)=>({
  type: actionTypes.ADD_CATEGORY,
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
export const editCategory = (
  categoryId = '',
  updates = {}
)=>({
  type: actionTypes.EDIT_CATEGORY,
  categoryId,
  updates: updates
});

// REMOVE_CATEGORY
export const removeCategory = (
  categoryId = ''
)=>({
  type: actionTypes.REMOVE_CATEGORY,
  categoryId: categoryId
});
