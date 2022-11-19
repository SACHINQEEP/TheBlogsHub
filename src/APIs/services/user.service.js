const { hashPassword, JWTToken, randomOTP } = require("../../utils/utils");
const _repos = require("../repository/repository");


module.exports = {
    signup: async (request) => {
        try {
            let { email_id, password, confirmPassword } = request;

            if (password != confirmPassword) throw new Error("Incorrecct Password!");

            password = await hashPassword(password);

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
            let { email_id } = request;
            email_id = email_id.toLowerCase();

        } catch (err) {
            throw new Error(err.message)
        }
    },

    forgotPassword: async (request) => {
        try {
            let { email_id } = request;
            email_id = email_id.toLowerCase();

        } catch (err) {
            throw new Error(err.message)
        }
    },

    changePassword: async (request) => {
        try {
            let { email_id } = request;
            email_id = email_id.toLowerCase();

        } catch (err) {
            throw new Error(err.message)
        }
    },

    verifyUser: async (request) => {
        try {
            let { email_id } = request;
            email_id = email_id.toLowerCase();

        } catch (err) {
            throw new Error(err.message)
        }
    }
}