require("dotenv").config();
const express = require("express");
const usersRoutes = require("./src/users/route");
const focusSessionRoutes = require("./src/focus_session/route");
const port = process.env.PORT || 5001;
const cors = require("cors");

const app = express();
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("server in running");
});
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/focus-session", focusSessionRoutes);
app.listen(port, () => {
  console.log(`server is running from ${port}`);
});
