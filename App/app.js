/* Imports */
const express = require('express')
let cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const appenv = require('./appenv.js')

const app = express()
app.use(cors({
  origin: [
    'http://localhost:3000',
    '<other ips you want to allow>',
  ],
  optionsSuccessStatus:200
}));

const router = express.Router()
const mysql = require('./database/initPool.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(logger(appenv.env))


router.get('/test', (req, res) => {
  mysql('users').select().then((data) => {
    return res.json({ success: true, data: data })
  }).catch((err) => {
    return res.json({ success: false, err: err })
  })
})

app.use('/api', router)

app.listen(appenv.api_port, () => console.log(`Listening on port ${appenv.api_port}`))