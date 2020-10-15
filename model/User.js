const bcrypt = require('bcrypt')
const middleware = require('../api/middleware.js')


module.exports = class User {

  constructor({Id, Username, Email, Password, CreatedDate, UpdatedDate}) {
    this.Id = Id
    this.Username = Username
    this.Email = Email
    this.Password = Password
    this.CreatedDate = CreatedDate
    this.UpdatedDate = UpdatedDate
  }

  testFunction() {
    console.log("Mapping to type works. Username: " + this.Username)
  }

  getUser() {
    return {
      id: this.Id,
      username: this.Username,
      email: this.Email,
      createdDate: this.CreatedDate,
      updatedDate: this.UpdatedDate
    }
  }

  getToken() {
    return middleware.generateToken(this.Username)
  }

  comparePassword(password, next) {
    bcrypt.compare(password, this.Password, (err, isMatch) => {
      if(err) return next(err)
      next(null, isMatch)
    })
  }
}