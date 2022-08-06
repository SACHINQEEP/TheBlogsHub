const BlogsListRepository = require("../../Repository/Blogs/BlogsListRepository")

function FindBlogList(body){
    return BlogsListRepository.blogsList(body);
}

module.exports = FindBlogList