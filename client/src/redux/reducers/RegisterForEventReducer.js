 import {
  REGISTER_FOR_EVENT,
   REGISTER_FOR_EVENT_SUCCESS ,
   REGISTER_FOR_EVENT_FAILED 
 } from "../actions/types";

const initialState = {
  loading: false,
  error: null
};

const RegisterForEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_FOR_EVENT:
      return {
        ...state,
        loading: true
      };
    case REGISTER_FOR_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REGISTER_FOR_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default RegisterForEventReducer;