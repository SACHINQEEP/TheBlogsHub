const { User } = require("../../models");
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
