import * as actionTypes from '../actions/actionTypes';




const addUser = (state, action) => {
  const updatedUsers = state.users.concat(action.user);
  return {...state, users: updatedUsers};
};

const editUser = (state, action) => {
  const updatedUsers = state.users.map(user => {
    if(user.id === action.userId){
      return {...user, ...action.updates};
    }else{
      return user;
    }
  });

  return {...state, users: updatedUsers};
};

const removeUser = (state, action) => {
  const updatedUsers = state.users.filter(({ id }) => id !== action.userId);
  return {...state, users: updatedUsers};
};

const addUserAddress = (state, action) => {
  const updatedUsers = state.users.map(user=> {
    if(user.id === action.userId){
      const addresses = user.addresses.concat(action.address);
      return {...user, addresses};
    }else{
      return user;
    }
  });

  return {...state, users: updatedUsers};
};

const editUserAddress = (state, action) => {
  const updatedUsers = state.users.map(user => {
    if(user.id === action.userId){
      const addresses = user.addresses.map(address => {
        if(address.id === action.addressId){
          return {...address, ...action.updates};
        }else{
          return address;
        }
      });
      return {...user, addresses};
    }else{
      return user;
    }
  });

  return {...state, users: updatedUsers};
};

const removeUserAddress = (state, action) => {
  const updatedUsers = state.users.map(user => {
    if(user.id === action.userId){
      const addresses = user.addresses.filter(({id}) => id !== action.addressId);
      return {...user, addresses};
    }else{
      return user;
    }
  });

  return {...state, users: updatedUsers};
};


// user reducer
const userReducerDefaultState = {
  users: [],
  loading: true,
  error: false
};
export const userReducer = (state = userReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.ADD_USER: return addUser(state, action);
    case actionTypes.EDIT_USER: return editUser(state, action);
    case actionTypes.REMOVE_USER: return removeUser(state, action);
    case actionTypes.ADD_USER_ADDRESS: return addUserAddress(state, action);
    case actionTypes.EDIT_USER_ADDRESS: return editUserAddress(state, action);
    case actionTypes.REMOVE_USER_ADDRESS: return removeUserAddress(state, action);
    default: return state;
  }
};
