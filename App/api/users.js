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
      res.status(500)
      return res.json({ success: false, message: 'Unhandled exception occured.'})
    })
  })

  // Small example on how login could work, obviously not representative of anything realistic
  router.post('/login', (req,res) => {
    if(req.header.authorization == String.empty || !someAuthMiddleware(req.header.authorization)) {
      res.status(401)
      return res.json({ success: false, message: 'Unauthorized - Authorization failed.' })
    }
    if(req.query.userId == String.empty || req.query.userId == null) {
      res.status(400);
      return res.json({ success: false, message: 'Bad request - No user credentials found.'})
    }
    mysql('users').first(x => x.Id == req.query.userId).map((user) => user != null ? new User(user) : null).then((user) => {
      if(user == null) {
        res.status(401)
        return res.json({ success: false, message: 'Unauthorized - Invalid userId.' })
      }
      return res.json({ success: true, data: user})
    }).catch((ex) => {
      console.log(ex)
      res.status(500)
      return res.json({ success: false, message: 'Unhandled exception occured.'})
    })
  })

  return router
}

const someAuthMiddleware = (authInfo) => {
  return true
}