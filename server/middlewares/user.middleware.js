const jwt = require('jsonwebtoken');
const User = require('../model/User');

module.exports.authencation = async (req, res, next) => {
  if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1];
    if (token) {
      console.log(token)
      const decoded = jwt.verify(token, 'privateKey');
      const user = await User.findOne({ email: decoded.email });
      if (user) {
        if (user.password === decoded.password) {
          req.user = user;
          next();
        }
      }
    } else {
      res.json({ status: 401, data: "Authencation Error"})
    }
  }
}