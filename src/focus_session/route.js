const { Router } = require("express");
const router = Router();
const sessionController = require("./controller");

router.get("/", (req, res) => {
  res.send("from focus session route!");
});
router.get("/all", sessionController.getAllFocusSession);
router.post("/add-session", sessionController.addSession);
router.get("/:id", sessionController.getAllFocusSessionByUserId);

module.exports = router;
