const Blog = require("../../../models/blogs.model")


module.exports = {
    createBlog: async (request) => {
        try {
            let blog = await Blog.create(request);

            blog = JSON.parse(JSON.stringify(blog));

            return blog;
        } catch (err) {
            throw new Error(err.message)
        }
    }
}