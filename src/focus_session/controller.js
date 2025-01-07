const pool = require("../../postgres");
const sessionController = require("./queries");

const getAllFocusSession = (req, res) => {
  pool.query(sessionController.getAllSession, (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
const getAllFocusSessionByUserId = (req, res) => {
  const { id } = req.params;
  pool.query(sessionController.getAllSessionByUserId, [id], (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
const addSession = (req, res) => {
  const { userid, duration } = req.body;
  pool.query(
    sessionController.addSession,
    [userid, duration],
    (err, result) => {
      if (err) throw err;
      res.status(200).send("Session added successfully!");
    }
  );
};

module.exports = {
  getAllFocusSession,
  getAllFocusSessionByUserId,
  addSession,
};
