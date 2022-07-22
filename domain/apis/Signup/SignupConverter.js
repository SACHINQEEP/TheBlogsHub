const SignupRequest = require("./SignupRequest")
const SignupResponse = require("./SignupResponse")

module.exports =  SignupConverter = {
    requestToDTO:(body) =>{
        return new SignupRequest(
            body.first_name, body.last_name, body.email_id, body.password, body.checkPassword, body.user_type
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

// module.exports = {SignupConverter}