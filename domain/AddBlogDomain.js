

module.exports = class AddBlogsDomain {
    constructor(blog_id, title, discription, approved, blog_status, status, user_id){
        this.blog_id = blog_id
        this.title = title
        this.discription = discription
        this.blog_status = blog_status
        this.status = status
        this.user_id = user_id
        this.approved = approved
    }
}