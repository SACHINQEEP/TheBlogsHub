const router = require("express").Router();
const _contr = require("../controllers/controller");
const _authorization = require("../../middleware/verifyJWT");

router.post("/user-create-blog", _authorization, _contr.addBlogs);
router.post("/blogs-list", _authorization, _contr.blogsList)

module.exports = router;