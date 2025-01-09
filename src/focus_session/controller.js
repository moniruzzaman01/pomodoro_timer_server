const pool = require("../../postgres");
const sessionController = require("./queries");

const getAllFocusSession = (req, res) => {
  pool.query(sessionController.getAllSession, (err, result) => {
    if (err) throw err;
    res.status(200).send({ count: result.rows.length, data: result.rows });
  });
};
const getAllFocusSessionByUserId = (req, res) => {
  const { id } = req.params;
  pool.query(sessionController.getAllSessionByUserId, [id], (err, result) => {
    if (err) throw err;
    res.status(200).send({ count: result.rows.length, data: result.rows });
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
const getTodaysSession = (req, res) => {
  const { userid } = req.params;
  pool.query(sessionController.todaysSession, [userid], (err, result) => {
    if (err) throw err;
    res.status(200).send({ count: result.rows.length, data: result.rows });
  });
};
const getLastSevenDaysSession = (req, res) => {
  const { userid } = req.params;
  pool.query(
    sessionController.lastSevenDaysSession,
    [userid],
    (err, result) => {
      if (err) throw err;
      res.status(200).send({ count: result.rows.length, data: result.rows });
    }
  );
};
const getThisMonthSession = (req, res) => {
  const { userid } = req.params;
  pool.query(sessionController.thisMonthSession, [userid], (err, result) => {
    if (err) throw err;
    res.status(200).send({ count: result.rows.length, data: result.rows });
  });
};
const getThisYearSession = (req, res) => {
  const { userid } = req.params;
  pool.query(sessionController.thisYearSession, [userid], (err, result) => {
    if (err) throw err;
    res.status(200).send({ count: result.rows.length, data: result.rows });
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
