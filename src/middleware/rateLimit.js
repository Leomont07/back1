const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again after 10 minutes',
  keyGenerator: (req) => req.ip,
  handler: (req, res, next) => {
    const server2Url = 'https://back2-jlgc.onrender.com';
    const redirectUrl = `${server2Url}${req.originalUrl}`;
    res.redirect(307, redirectUrl);
  },
});

module.exports = limiter;