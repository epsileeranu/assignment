// import * as actionTypes from '../actions/actionTypes';


// AUTH_ACTION_START
export const authActionStart = () => ({
  type: actionTypes.AUTH_ACTION_START
});

// AUTH_ACTION_FAIL
export const authActionFail = (error) => ({
  type: actionTypes.AUTH_ACTION_FAIL,
  error: error
});
