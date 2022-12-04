const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
    },
    phone_number: {
        type: String,
        required: [true, "phone_number is required!!"]
    },
    email_id: {
        type: String,
        required: [true, "Email_id is required!!"],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String
    },
    user_type: { //"1=>admin, 2=>writer, 3=>reader"
        type: Number,
        required: [true, "user_type is required!!"]
    },
    email_verify: { //"1=>yes 2=>no"
        type: Number,
        default: 2,
    },
    otp: {
        type: String,
    },
    status: {  // "1=>active, 2=>inactive, 3=>blocked"
        type: Number,
        default: 1,
    },
    signup_type: { //"1=>email & pass, 2=>mobile, 3=>guest"
        type: Number,
        default: 3,
        required: [true, "signup_type is required!!"]
    },
    blogs_type: {
        type: Number,
        default: null,
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;