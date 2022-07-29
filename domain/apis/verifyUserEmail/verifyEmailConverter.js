const VerifyEmailRequest = require("./verifyEmailRequest");
const verifyEmailResponse = require("./verifyEmailResponse");


module.exports = VerifyEmailCOnverter = {
    RequestToDTO: (body) => {
        return new VerifyEmailRequest(body.email_id, body.otp);
    },

    toResponse: (body) => {
        return new verifyEmailResponse(body.message);
    }
}