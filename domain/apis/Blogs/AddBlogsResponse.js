

module.exports = class AddBlogsResponse {
    constructor(blogs_id, title, discription, approved, blog_status, status, user_id){
        this.blogs_id = blogs_id
        this.title = title
        this.discription = discription
        this.blog_status = blog_status
        this.status = status
        this.user_id = user_id
        this.approved = approved
    }
}