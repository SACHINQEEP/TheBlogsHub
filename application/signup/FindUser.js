const SignupRepository = require("../../Repository/Signup/UserSignupRepository");


function FindUser(userData) {
    return SignupRepository.findUser(userData);
}

module.exports = FindUser