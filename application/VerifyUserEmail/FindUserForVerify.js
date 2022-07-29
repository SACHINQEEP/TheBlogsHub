const VerifyEmailRepository = require("../../Repository/verifyUserEmail/VerifyEmailRepository")

function FindUserForVerify(body){
    return VerifyEmailRepository.findUserForVerify(body);
}

module.exports= FindUserForVerify;