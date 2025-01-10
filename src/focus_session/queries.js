const getAllSession = "SELECT * FROM focus_session";
const getAllSessionByUserId = "SELECT * FROM focus_session WHERE email = $1";
const addSession = "INSERT INTO focus_session (email,duration) VALUES ($1,$2)";
const todaysSession =
  "SELECT * FROM focus_session WHERE DATE(timestamp) = CURRENT_DATE AND email = $1";
const lastSevenDaysSession =
  "SELECT * FROM focus_session WHERE timestamp >= NOW() - INTERVAL '7 days' AND email = $1";
const thisMonthSession =
  "SELECT * FROM focus_session WHERE timestamp >= DATE_TRUNC('month', CURRENT_DATE)  AND timestamp < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' AND email = $1";
const thisYearSession =
  "SELECT * FROM focus_session WHERE EXTRACT(YEAR FROM timestamp) = EXTRACT(YEAR FROM CURRENT_DATE) AND email = $1";

module.exports = {
  getAllSession,
  getAllSessionByUserId,
  addSession,
  todaysSession,
  lastSevenDaysSession,
  thisYearSession,
  thisMonthSession,
};
