const { Router } = require("express");
const router = Router();
const sessionController = require("./controller");

router.get("/", (req, res) => {
  res.send("from focus session route!");
});
router.get("/all", sessionController.getAllFocusSession);
router.get("/todays-session/:userid", sessionController.getTodaysSession);
router.get(
  "/last-seven-days-session/:userid",
  sessionController.getLastSevenDaysSession
);
router.get(
  "/this-month-session/:userid",
  sessionController.getThisMonthSession
);
router.get("/this-year-session/:userid", sessionController.getThisYearSession);
router.post("/add-session", sessionController.addSession);
router.get("/:id", sessionController.getAllFocusSessionByUserId);

module.exports = router;
