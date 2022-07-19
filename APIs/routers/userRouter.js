const express = require("express");
const {userSignup} = require("../controllers/userController")

const router = express.Router();

router.post("/user-auth-signup", userSignup)

module.exports = router


