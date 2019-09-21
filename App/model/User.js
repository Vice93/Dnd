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
}