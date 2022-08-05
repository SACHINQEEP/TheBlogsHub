const {User, Blogs} = require("../../models");
const AddBlogsRepoConverter = require("./AddBlogsRepoConverter");

const AddBlogs = {
    checkUser: async (data)=>{
        let {user_id} = data;

        let user = await User.findOne({
            where:{
                user_id: user_id,
                status: 1
            }
        })

        if(!user) {
            throw new Error("User not Exist");
        }

        user = JSON.parse(JSON.stringify(user));

        return user.user_id
    },

    createBlog: async (data)=> {

        let user = await Blogs.create(data);

        user = JSON.parse(JSON.stringify(user));

        return AddBlogsRepoConverter.AddBlogsDBOToDomain(user);

    }
}

module.exports = AddBlogs;