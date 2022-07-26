const SinginRepository = require("../../Repository/Signin/UserSigninReqpository");

function getUser(userData){
    return SinginRepository.findUser(userData)
}

module.exports = getUser