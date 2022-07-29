const {User}  = require("../../models")

const VerifyEmailRepository = {
    findUserForVerify: async (body) => {
        let {email_id, otp} = body;

        let user = await User.findOne({
            where:{
                email_id,
                status: 1
            }
        })

        if(!user) throw new Error("User Not Found");

        if(user.otp !== otp){
            throw new Error("Wrong OTP!!!");
        }

        let user_id = user.user_id

        return {user_id};
    },

    updateVerifyUser: async (body)=> {
        let {user_id} = body;

     await User.update({otp: null, updatedAt: new Date(), email_verify: true}, {
            where:{
                user_id
            }
        });

        let message = "User Verified";

        return { message }
    }
}

module.exports = VerifyEmailRepository