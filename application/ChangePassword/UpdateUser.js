const ChangePasswordRepository = require("../../Repository/ChangePassword/ChangePasswordRepository");

function UpdateUserChangePassword(body){
    return ChangePasswordRepository.updateUser(body);
}

module.exports = UpdateUserChangePassword