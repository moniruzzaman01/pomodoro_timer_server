require("dotenv").config();
const express = require("express");
const usersRoutes = require("./src/users/route");
const focusSessionRoutes = require("./src/focus_session/route");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5001;
const cors = require("cors");
const authenticateToken = require("./middlewared/jwtMiddleware");

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://pomodoro-timer-client.vercel.app",
    ],
  })
);
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("server in running");
});
app.post("/jwt", (req, res) => {
  const { email } = req.body || {};
  const token = jwt.sign({ email }, process.env.JWT_SECRET);
  res.send({ token });
});
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/focus-session", authenticateToken, focusSessionRoutes);
app.listen(port, () => {
  console.log(`server is running from ${port}`);
});
