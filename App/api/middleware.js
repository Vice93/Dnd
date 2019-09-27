const secret = require('../appenv').secret
const jwt = require('jsonwebtoken')



const generateToken = (username) => {
  let token = jwt.sign({username: username}, secret, {expiresIn: '72'});

  return token;
}

module.exports = {
  generateToken: generateToken
}