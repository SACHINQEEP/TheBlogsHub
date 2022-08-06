const express = require("express");
const checkJwt  = require("../../middleware/verifyJWT");
const {userSignup, userSignin, forgotPassword, changePassword, verifyUserEmail, AddBlogs, BlogsList} = require("../controllers/userController")

const router = express.Router();

router.post("/user-auth-signup", userSignup);
router.post("/user-signin", userSignin);
router.post("/forgot-password", forgotPassword);
router.post("/change-password", changePassword);
router.post("/verify-user-email", verifyUserEmail);
router.post("/user-create-blog", checkJwt, AddBlogs);
router.post("/blogs-list",checkJwt, BlogsList)

module.exports = router


