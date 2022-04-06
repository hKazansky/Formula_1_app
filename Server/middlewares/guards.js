function isUser(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

function isGuest(req, res, next) {
  if (!req.user) {
    next();
  } else {
    res.redirect("/");
  }
}

module.exports = {
  isUser,
  isGuest,
};
