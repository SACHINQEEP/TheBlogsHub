import CONFIG from "../config/config";

const jwt = require("jsonwebtoken");
const { findUser } = require("../Repository/Signup/UserSignupRepository");
const success = require("./success");

export const checkJwt = async function (req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);

  let jwtPayload;

  try {
    jwtPayload = jwt.verify(token, CONFIG.Secrat_key);

    res.locals.jwtPayload = jwtPayload;

    let user_id = jwtPayload.id.id;
    const user = findUser(user_id);

    res.locals.user = user;
  } catch (err) {
    return success(res, 401, false, err.message, null);
  }

  const { id, user_id } = jwtPayload;
  const newToken = jwt.sign({ id, user_id }, CONFIG.Secrat_key, {
    expiresIn: "1h",
  });

  res.setHeader("token", newToken);

  next()
};
