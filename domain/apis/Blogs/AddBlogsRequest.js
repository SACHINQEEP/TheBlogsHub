

module.exports = class AddBlogsRequest{
    constructor(title, discription, user_id, catagory_id){
        this.title = title;
        this.discription = discription
        this.user_id = user_id
        this.catagory_id = catagory_id
    }
}