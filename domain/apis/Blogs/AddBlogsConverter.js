const AddBlogsRequest = require("./AddBlogsRequest")
const AddBlogsResponse = require("./AddBlogsResponse")


module.exports = AddBlogsConverter = {
    requestTODTO: (body) =>{
        return new AddBlogsRequest(
            body.title,
            body.discription,
            body.user_id,
            body.catagory_id,
        )
    },
    toResponse: (body)=> {
        return new AddBlogsResponse(
            body.blogs_id,
            body.title,
            body.discription,
            body.blog_status,
            body.status,
            body.user_id,
            body.approved
        )
    }

}