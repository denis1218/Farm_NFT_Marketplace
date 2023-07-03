const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
    to: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    amount: {
        type: Number,
        default: 0
    },
    time: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Sales = mongoose.model("Sales", salesSchema);
module.exports = Sales;