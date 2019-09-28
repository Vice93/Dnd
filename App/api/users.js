const mysql = require('../database/initPool.js')
const User = require('../model/User.js')
const lib = require('../database/lib.js')
const middleware = require('./middleware.js')

module.exports = (router) => {

  router.post('/register', (req, res) => {
    try {
      let body = req.body
      if (body.username === '' || body.email === '' || body.password === '') {
        res.status(404)
        return res.json({ success: false, message: 'Bad Request: Body is missing information.' })
      }
      lib.registerUser(body.username, body.email, body.password, (result) => {
        // IF result.created == true, send email asking for verification, then they can login.
        return res.json(result)
      })
    }
    catch(ex) {
      console.log(ex)
      return res.json({success: false, message: 'An unhandled exception occured.'})
    }
  })

  router.post('/login', (req, res) => {
    try{
      let body = req.body
      
      lib.login(body.username, body.password, (result) => {
        if(result.success)
          return res.json({ success: true, message: 'OK - Success', data: { user: result.user.getUser(), token: result.user.getToken() } })

        return res.json({ success: false, message: result.message, data: { user: null } })
      })
    }
    catch(ex) {
      console.log(ex)
      return res.json({success: false, message: 'An unhandled exception occured.'})
    }
  })

  router.get('/me', middleware.verifyToken, (req, res) => {
    let username = req.decoded.username
    
    mysql('users').where('Username', username).first().then((user) => new User(user)).then((user) => {
      if (user == null)  {
        res.status(401)
        return res.json({ success: false, message: 'Unauthorized - Invalid username.', data: { user: null } })
      }

      return res.json({ user: user.getUser() })
    })
  })

  return router
}