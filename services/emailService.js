const nodemailer = require("nodemailer");
const {google} = require("googleapis");


const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENTID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
const AccessToken = oAuth2Client.getAccessToken();

 async function sendEmail(receverEmail, subject, html) {
  try {
    const transform = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "patelsachinsp269@gmail.com",
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: await AccessToken,
      },
    });

    const mailOption = {
      from: "The Blogs Hub <patelsachinsp269@gmail.com>",
      to: receverEmail,
      subject: subject,
      html: html,
    };

    await transform.sendMail(mailOption);
  } catch (err) {
    console.log(err);
    console.log(err.message);
  }
}

module.exports = sendEmail
