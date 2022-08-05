const AddBlogs = require("../../Repository/Blogs/AddBlogsRepository");


function FindBlogUser(body){
    return AddBlogs.checkUser(body);
}

module.exports = FindBlogUser;