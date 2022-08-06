const BlogsListRequest = require("./BlogsListRequest")
const BlogsListResponse = require("./BlogsListResponse")


module.exports = BlogsListConverter ={
    requestToDTO: (body) => {
        return new BlogsListRequest(
            body.user_id
        )
    },

    toResponse: (body)=> {

        let BlogsList = [];

        body.forEach(el => {
            BlogsList.push(
                new BlogsListResponse(
                    el.blog_id,
                    el.title,
                    el.discription,
                    el.createAt,
                )
            )
        })

        return BlogsList
    }
}