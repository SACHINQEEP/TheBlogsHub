const ForgotPassword = require("../../Repository/ForgotPassword/ForgotPasswordRepository");

function findUser(data){
    return ForgotPassword.findUser(data);
}

module.exports = findUser
