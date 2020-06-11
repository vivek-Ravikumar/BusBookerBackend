const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;

const tokenGenerator = (userId = "") => {
  const token = jwt.sign(
    {
      userId
    },
    jwtKey,
    {
      expiresIn: "4 hours"
    }
  );
  return token;
};

const tokenValidator = (token = "") => {
  try {
    const result = jwt.verify(token, jwtKey);
    return result;
  } catch (e) {
    console.error(e);
  }
};

module.exports.tokenGenerator = tokenGenerator;
module.exports.tokenValidator = tokenValidator;
