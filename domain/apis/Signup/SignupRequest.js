module.exports = class SignupRequest {
    constructor(first_name, last_name, email_id, password, user_type){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email_id = email_id;
        this.password = password;
        this.user_type = user_type;
    }
}