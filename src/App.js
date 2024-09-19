// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import Header from './components/Header';
// import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import ProfileScreen from './screens/ProfileScreen';

// Load the Stripe instance with your publishable key
const stripePromise = loadStripe('your-publishable-key-from-stripe');

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductDetailsScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route
            path="/checkout"
            element={
              <Elements stripe={stripePromise}>
                <CheckoutScreen />
              </Elements>
            }
          />
          {/* <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
