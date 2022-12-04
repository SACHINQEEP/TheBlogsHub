const success = require("../../middleware/success");
const _service = require("../services/service");

module.exports = {
    addBlogs: async (req, res) => {
        try {
            let blog = await _service.addBlog(req.body, req.user);

            return success(res, 200, true, blog);
        } catch (err) {
            return success(res, 400, false, err.message)
        }
    },

    blogsList: async (req, res) => {
        try {
            let blogs = await _service.blogList(req.user, req.body);

            return success(res, 200, true, blogs);

        } catch (err) {
            return success(res, 400, false, err.message)
        }
    }
}