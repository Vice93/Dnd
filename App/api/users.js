const mysql = require('../database/initPool.js')
const User = require('../model/User.js')

module.exports = (router) => {
  // req = request, res = result
  // if the request from  the client  has parameters, we can access them here using req.query or req.body
  // router is sent as a parameter from app.js, and here we attach various rules to it
  // For instance, this one listens on the route defined in app.js ('/api/users'), and here we can specify further paths
  // This one now processes GET requests on the endpoint: 'http://localhost:3001/api/users/'
  router.get('/', (req,res) => {
    //Use mysql to query 'users' table, select everything then map the result to our User object
    mysql('users').select().map((user) => new User(user)).then((users) => {
      users.forEach(element => {
        // We can use functions defined on the model if we want to
        element.testFunction()
      })
      return res.json({ success: true, data: users })
    }).catch((ex) => {
      console.log(ex)
      return res.json({ success: false, err: ex })
    })
    return res.json({success:true, data: null})
  })

  return router
}