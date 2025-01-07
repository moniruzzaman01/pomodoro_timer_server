const getAllSession = "SELECT * FROM focus_session";
const getAllSessionByUserId = "SELECT * FROM focus_session WHERE userid = $1";
const addSession = "INSERT INTO focus_session (userid,duration) VALUES ($1,$2)";

module.exports = {
  getAllSession,
  getAllSessionByUserId,
  addSession,
};
