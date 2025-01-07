const pool = require("../../postgres");

const getAllFocusSession = (req, res) => {
  pool.query("SELECT * FROM focus_session", (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
module.exports = {
  getAllFocusSession,
};
