const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        default: ""
    }
});

const News = mongoose.model("News", newsSchema);
module.exports = News;