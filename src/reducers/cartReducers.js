import { 
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM, 
    CART_SAVE_SHIPPING_ADDRESS, 
    CART_SAVE_PAYMENT_METHOD 
  } from '../constants/cartConstants';
  
  // Initial state of the cart
  const initialState = {
    cartItems: [],  // Holds the items added to the cart
    shippingAddress: {},  // Holds shipping address information
    paymentMethod: '',  // Holds payment method selected by the user
  };
  
  // Cart reducer function that handles different cart-related actions
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload;  // Get the item being added from the action payload
  
        // Check if the item already exists in the cart
        const existItem = state.cartItems.find((x) => x.product === item.product);
  
        if (existItem) {
          // If item already exists, replace it with the new one (usually with updated quantity)
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          };
        } else {
          // If the item is new, simply add it to the cartItems array
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
  
      case CART_REMOVE_ITEM:
        // Remove the item from cartItems by filtering it out
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        };
  
      case CART_SAVE_SHIPPING_ADDRESS:
        // Save the shipping address in the state
        return {
          ...state,
          shippingAddress: action.payload,
        };
  
      case CART_SAVE_PAYMENT_METHOD:
        // Save the payment method in the state
        return {
          ...state,
          paymentMethod: action.payload,
        };
  
      default:
        return state;  // Return the current state for any unrecognized action type
    }
  };
  