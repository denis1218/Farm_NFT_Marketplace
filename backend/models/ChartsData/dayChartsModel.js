const mongoose = require("mongoose");

const dayChartsSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        default: 0
    },
    amount: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
        require: true
    }
});

const DayCharts = mongoose.model("DayCharts", dayChartsSchema);
module.exports = DayCharts;