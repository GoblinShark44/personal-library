/********************************************\
 * usersReducer.js
 * 
 * Redux reducer used to set/control state for
 * users
 * 
\********************************************/

// import the list of constant action names
import * as types_enum from '../constants/actionTypes.js';

// setup initial state for this reducer
const initialState = {
  currentUser: 1,
};

// declare the reducer
const usersReducer = (state = initialState, action) => {

  // switch (action.type) {
  //   case types_enum.UPDATE_TEST_BOOL:

  //     return {
  //       ...state,
  //       testPropBool: !state.testPropBool,
  //     };

  //   case types_enum.UPDATE_TEST_STRING:

  //     return {
  //       ...state,
  //       testPropString: action.payload,
  //     };

  return state;
};

/**
 * export this reducer to be combined with
 * other reducer state properties 
 * within combinedReducers.js
 */
export default usersReducer;