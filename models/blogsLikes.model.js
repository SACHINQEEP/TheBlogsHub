const mongoose = require("mongoose");

const blogsLikeSchema = new mongoose.Schema({
    reader_user_id: {
        type: Number,
    },
    writer_user_id: {
        type: Number
    }
}, {
    timestamps: true
});

const BlogsLikes = mongoose.model("BlogsLikes", blogsLikeSchema);

module.exports = BlogsLikes;