const AddBlogsDomain = require("../../domain/AddBlogDomain");

const AddBlogsRepoConverter = {
  AddBlogsDBOToDomain: (data) => {
    console.log(data);

    if (data == null) return null;

    return new AddBlogsDomain(
      data.blog_id,
      data.title,
      data.discription,
      data.approved,
      data.blogs_status,
      data.status,
      data.user_id,
      data.approved
    );
  },
};

module.exports = AddBlogsRepoConverter;
