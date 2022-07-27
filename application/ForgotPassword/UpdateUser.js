const ForgotPassword = require("../../Repository/ForgotPassword/ForgotPasswordRepository");


function UpdateUser(data){
    return ForgotPassword.updateUser(data);
}

module.exports = UpdateUser