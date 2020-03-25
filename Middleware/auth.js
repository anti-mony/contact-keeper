const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get the Toekn from the Header
  const token = req.header("x-auth-token");

  // If there is no token
  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization Denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid Token" });
  }
};
