const SignupDomain = require("../../domain/signupDomain")

const userSignupRepoConverter = {
    SignupDBOToDomain: (data) => {

        if(data == null) return null

        return new SignupDomain(
            data.user_id,
            data.full_name,
            data.email_id,
            data.user_type,
            data.email_verify,
            data.otp,
            data.status,
            data.signup_type,
        )
    }
}

module.exports = userSignupRepoConverter