const BlogsListDomain = require("../../domain/BlogsListDomain")

const BlogsListRepoConverter = {
    BlogsListDBOToDomain: (data)=> {
        // console.log(data);
        let {count , list} = data;
        
        if(count == 0) throw new Error("list not found");

        let datas =[];

        list.forEach(el => {
            datas.push(
                new BlogsListDomain(
                    el.blog_id,
                    el.name,
                    el.title,
                    el.discription,
                    el.createdAt,
                    el.readTime
                )
            )
        })
        return {count, datas}
    }
}

module.exports = BlogsListRepoConverter