const mongoose = require("mongoose");

const joinListSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    }
});

const JoinList = mongoose.model("JoinList", joinListSchema);
module.exports = JoinList;