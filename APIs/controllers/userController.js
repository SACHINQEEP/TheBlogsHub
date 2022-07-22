const SignupConverter = require("../../domain/apis/Signup/SignupConverter")
const FindUser = require("../../application/signup/FindUser")
const CreateUser = require("../../application/signup/CreateUser")
const success = require("../../middleware/success")

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
       return success(res, 400, false, err.message, null)
    }
}

module.exports = {
    userSignup
}