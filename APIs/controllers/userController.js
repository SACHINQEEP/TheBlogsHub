
const {User} = require("../../models")

const userSignup = async function(req, res){
    try{
        let {email_id, full_name} = req.body;

        let user = User.findOne({
            where:{
                email_id
            }
        });
    
        if(user){
            throw new Error("User Already Registered")
        }
    
        User.create(req.body);

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