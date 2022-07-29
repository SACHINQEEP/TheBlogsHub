

module.exports = class VerifyEmailRequest {
    constructor(email_id, otp){
        this.email_id = email_id;
        this.otp = otp;
    }
}