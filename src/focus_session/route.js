const { Router } = require("express");
const router = Router();
const sessionController = require("./controller");

router.get("/", (req, res) => {
  res.send("from focus session route!");
});
router.get("/all", sessionController.getAllFocusSession);
router.get("/todays-session/:email", sessionController.getTodaysSession);
router.get(
  "/last-seven-days-session/:email",
  sessionController.getLastSevenDaysSession
);
router.get("/this-month-session/:email", sessionController.getThisMonthSession);
router.get("/this-year-session/:email", sessionController.getThisYearSession);
router.post("/add-session", sessionController.addSession);
router.get("/:email", sessionController.getAllFocusSessionByUserId);

module.exports = router;
