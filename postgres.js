require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});
module.exports = pool;
