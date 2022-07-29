const { User } = require("../../models");
const sendEmail = require("../../services/emailService");
const { randomOTP } = require("../../utils/utils");


const ForgotPassword = {
  findUser: async (body) => {
    let { email_id } = body;

    if (email_id) {
      email_id = email_id.toLowerCase();
    }

    let user =await User.findOne({
      where: {
        email_id,
      },
    });

    if (!user) throw new Error("User not found");

    let otp = randomOTP();

    let link = `<a href="${process.env.FORGOTPASSWORD}">${process.env.FORGOTPASSWORD}</a>`
    let html = `<p>Your forgot password OTP is ${otp} & through the give link you are to change your password <p>
    ${link}
    `;
    let subject = "Forgot Password";

    await sendEmail(user.email_id, subject, html);

    let user_id = user.user_id;

    return {user_id, otp}
  },

  updateUser: async (body) => {
    let { otp, user_id } = body;

    await User.update({ otp, updatedAt: new Date() },
      {
        where: {
          user_id,
        },
      }
    );

    let message =  "Link Shared on the given Email"

    return {message}
  },
};

module.exports = ForgotPassword;
