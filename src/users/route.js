const { Router } = require("express");
const router = Router();
const usersController = require("./controller");

router.get("/", (req, res) => {
  res.send("from users route!");
});
router.get("/all", usersController.getStudents);

module.exports = router;
