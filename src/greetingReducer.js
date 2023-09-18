// src/greetingReducer.js
import { FETCH_GREETING_SUCCESS } from './greetingActions';

const initialState = {
  greeting: '',
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_SUCCESS:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
