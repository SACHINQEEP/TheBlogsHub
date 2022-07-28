const ChangePasswordRepository = require("../../Repository/ChangePassword/ChangePasswordRepository");


function FindUserForChangePassword(body){
    return ChangePasswordRepository.findUser(body);
}

module.exports = FindUserForChangePassword