const SignupConverter = require("../../domain/apis/Signup/SignupConverter")
const FindUser = require("../../application/signup/FindUser")
const CreateUser = require("../../application/signup/CreateUser")
const success = require("../../middleware/success")
const SigninConverter = require("../../domain/apis/Signin/SigninConverter")
const getUser = require("../../application/Signin/FindUser")
const ForgotPasswordRequest = require("../../domain/apis/forgotPassword/forgotPasswordRequest")
const forgotPasswordConverter = require("../../domain/apis/forgotPassword/forgotPasswordConverter")
const findUser = require("../../application/ForgotPassword/FindUser")
const { updateUser } = require("../../Repository/ForgotPassword/ForgotPasswordRepository")
const changePasswordConverter = require("../../domain/apis/changePassword/changePasswordConverter")
const FindUserForChangePassword = require("../../application/ChangePassword/FIndUser")
const UpdateUserChangePassword = require("../../application/ChangePassword/UpdateUser")

const userSignup = async function(req, res){
    try{
        if(req.body.email_id){
            req.body.email_id = req.body.email_id.toLowerCase();
        }

        let reqDTO = SignupConverter.requestToDTO(req.body);

        let user = await FindUser(reqDTO);

        user = await CreateUser(req.body);

        user = SignupConverter.toResponse(user);

       return success(res, 200, true, "Signup successfully", user)

    }catch(err){
       return success(res, 400, false, err.message)
    }
}

const userSignin = async function(req, res){
    try{
        let reqDTO = SigninConverter.requestToDTO(req.body);

        let user = await getUser(reqDTO);

        user = SigninConverter.toResponse(user);

        return success(res, 200, true, "Signin Successful", user)
    }catch(err){
        return success(res, 400, false, err.message)
    }
}

const forgotPassword = async function(req, res){
    try{
        let reqDTO = forgotPasswordConverter.requestToDTO(req.body);

        let find = await findUser(reqDTO);

       let update = await updateUser(find);

       let user = forgotPasswordConverter.toResponse(update);

       let response = user.message;

        return success(res, 200, true, "Success", response);
    }catch(err){
        return success(res, 400, false, err.message)
    }
}


const changePassword = async function(req, res){
    try{

        let reqDTO = changePasswordConverter.requestTODTO(req.body);

        let find = await FindUserForChangePassword(reqDTO);

        let update = await UpdateUserChangePassword(find);

        let response = changePasswordConverter.toResponse(update);

        response = response.message;

        return success(res, 200, true, "Success", response)

    }catch(err){
        return success(res, 400, false, err.message)
    }
}

module.exports = {
    userSignup,
    userSignin,
    forgotPassword,
    changePassword
}