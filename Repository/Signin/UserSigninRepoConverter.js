const SinginDomain = require("../../domain/signupDomain");

const userSigninRepoConverter = {
    SigninDBTODomain: (data, jwt) => {
        if(data == null) return null;

        return new SinginDomain(
            data.user_id,
            data.full_name,
            data.email_id,
            data.user_type,
            data.email_verify,
            data.otp,
            data.status,
            data.signup_type,
            jwt
        )
    }
}

module.exports = userSigninRepoConverter