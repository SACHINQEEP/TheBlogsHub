const { User } = require("../../models");
const userSignupRepoConverter = require("./UserSignupRepoConverter");
const { JWTToken, randomOTP, hashPassword } = require("../../utils/utils");
const { Op } = require("sequelize");
const sendEmail  = require("../../services/emailService");

const SignupRepository = {
  findUser: async (data) => {
    let { email_id} = data;

    let user = await User.findOne({
      where: {
        // [Op.any]: [{email_id: data.email_id}, {user_id:data.user_id}],
        email_id
      },
    });

    if (user) {
      throw new Error("User Already Registered");
    }
    return userSignupRepoConverter.SignupDBOToDomain(user);
  },

  createUser: async (body) => {
    if (body.first_name) {
      body.full_name = body.first_name;
    }

    if (body.last_name) {
      body.full_name = `${body.full_name} ${body.last_name}`;
    }

    if (body.password == body.confirmPassword) {
      body.password = await hashPassword(body.password);
    } else {
      throw new Error("Wrong Password");
    }

    let user = await User.create(body);

    let otp = user.otp;
    otp = randomOTP();

    user.otp = otp;

    await User.update({otp: otp},{
      where:{
        user_id: user.user_id
      }
    })

    let message = `<h1>Your verification OTP is: ${otp}</h1>`;
    let subject = "Email verification"

   await sendEmail(user.email_id, subject, message);

    user = JSON.parse(JSON.stringify(user));

    let token = JWTToken(user.user_id);

    return userSignupRepoConverter.SignupDBOToDomain(user, token);
  },
};

module.exports = SignupRepository;
