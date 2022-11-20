const mongoose = require("mongoose");
const validator = require("validator");
const User = require("./user.model");

const blogSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.ObjectId, ref: User
    },
    title: {
        type: String,
        required: [true, "blog title is required!!"]
    },
    discription: {
        type: String,
        required: [true, "blog discription is required!!"]
    },
    approved: { // 1 => Approved, 2 => NotApproved
        type: Number,
        default: 1
    },
    blog_status: { // 1 => Draft, 2=>published
        type: Number,
        default: 1
    },
    status: { // 1 => Active, 2=>Inactive, 3=>Deleted
        type: Number,
        default: 1
    }
}, {
    timestamps: true
})

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;