import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
// import { useSelector } from 'react-redux';
// import { Typography } from "@mui/material";
// import { Box } from "@mui/system";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function PaymentForm() {
  // const products = useSelector((state) => state.cart.BuyProducts)
  // const TotalPrice = useSelector((state) => state.cart.TotalPrice)
  // const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   let totalPrice
  //   {
  //     products.length > 1 ?
  //       totalPrice = TotalPrice
  //       :
  //       totalPrice = products[0].discountPrice * products[0].quantity
  //   }
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: { amount: totalPrice * 100 } }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));

  // }, []);

  // const appearance = {
  //   theme: 'stripe',
  // };
  // const options = {
  //   clientSecret,
  //   appearance,
  // };

  return (
    <div className="payment" >
      {/* {clientSecret ?
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        :
        <Box >
          <Typography variant="h1">Loading</Typography>
          <Typography variant="h3">Please wait...</Typography>
        </Box>
      } */}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>

    </div>
  );
}