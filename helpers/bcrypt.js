const bcrypt = require("bcrypt");
const saltRounds = 10;

function hashPassword(password) {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      // Store hash in your password DB.
    });
  });
}

function comparePassword(password) {
  bcrypt.compare(password, hash, function (err, result) {
    // result == true
  });
}

module.exports = { bcrypt, saltRounds };
