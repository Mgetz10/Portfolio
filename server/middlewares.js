function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) next();
  else {
    next({ status: 403, message: 'Unauthorized' });
    res.redirect('/login');
  }
}

module.exports = {
  isLoggedIn
};
