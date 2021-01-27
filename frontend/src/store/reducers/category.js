import * as actionTypes from '../actions/actionTypes';

import categories from '../../fixtures/category';


const addCategory = (state, action) => {
  return {...state, categories: state.categories.concat(action.category)}
};

const editCategory = (state, action) => {
  const updatedCategories = state.categories.map(category => {
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

  return {...state, categories: updatedCategories};
};

const removeCategory = (state, action) => {
  const updatedCategories = state.categories.filter(({ id }) => (id !== action.categoryId));
  return {...state, categories: updatedCategories}
}



// category reducer
const categoryReducerDefaultState = {
  categories: [...categories],
  loading: false,
  error: null
};
export const categoryReducer = (state = categoryReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.ADD_CATEGORY: return addCategory(state, action);
    case actionTypes.EDIT_CATEGORY: return editCategory(state, action);
    case actionTypes.REMOVE_CATEGORY: return removeCategory(state, action);
    default: return state;
  }
};

