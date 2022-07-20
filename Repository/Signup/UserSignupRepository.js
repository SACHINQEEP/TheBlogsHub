const {User} = require("../../models");
const userSignupRepoConverter = require("./UserSignupRepoConverter");

const SignupRepository = {
    findUser: async (data) => {
        let {email_id} = data
        
        let user = await User.findOne({
            where:{
                email_id
            }
        });
    
        if(user){
            throw new Error("User Already Registered")
        }

        console.log("user", user);

        return userSignupRepoConverter.SignupDBOToDomain(user);
    }, 

    createUser: async (body) => {

        if(body.first_name){
            body.full_name = body.first_name
        }

        if(body.last_name){
            body.full_name = `${body.full_name} ${body.last_name}`
        }

       let user = await User.create(body);
    
       user = JSON.parse(JSON.stringify(user));
    //    console.log("createUser:", user);

        return userSignupRepoConverter.SignupDBOToDomain(user);
    }
}

module.exports = SignupRepository