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

const store = configureStore({
  reducer: {
    reducer,
  }
  // initialState,
});

//The thunk middleware was automatically added

export default store;
