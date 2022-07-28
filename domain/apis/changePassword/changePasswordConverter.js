const ChangePasswordRequest = require("./changePasswordRequest")
const ChangePasswordResponse = require("./changePasswordResponse")



module.exports = changePasswordConverter ={
    requestTODTO: (body)=> {
        return new ChangePasswordRequest(
            body.email_id,
            body.otp,
            body.new_password, 
            body.old_password
        )
    },

    toResponse: (body)=> {
        return new ChangePasswordResponse(
            body.message
        )
    }
}