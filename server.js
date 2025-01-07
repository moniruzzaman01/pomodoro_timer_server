require("dotenv").config();
const express = require("express");
const studentRoutes = require("./src/students/route");
const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("server in running");
});
app.use("/api/v1/students", studentRoutes);
app.listen(port, () => {
  console.log(`server is running from ${port}`);
});
