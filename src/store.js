import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingReducer';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), 
});

export default store;
