const VerifyEmailRepository = require("../../Repository/verifyUserEmail/VerifyEmailRepository");


function UpdateUserForVerify(body){
    return VerifyEmailRepository.updateVerifyUser(body);
}

module.exports = UpdateUserForVerify