const _repos = require("../repository/repository");

module.exports = {
    addBlog: async (request, user) => {
        try {

            let { _id } = user;

            request['user_id'] = _id;

            let blog = await _repos.createBlog(request);

            return blog;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    blogList: async (user, request) => {
        try {
            let { _id, blogs_type } = req.user;
            let { blog_type } = req.body;

            if (blog_type == 1) {

            }
        } catch (err) {
            throw new Error(err.message)
        }
    }
}