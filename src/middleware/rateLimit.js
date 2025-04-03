const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100, //
    message: 'Too many requests from this IP, please try again after 10 minutes',
    keyGenerator: (req) => req.ip,
});

module.exports = limiter;