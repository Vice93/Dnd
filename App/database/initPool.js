const env = require('../appenv');

// Initialize Knex using a pool
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: env.db_host,
    user: env.db_user,
    password: env.db_password,
    database: env.db_name,
    port: env.db_port
  },
  pool: { 
    min: 0, 
    max: 10
  }
})

module.exports = knex