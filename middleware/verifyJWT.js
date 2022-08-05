
const CONFIG = require("../config/config")

const jwt = require("jsonwebtoken");
const { findUserForAuth } = require("../Repository/Signup/UserSignupRepository");
const success = require("./success");

const checkJwt = async function (req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  let jwtPayload;

  try {
    jwtPayload = jwt.verify(token, CONFIG.Secrat_key);
    console.log(jwtPayload);

    // res.locals.jwtPayload = jwtPayload;

    let user_id = jwtPayload.id;

    const user =await findUserForAuth(user_id);

    req.next = user;

    // console.log(req.next);
    next(null, req.next);

  } catch (err) {
    return success(res, 401, false, err.message, null);
  }
 
};


module.exports = checkJwt