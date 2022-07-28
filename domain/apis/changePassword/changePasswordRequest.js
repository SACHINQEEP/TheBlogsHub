
module.exports = class ChangePasswordRequest{
    constructor(email_id, otp, new_password, old_password) {
        this.email_id = email_id;
        this.otp = otp;
        this.new_password = new_password;
        this.old_password = old_password;
    }
}