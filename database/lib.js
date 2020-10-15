const mysql = require('./initPool.js')
const LINQ = require('node-linq').LINQ
const bcrypt = require('bcrypt')
const User = require('../model/User.js')

const encryptPassword = (password, callback) => {
  bcrypt.hash(password, 10, (err, hash) => {
    if(err) throw err
    callback(hash)
  })
}

const comparePassword = (password, hash, callback) => {
  bcrypt.compare(password, hash, (err, matches) => {
    if(matches)
      callback(true)
    else
      callback(false)
  })
}

const login = (username, password, callback) => {
  mysql('users')
    .select()
    .where('Username', username)
    .then((rows) => {
      if(rows.length === 0)
        callback({ success: false, message: 'Invalid username or password' })
      else {
        let hashedPassword = rows[0].Password
        comparePassword(password, hashedPassword, (success) => {
          if(success)
            callback({ success: true, message: '', user: new User(rows[0]) })
          else
            callback({ success: false, message: 'Invalid username or password' })
        })
      }
    }).catch((ex) =>  {
      console.log(ex)
      callback({ success: false, message: 'An unhandeled exception occured'})
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
  registerUser,
  login
}