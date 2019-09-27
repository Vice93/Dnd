const mysql = require('./initPool.js')
const LINQ = require('node-linq').LINQ
const bcrypt = require('bcrypt')

const encryptPassword = (password, callback) => {
  bcrypt.hash(password, 10, (err, hash) => {
    if(err) throw err
    callback(hash)
  })
}


const registerUser = (username, email, password, callback) => {
  mysql('users')
    .select()
    .where('Username', username)
    .orWhere('Email', email)
    .then((rows) => {
      if (rows.length === 0)
        encryptPassword(password, (hashedPw) => {
          mysql('users')
          .insert({
            Username: username,
            Email: email,
            Password: hashedPw,
            CreatedDate: new Date(),
            UpdatedDate: null
          })
          .then(() => {
            callback({ created: true, message: 'User created' })
          }).catch((err) => {
            throw err
          })
        })
      else if (new LINQ(rows).Any(x => x.Username.toLowerCase() === username.toLowerCase()))
        callback({ created: false, message: 'Username already exists' })
      else if (new LINQ(rows).Any(x => x.Email.toLowerCase() === email.toLowerCase()))
        callback({ created: false, message: 'Email already exists.' })
      else
        callback({ created: false, message: 'Something went wrong' })
    }).catch((ex) => {
      console.log(ex)
      callback({ created: false, message: 'An unhandled exception occured.' })
    })
}


module.exports = {
  registerUser
}