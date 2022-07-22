const {User} = require("../../models");
const userSignupRepoConverter = require("./UserSignupRepoConverter");
const {JWTToken, randomOTP} = require("../../utils/utils")

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
        return userSignupRepoConverter.SignupDBOToDomain(user);
    }, 

    createUser: async (body) => {

        if(body.first_name){
            body.full_name = body.first_name
        }

        if(body.last_name){
            body.full_name = `${body.full_name} ${body.last_name}`
        }

        if(body.password == body.checkPassword){
            body.password
        }else{
            throw new Error("Wrong Password")
        }

       let user = await User.create(body);

       user = JSON.parse(JSON.stringify(user));

       let otp = user.otp;
        otp = randomOTP()

        user.otp = otp

       let token = JWTToken(user.user_id);

        return userSignupRepoConverter.SignupDBOToDomain(user, token);
    }
}

module.exports = SignupRepository