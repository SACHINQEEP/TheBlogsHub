const moment = require("moment");
const { User, Blogs } = require("../../models");
const BlogsListRepoConverter = require("./BlogsListRepoConverter");

const BlogsListRepository = {
  blogsList: async (data) => {
    let { limit, offset } = data;

    limit = limit ? limit : 10;
    offset = offset ? offset : 0;

    let { rows, count } = await User.findAndCountAll({
      where: {
        status: 1,
      },
      attributes: ["full_name"],
      include: [
        {
          model: Blogs,
          as: "Blogs",
          where: { status: 1 },
          attributes: ["blog_id", "title", "discription", "createdAt"],
          required: false,
        },
      ],
    });

    rows = JSON.parse(JSON.stringify(rows));

    let list = [];

    for(let i=0; i<rows.length; i++){
        let el = rows[i];
        for(let j=0; j<el.Blogs.length; j++){
            let el2 = el.Blogs[j];
            el2["name"] = el.full_name;

            let WPM = 225;
            let words = el2.discription;
            let totalWords = words.length;
            let readingTime = totalWords / WPM
            el2["readTime"] = readingTime.toFixed(2);

            el2.createdAt =moment(el2.createdAt).format("DD-MM-YYYY, hh:mm");
            list.push(el2)
        }
    }

    list = list.slice(offset, limit + offset);

    let BlogList = {
        count, list
    }

    return BlogsListRepoConverter.BlogsListDBOToDomain(BlogList);
  },
};

module.exports = BlogsListRepository;
