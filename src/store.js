import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';


const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  // userLogin: userLoginReducer,
  // userRegister: userRegisterReducer,
});

// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null;

// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// };


// const middleware = [thunk];

//TODO: modify reducer config here.
const store = configureStore({
  reducer: {
    reducer,
  }
  // initialState,
  // composeWithDevTools(applyMiddleware(...middleware))
});

export default store;
