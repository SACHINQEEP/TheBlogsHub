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
    }
}