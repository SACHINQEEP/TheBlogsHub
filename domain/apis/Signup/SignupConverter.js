const SignupRequest = require("./SignupRequest")
const SignupResponse = require("./SignupResponse")

module.exports =  SignupConverter = {
    requestToDTO:(first_name, last_name, email_id, password, user_type) =>{
        return new SignupRequest(
            first_name, last_name, email_id, password, user_type
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

        )
    }
}

// module.exports = {SignupConverter}