
module.exports = class BlogsListResponse{
    constructor(blog_id, title, discription, full_name){
        this.blog_id = blog_id
        this.title = title
        this.discription = discription
        this.full_name = full_name
    }
}