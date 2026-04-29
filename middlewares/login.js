const isLoggedIn = function (req, res, next) {
  if (!req.session.userId) {
    const msg = "Please login first";
    res.redirect("/auth/login?error=" + msg);
  } else {
    next();
  }
};

const isAdmin = function (req, res, next) {
  if (req.session.userId && req.session.role !== "Admin") {
    const msg = "You do not have permission";
    res.redirect("/home?error=" + msg);
  } else {
    next();
  }
};

const isMentor = function (req, res, next) {
  if (req.session.userId && req.session.role !== "Mentor") {
    const msg = "You do not have permission";
    res.redirect("/home?error=" + msg);
  } else {
    next();
  }
};

module.exports = { isLoggedIn, isAdmin, isMentor };
