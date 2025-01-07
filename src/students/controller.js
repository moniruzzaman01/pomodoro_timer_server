const pool = require("../../postgres");
const studentQueries = require("./queries");

const getStudents = (req, res) => {
  pool.query(studentQueries.getAllStudents, (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
module.exports = { getStudents };
