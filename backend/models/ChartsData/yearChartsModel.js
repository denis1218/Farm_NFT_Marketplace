const mongoose = require("mongoose");

const yearChartsSchema = new mongoose.Schema({
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

const YearCharts = mongoose.model("YearCharts", yearChartsSchema);
module.exports = YearCharts;