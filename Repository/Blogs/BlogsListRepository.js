const {User, Blogs} =require("../../models");
const BlogsListRepoConverter = require("./BlogsListRepoConverter");



const BlogsListRepository = {
    blogsList: async (data)=> {
        let {limit, offset} = data;

        limit = limit ? limit :10;
        offset = offset ? offset : 0;

        let list = await Blogs.findAll({
            where:{
                status: 1
            },
            limit,
            offset,
            include:[{
                model: User,
                as: "users",
                where: { status: 1 },
                required: false
            }]
        });

        list = JSON.parse(JSON.stringify(list));
        console.log(list);

        // for(let i=1; i<rows.length; i++){
        //     let el = rows[i];
        //     el["name"] =  el.users.full_name;
        //     delete el.users
        // }


        list.forEach(el => {
             el["name"] = el.users.full_name;
            delete el.users;
        })

        console.log("blogList" ,rows)

        // return BlogsListRepoConverter.BlogsListDBOToDomain(blogLists);
    }
}

module.exports = BlogsListRepository