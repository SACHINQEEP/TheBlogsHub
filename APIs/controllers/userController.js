const SignupConverter = require("../../domain/apis/Signup/SignupConverter")
const FindUser = require("../../application/signup/FindUser")
const CreateUser = require("../../application/signup/CreateUser")

const {User} = require("../../models")

const userSignup = async function(req, res){
    try{
        let {first_name, last_name, email_id, password, user_type} = req.body;
        console.log(first_name)

        let reqDTO = SignupConverter.requestToDTO(first_name, last_name, email_id, password, user_type);

        let user = await FindUser(reqDTO);

        user = await CreateUser(req.body);

        user = SignupConverter.toResponse(user);

        res.status(200).json({
            status: true,
            message: "Signup Success",
            user
        })
    }catch(err){
        res.json({
            status: false,
            message: err.message
        })
    }
}

module.exports = {
    userSignup
}