import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
//TODO:
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
//TODO: Import ProductList and implement MAYBE

const HomeScreen = () => {
  const dispatch = useDispatch();

  // Fetch the productList state from Redux
  const productList = useSelector((state) => state.productList);

  // Add a fallback in case productList is undefined
  const { loading, error, products } = productList || {
    loading: true, // Default loading to true while fetching data
    error: null,
    products: []
  };

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className='row'>
          {products.map((product) => (
            <div key={product._id} className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
              <Product product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
