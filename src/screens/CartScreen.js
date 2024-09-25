import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems, loading, error } = cart; // Destructure loading, error, and cartItems from cart

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  // In case the Redux store was reset due to a page refresh.
  // useEffect(() => {
  //   // Fetch the cart items if cartItems is empty
  //   if (cartItems.length === 0) {
  //     dispatch(fetchCartItems());
  //   }
  // }, [dispatch, cartItems.length]);

  //TODO: addToCartHandler

  //TODO: Add loading...?
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/products">Go Back</Link>
        </p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product}>
              <Link to={`/product/${item.product}`}>{item.name}</Link>
              <button onClick={() => removeFromCartHandler(item.product)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartScreen;