

module.exports = class BlogsListDomain{
    constructor(blog_id, title, discription, createAt){
        this.blog_id = blog_id
        this.title = title
        this.discription = discription
        this.createAt = createAt
    }
}