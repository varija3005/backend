const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
     },
    products: [{
        prodId: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        wholesale: Number,
        retail: Number,
        name: String
    }],
    bill: {
        type: Number,
        required: true,
       default: 0
    }
}, {
    timestamps: true
})

module.exports = Cart = mongoose.model("order", OrderSchema);