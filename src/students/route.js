const { Router } = require("express");
const router = Router();
const studentController = require("./controller");

router.get("/", (req, res) => {
  res.send("from student route!");
});
router.get("/all", studentController.getStudents);

module.exports = router;
