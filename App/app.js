/* Imports */
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const appenv = require('./appenv.js')

/**
* Initialize the application using express 
*/
const app = express()
/** 
* Use cors to allow cross-domain traffic (Frontend/Backend traffic). 
*/
app.use(cors({
  origin: [
    'http://localhost:3000', // This is the domain and port react runs at during development
    '<other ips you want to allow>',
  ],
  optionsSuccessStatus:200 // Optional, but you can define http status code for success here, 200 is the standard
}))
/** 
* Use bodyparser to parse the requests/responses we send. We are mostly using json, but some formdata is sent as urlencoded so we support both these. 
* There are also various more, but we wont be using those 
*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger(appenv.env))
/**
 * Next we need to define our routes. These are our api end-points where we listen to requests from react
 */
const router = express.Router()
const usersApi = require('./api/users.js')(router)
app.use('/api/users', usersApi)
/**
 * Finally we tell the app to listen to all traffic on the specified port
 */
app.listen(appenv.api_port, () => console.log(`Listening on port ${appenv.api_port}`))