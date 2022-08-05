const AddBlogs = require("../../Repository/Blogs/AddBlogsRepository");


function CreateBlog(body){
    return AddBlogs.createBlog(body);
}


module.exports = CreateBlog;