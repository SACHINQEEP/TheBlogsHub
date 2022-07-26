const SigninRequest = require("./SigninRequest");
const SignupResponse = require("../Signup/SignupResponse");

module.exports = SigninConverter = {
    requestToDTO:(body) => {
        return new SigninRequest(
            body.email_id, body.password
        )
    },

    toResponse: (responseData) => {
        return new SignupResponse(
            responseData.user_id,
            responseData.name,
            responseData.email_id,
            responseData.user_type,
            responseData.email_verify,
            responseData.otp,
            responseData.status,
            responseData.signup_type,
            responseData.token
        )
    }
}