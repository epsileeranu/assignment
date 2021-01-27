import * as actionTypes from '../actions/actionTypes';

import subcategories from '../../fixtures/subcategory';


const addSubcategory = (state, action) => {
  const updatedSubcategories = state.subcategories.contact(action.subcategory);
  return {...state, subcategories: updatedSubcategories};
};

const editSubcategory = (state, action) => {
  const updatedSubcategories = state.subcategories.map(subcategory => {
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

  return {...state, subcategories: updatedSubcategories};
};

const removeSubcategory = (state, action) => {
  const updatedSubcategories = state.subcategories.filter(({ id }) => (id !== action.subcategoryId));
  return {...state, subcategories: updatedSubcategories};
};




// subcategory reducer
const subcategoryReducerDefaultState = {
  subcategories: [...subcategories],
  loading: true,
  error: false
};
export const subcategoryReducer = (state = subcategoryReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.ADD_SUBCATEGORY: return addSubcategory(state, action);
    case actionTypes.EDIT_SUBCATEGORY: return editSubcategory(state, action);
    case actionTypes.REMOVE_SUBCATEGORY: return removeSubcategory(state, action);
    default: return state;
  }
};
