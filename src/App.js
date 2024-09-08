import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './components/Checkout';

//TODO: Replace 'your-public-stripe-key' with your actual Stripe public key.
const stripePromise = loadStripe('your-public-stripe-key');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}

export default App;
