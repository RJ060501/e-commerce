import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants';

// Action to add an item to the cart
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`); // Fetch product details by id

  // Dispatch the action to add the item to the cart
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,  // ID of the product
      name: data.name,    // Product name
      image: data.image,  // Product image
      price: data.price,  // Product price
      countInStock: data.countInStock,  // Available stock count
      qty,  // Quantity to be added to the cart
    },
  });

  // Save the updated cart to localStorage to persist between sessions
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// Action to remove an item from the cart
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,  // The id of the product to be removed
  });

  // Update localStorage with the new cart state
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// Action to save the shipping address
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,  // Shipping address data (name, address, etc.)
  });

  // Save shipping address to localStorage
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

// Action to save the payment method
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,  // Payment method selected by the user
  });

  // Save payment method to localStorage
  localStorage.setItem('paymentMethod', JSON.stringify(data));
};
