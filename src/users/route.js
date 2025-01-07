const { Router } = require("express");
const router = Router();
const usersController = require("./controller");

router.get("/", (req, res) => {
  res.send("from users route!");
});
router.get("/all", usersController.getUsers);
router.post("/add-a-user", usersController.addAUser);
router.get("/:id", usersController.getAUser);

module.exports = router;
