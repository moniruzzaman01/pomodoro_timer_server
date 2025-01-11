const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) return res.status(401).send({ message: "unauthorised!" });

  jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
    if (err) return res.status(401).send({ message: "unauthorised!" });
    req.verifiedEmail = result.email;
    next();
  });
};

module.exports = authenticateToken;
