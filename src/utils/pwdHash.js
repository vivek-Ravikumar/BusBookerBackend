const bcrypt = require("bcrypt");
const saltRounds = 5;

const generateHashSync = plainTextPassword => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(plainTextPassword, salt);
  return hash;
};

const compareHash = (plainTextPassword, passwordHash) => {
  const result = bcrypt.compareSync(plainTextPassword, passwordHash);
  return result;
};


exports.generateHashSynch = generateHashSync;
exports.compareHash = compareHash;