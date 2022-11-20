const router = require("express").Router();
const _contr = require("../controllers/controller");


router.post("/user-auth-signup", _contr.userSignup);
router.post("/user-signin", _contr.userSignin);
router.post("/forgot-password", _contr.forgotPassword);
router.post("/change-password", _contr.changePassword);
router.post("/verify-user-email", _contr.verifyUserEmail);

// router.post("/user-create-blog", checkJwt, AddBlogs);
// router.post("/blogs-list",checkJwt, BlogsList)

module.exports = router;