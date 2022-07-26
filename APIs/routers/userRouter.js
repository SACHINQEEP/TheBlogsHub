const express = require("express");
const {userSignup, userSignin} = require("../controllers/userController")

const router = express.Router();

router.post("/user-auth-signup", userSignup);
router.post("/user-signin", userSignin);

module.exports = router


