const express = require("express");
const {userSignup, userSignin, forgotPassword, changePassword} = require("../controllers/userController")

const router = express.Router();

router.post("/user-auth-signup", userSignup);
router.post("/user-signin", userSignin);
router.post("/forgot-password", forgotPassword);
router.post("/change-password", changePassword);

module.exports = router


