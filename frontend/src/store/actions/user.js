import * as actionTypes from './actionTypes';



// USER_ACTION_START
export const userActionStart = () => ({
  type: actionTypes.USER_ACTION_START
});

// USER_ACTION_FAIL
export const userActionFail = (error) => ({
  type: actionTypes.USER_ACTION_FAIL,
  error: error
});

// ADD_USER
export const addUser = (
  {
    firstName = '',
    middleName = '',
    lastName = '',
    image = '',
    gender = '',
    email = '',
    contactNumber = '',
  } = {}
)=>({
  type: actionTypes.ADD_USER,
  user: {
    id: '1',
    firstName,
    middleName,
    lastName,
    image,
    gender,
    email,
    contactNumber,
    addresses: [],
    createdAt: 0
  }
});

// EDIT_USER
export const editUser = (
  userId = '',
  updates = {}
)=>({
  type: actionTypes.EDIT_USER,
  userId,
  updates
});

// REMOVE_USER
export const removeUser = (
  userId = ''
)=>({
  type: actionTypes.REMOVE_USER,
  userId
});

// ADD_USER_ADDRESS
export const addUserAddress = (
  userId = '',
  address = {}
)=>({
  type: actionTypes.ADD_USER_ADDRESS,
  userId,
  address
});

// EDIT_USER_ADDRESS
export const editUserAddress = (
  userId = '',
  addressId = '',
  updates = {}
)=>({
  type: actionTypes.EDIT_USER_ADDRESS,
  userId,
  addressId,
  updates
});

// REMOVE_USER_ADDRESS
export const removeUserAddress = (
  userId = '',
  addressId = ''
)=>({
  type: actionTypes.REMOVE_USER_ADDRESS,
  userId,
  addressId
});
