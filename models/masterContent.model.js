const mongoose = require("mongoose");

const MasterContentSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    status: { // 1=>Active, 2=>InActive, 3=>Deleted
        type: Number,
        default: 1
    },
    content_type: { // 1=>ContactUs, 2=>privacy_policy, 3=>term&conditions
        type: Number,
        default: 1
    }
})

const MasterContent = mongoose.model("MasterContent", MasterContentSchema);

module.exports = MasterContent;