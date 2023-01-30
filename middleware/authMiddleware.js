const requireAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
  next();
};

module.exports = requireAuth;
