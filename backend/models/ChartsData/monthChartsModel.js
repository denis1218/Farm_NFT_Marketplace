const mongoose = require("mongoose");

const monthChartsSchema = new mongoose.Schema({
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

const MonthCharts = mongoose.model("MonthCharts", monthChartsSchema);
module.exports = MonthCharts;