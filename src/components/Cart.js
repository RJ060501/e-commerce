import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product}>
              <Link to={`/product/${item.product}`}>{item.name}</Link>
              <p>${item.price}</p>
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

export default Cart;
