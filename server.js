const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config()
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

app.use(express.static("public"));
app.use(express.json());

// const calculateOrderAmount = (items) => {
// Replace this constant with a calculation of the order's amount
// Calculate the order total on the server to prevent
// people from directly manipulating the amount on the client
//   return 12;
// };

// app.post("/create-payment-intent", async (req, res) => {
//   const { amount } = req.body.items;
//   // console.log(amount);

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: amount,
//     currency: "usd",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

app.post("/payment", async (req, res) => {
	let { amount, id } = req.body
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: 'usd',
			automatic_payment_methods: {
				enabled: true,
			},

		})
		// console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true,
			clientSecret: paymentIntent.client_secret,
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(4242, () => console.log("Node server listening on port 4242!"));