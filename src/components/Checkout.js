import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    if (!stripe || !elements) return;

    const { data: clientSecret } = await axios.post('/api/create-payment-intent', { email });

    const cardElement = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          email,
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    } else if (paymentIntent.status === 'succeeded') {
      setSuccess(true);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {success ? (
        <h2>Payment successful!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <label>Card Details</label>
          <CardElement />
          {errorMessage && <div>{errorMessage}</div>}
          <button type="submit" disabled={!stripe || isLoading}>
            {isLoading ? "Processing..." : "Pay"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
