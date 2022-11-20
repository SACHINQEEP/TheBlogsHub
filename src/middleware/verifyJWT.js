const jwt = require("jsonwebtoken");
const _repos = require("../APIs/repository/repository");
const success = require("./success");

const checkJwt = async function (req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  let jwtPayload;

  try {
    jwtPayload = jwt.verify(token, process.env.Secrat_key);

    let _id = jwtPayload.id;

    let user = await _repos.findUser({ _id });

    user = JSON.parse(JSON.stringify(user));

    req.user = user;
    res.locals.user = user;
    next()

  } catch (err) {
    return success(res, 401, false, err.message, "unauthorized access");
  }

};

// require("crypto").randomBytes(35).toString("hex")


module.exports = checkJwt