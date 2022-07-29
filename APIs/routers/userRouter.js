const express = require("express");
const {userSignup, userSignin, forgotPassword, changePassword, verifyUserEmail} = require("../controllers/userController")

const router = express.Router();

router.post("/user-auth-signup", userSignup);
router.post("/user-signin", userSignin);
router.post("/forgot-password", forgotPassword);
router.post("/change-password", changePassword);
router.post("/verify-user-email", verifyUserEmail);

module.exports = router


