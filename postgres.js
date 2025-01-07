require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_POSTGRES,
  port: 5432,
});
module.exports = pool;
