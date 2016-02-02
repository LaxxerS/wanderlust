var jwt = require('jsonwebtoken'),
  config = require('../config'),

  auth;

auth = {
  user: function(req, res, next) {
    var token = req.headers['authorization'];

    if(!token) {
      return res.status(401).send({ status: 401, message: 'Access denied', type: 'unauthorized' });
    }

    jwt.verify(token.split(" ")[1], config.token.secret, function(error, decoded) {
        if(error) {
          return res.status(401).send({ status: 401, message: 'Access denied', type: 'unauthorized' });
        }
    });

    next();
  }
}

module.exports = auth;
