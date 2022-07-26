const {User} = require("../../models");
const {verifyPassword, JWTToken} = require("../../utils/utils");
const userSigninRepoConverter = require("./UserSigninRepoConverter");


const SinginRepository = {
    findUser: async(data) => {
        let {email_id, password} = data;

        if(email_id){
            email_id = email_id.toLowerCase();
        }

        let user = await User.findOne({
            where:{
                email_id
            }
        });

        if(!user) throw new Error("Unser not Found");

        if(user.status == 3){
            throw new Error("You have been blocked by admin")
        }

        if(user.email_verify !== 1){
            throw new Error("Please verify your email_id")
        }

        let dbPassword = user.password;

        let verifyPass = await verifyPassword(dbPassword, password);

        if(!verifyPass) throw new Error("Incorrect Password");

        let token = JWTToken(user.user_id);

        return userSigninRepoConverter.SigninDBTODomain(user, token)
    }
}

module.exports = SinginRepository