const BlogsListDomain = require("../../domain/BlogsListDomain")

const BlogsListRepoConverter = {
    BlogsListDBOToDomain: (data)=> {
        console.log(data);
        
        if(data == null) return null;

        let datas =[];

        data.forEach(el => {
            datas.push(
                new BlogsListDomain(
                    el.blog_id,
                    el.title,
                    el.discription,
                    el.createAt,
                )
            )
        })
        return datas
    }
}

module.exports = BlogsListRepoConverter