const express = require('express');
const router = express.Router();
const razorpayInstance  =  require('../../config/razorpay');

router.post('/', async (req, res) => {
    try{
        const options = {
            amount: req.body.amount*100,
            currency: 'INR'
        }

        const order = await razorpayInstance.orders.create(options);
        res.status(200).json(order);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating RazorPay order');
    }
})

module.exports = router;