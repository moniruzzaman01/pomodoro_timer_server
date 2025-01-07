const pool = require("../../postgres");
const usersQueries = require("./queries");

const getStudents = (req, res) => {
  pool.query(usersQueries.getAllusers, (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
module.exports = { getStudents };
