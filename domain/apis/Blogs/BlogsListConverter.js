const BlogsListRequest = require("./BlogsListRequest")
const BlogsListResponse = require("./BlogsListResponse")


module.exports = BlogsListConverter ={
    requestToDTO: (body) => {
        return new BlogsListRequest(
            body.user_id
        )
    },

    toResponse: (body)=> {
        let {count, datas} = body;

        let BlogsList = [];

        datas.forEach(el => {
            BlogsList.push(
                new BlogsListResponse(
                    el.blog_id,
                    el.name,
                    el.title,
                    el.discription,
                    el.createdAt,
                    el.readTime
                )
            )
        })

        return {count, BlogsList}
    }
}