const SignupRepository = require("../../Repository/Signup/UserSignupRepository");

function CreateUser(data){
    return SignupRepository.createUser(data);
}

module.exports = CreateUser