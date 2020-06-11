const { tokenValidator } = require("../utils/jwtToken");
const AuthFunction = (req, res, next) => {
  const token = req.header("Authorization");
  if (token) {
    try {
      const decoded = tokenValidator(token);

      if (decoded) {
        req.userId = decoded.userId;
        next();
      } else {
        res.status(400).send({ status: "invalid Token" });
      }
    } catch (e) {
      console.error(e.message);
      res.status(400).send({ status: "invalid Token! unauthorized" });
    }
  } else {
    res.status(400).send({ status: " No Token! unauthorized" });
  }
};

module.exports = AuthFunction;
