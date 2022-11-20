const { hashPassword, JWTToken, randomOTP, verifyPassword } = require("../../utils/utils");
const _repos = require("../repository/repository");


module.exports = {
    signup: async (request) => {
        try {
            let { email_id, password, confirmPassword } = request;

            if (password != confirmPassword) throw new Error("Incorrecct Password!");

            request.password = await hashPassword(password);

            user = await _repos.findUser({ email_id });

            if (user) throw new Error("User Already Exist");

            request['otp'] = randomOTP();

            user = await _repos.createUser(request);

            user["token"] = await JWTToken(user._id);

            return user;
        } catch (err) {
            throw new Error(err.message)
        }
    },

    signin: async (request) => {
        try {
            let { email_id, password } = request;
            email_id = email_id.toLowerCase();

            let user = await _repos.findUser({ email_id });

            if (!user) throw new Error("User not Found");

            if (user.status == 3) {
                throw new Error("You have been blocked by admin")
            }

            if (user.email_verify !== 1) {
                throw new Error("Please verify your email_id")
            }

            let verifyPass = await verifyPassword(user.password, password);

            if (!verifyPass) throw new Error("Incorrect Password");

            user['token'] = await JWTToken(user._id);

            console.log(user);

            return user;

        } catch (err) {
            throw new Error(err.message)
        }
    },

    forgotPassword: async (request) => {
        try {
            let { email_id } = request;
            email_id = email_id.toLowerCase();

            let user = await _repos.findUser({ email_id });

            if (!user) throw new Error("User not found");

            let otp = randomOTP();

            let link = `<a href="${process.env.FORGOTPASSWORD}">${process.env.FORGOTPASSWORD}</a>`
            let html = `<p>Your forgot password OTP is ${otp} & through the give link you are to change your password <p>
              ${link}
              `;
            let subject = "Forgot Password";

            //   await sendEmail(user.email_id, subject, html);

            await _repos.updateUser({ _id: user._id }, { otp })

            let message = "Kindly check your email we have shared you the otp!!"

            return message

        } catch (err) {
            throw new Error(err.message)
        }
    },

    changePassword: async (request) => {
        try {
            let { email_id, otp, new_password, old_password } = request;
            let message = "";

            email_id = email_id.toLowerCase();

            let user = await _repos.findUser({ email_id });

            let newPassword = await hashPassword(new_password);

            if (!user) throw new Error("User not Found");

            let password = user.password;
            let user_id = user.user_id;

            if (user && old_password) {
                let verify = await verifyPassword(password, old_password);

                if (!verify) throw new Error("Incorrect Password");

                message = "Password changed!!";
            }

            if (user && otp) {
                if (otp == user.otp) throw new Error("Wrong OTP");

                message = "OTP Verified!!"
            }


            await _repos.updateUser({ _id: user._id }, request);

            return message;

        } catch (err) {
            throw new Error(err.message)
        }
    },

    verifyUser: async (request) => {
        try {
            let { email_id, otp } = request;

            let user = await _repos.findUser({ email_id, status: 1 });

            if (!user) throw new Error("User Not Found");

            if (user.otp !== otp) {
                throw new Error("Wrong OTP!!!");
            }

            await _repos.updateUser({ _id: user._id }, {
                $set: {
                    otp: null, email_verify: 1
                }
            });

            let message = "User Verified";

            return message;
        } catch (err) {
            throw new Error(err.message)
        }
    }
}