import React, { useEffect } from 'react'; // Import React and useEffect hook for side effects
import { useDispatch, useSelector } from 'react-redux'; // Import hooks to interact with Redux store
import { listProductDetails } from '../actions/productActions'; // Import the action to fetch product details

// Component to display product details based on the product ID from the URL
const ProductDetailScreen = ({ match }) => {
  const dispatch = useDispatch(); // Get the dispatch function to trigger actions in Redux
  const productId = match.params.id; // Extract the product ID from the URL parameters

  // Access the productDetails slice of the Redux store
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails; // Destructure loading, error, and product from productDetails

  // useEffect is a React hook that runs when the component mounts or when dependencies change
  useEffect(() => {
    dispatch(listProductDetails(productId)); // Dispatch the action to fetch product details based on productId
  }, [dispatch, productId]); // Dependency array ensures this effect runs when dispatch or productId changes

  return (
    <div>
      {loading ? ( // If loading is true, show a loading message
        <h2>Loading...</h2>
      ) : error ? ( // If there's an error, display the error message
        <h3>{error}</h3>
      ) : ( // If data is successfully fetched, display the product details
        <div>
          <h1>{product.name}</h1> {/* Display the product name */}
          <p>{product.description}</p> {/* Display the product description */}
          <h2>${product.price}</h2> {/* Display the product price */}
        </div>
      )}
    </div>
  );
};

export default ProductDetailScreen;
