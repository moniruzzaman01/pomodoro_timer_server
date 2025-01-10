const pool = require("../../postgres");
const sessionController = require("./queries");

const getAllFocusSession = (req, res) => {
  pool.query(sessionController.getAllSession, (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
const getAllFocusSessionByUserId = (req, res) => {
  const { email } = req.params;
  pool.query(
    sessionController.getAllSessionByUserId,
    [email],
    (err, result) => {
      if (err) throw err;
      res.status(200).send(result.rows);
    }
  );
};
const addSession = (req, res) => {
  const { email, duration } = req.body;
  pool.query(sessionController.addSession, [email, duration], (err, result) => {
    if (err) throw err;
    res.status(200).send("Session added successfully!");
  });
};
const getTodaysSession = (req, res) => {
  const { email } = req.params;
  pool.query(sessionController.todaysSession, [email], (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
const getLastSevenDaysSession = (req, res) => {
  const { email } = req.params;
  pool.query(sessionController.lastSevenDaysSession, [email], (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
const getThisMonthSession = (req, res) => {
  const { email } = req.params;
  pool.query(sessionController.thisMonthSession, [email], (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
const getThisYearSession = (req, res) => {
  const { email } = req.params;
  pool.query(sessionController.thisYearSession, [email], (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};

module.exports = {
  getAllFocusSession,
  getAllFocusSessionByUserId,
  addSession,
  getTodaysSession,
  getLastSevenDaysSession,
  getThisYearSession,
  getThisMonthSession,
};
