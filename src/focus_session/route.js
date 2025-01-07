const { Router } = require("express");
const router = Router();
const focusSessionController = require("./controller");

router.get("/", (req, res) => {
  res.send("from focus session route!");
});
router.get("/all", focusSessionController.getAllFocusSession);

module.exports = router;
