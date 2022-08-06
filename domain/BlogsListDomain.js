

module.exports = class BlogsListDomain{
    constructor(blog_id, name, title, discription, createdAt, readTime){
        this.blog_id = blog_id
        this.name = name
        this.title = title
        this.discription = discription
        this.createdAt = createdAt
        this.readTime = readTime
    }
}