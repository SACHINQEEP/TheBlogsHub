const mongoose = require("mongoose");

const blogsLikeSchema = new mongoose.Schema({
    blogs_id: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    reader_user_id: {
        type: DataType.INTEGER,
        allowNull: false
    },
    writer_user_id: {
        type: DataType.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true
});

const BlogsLikes = mongoose.model("BlogsLikes", blogsLikeSchema);

module.exports = BlogsLikes;