const mongoose = require("mongoose");

const ConnectionSchema = new mongoose.Schema({
    user_followed_id: {
        type: String,
    },
    status: { // 1=> follow, 2=>unfollow, 3=>blocked
        type: Number,
        default: 1
    }
}, {
    timestamps: true
});


const UserConnection = mongoose.model("UserConnection", ConnectionSchema);

module.exports = UserConnection;