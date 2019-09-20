const mysql = require('mysql');
const util = require('util')
const env = require('../appenv');

// Create the pool using env settings
const pool = mysql.createPool({
  host: env.db_host,
  user: env.db_user,
  port: env.db_port,
  password: env.db_password,
  database: env.db_name
})

pool.on('acquire', function (conn) {
  console.log('Connection %d acquired', conn.threadId);
})

pool.on('connection', function (conn) {
  console.log('Connection %d established', conn.threadId);
})

pool.on('enqueue', function () {
  console.log('Waiting for available connection slot');
})

pool.on('release', function (conn) {
  console.log('Connection %d released', conn.threadId);
})

// Initialize a connection to check for common errors
pool.getConnection((err, conn) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.')
    }
  }
  if (conn) conn.release()

  return
})

// Promisify the query to allow async calls
pool.query = util.promisify(pool.query)

// Export the pool to make the connection available elsewhere
module.exports = pool