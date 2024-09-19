import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Link>
    </div>
  );
};

export default Product;
