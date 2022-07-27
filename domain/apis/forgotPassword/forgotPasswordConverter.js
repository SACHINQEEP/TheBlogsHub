const ForgotPasswordRequest = require("./forgotPasswordRequest")
const forgotPasswordResponse = require("./forgotPasswordResponse")

module.exports = forgotPassword = {
    requestToDTO: (body)=> {
        return new ForgotPasswordRequest(
            body.email_id
        )
    }, 

    toResponse: (body) => {
        return new forgotPasswordResponse(
            body.message
        )
    }
}