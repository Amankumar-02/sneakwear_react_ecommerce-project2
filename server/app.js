const stripe = require("stripe")("sk_test_51OUVp8SFnYNvOyeTPRQ2tfDyrOiqk9Bg32ZHbUwI6wPuUoGnsMFyMMsktHmfJuLzePGaDd2cSQOG2yecSlhhKbYW00VUhZJOqI")
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//checkout Api
app.post('/api/create-checkout-session', async (req, res) => {
    const { products } = req.body;
    // console.log(products)

    const lineItems = products.map((product) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: product.title
            },
            unit_amount: product.newPrice2 * 100,
        },
        quantity: product.noItems
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
        // success_url: "https://sneakwear23.netlify.app/success",
        // cancel_url: "https://sneakwear23.netlify.app/cancel",
    })
    res.json({ id: session.id })
})

app.listen(7000,()=>{
    console.log("server start");
})