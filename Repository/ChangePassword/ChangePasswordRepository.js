const {User} = require("../../models");
const { verifyPassword, hashPassword } = require("../../utils/utils");


const ChangePasswordRepository = {
    findUser: async (body)=> {

        let {email_id, otp, new_password, old_password} = body;
        console.log(old_password);

        let user = await User.findOne({
            where:{
                email_id
            }
        })

        let newPassword = await hashPassword(new_password);

        if(!user) throw new Error("User not Found");

        let password = user.password;

        let user_id = user.user_id;
        if(user && old_password){
            let verify = await verifyPassword(password, old_password);

            if(!verify) throw new Error("Incorrect Password");

            return {user_id, newPassword}
        }

        let userOTP = user.otp;

        if(user && !old_password){
            if(otp !== userOTP) throw new Error("Wrong OTP");

            return {user_id, newPassword}
        }

    },

    updateUser: async (body)=> {
        let {user_id, newPassword} = body;

        await User.update({password: newPassword, otp:null, updatedAt: new Date()},{
            where:{
                user_id
            }
        })

        let message = "Password updated successful";

        return {message};
    }
}

module.exports = ChangePasswordRepository