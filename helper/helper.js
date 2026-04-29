const bcrypt = require("bcryptjs");

function hashPassword(pwd) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(pwd, salt);

  return has;
}

module.exports = hashPassword;
