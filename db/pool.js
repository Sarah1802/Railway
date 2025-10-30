const { Pool } = require('pg');

module.exports = new Pool({
//   host: "localhost", // or wherever the db is hosted
//   user: "",
//   database: "top_users",
//   password: "<role_password>",
//   port: 5432 // The default port
    connectionString: process.env.DATABASE_URL
});