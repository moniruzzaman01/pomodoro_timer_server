const pool = require("../../postgres");
const usersQueries = require("./queries");

const getUsers = (req, res) => {
  pool.query(usersQueries.getAllusers, (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
const getAUser = (req, res) => {
  const email = req.params.email;
  pool.query(usersQueries.getUserById, [email], (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
const addAUser = (req, res) => {
  const { name, email, image } = req.body;
  // console.log("resss", req.body);
  // if (!name || !email || !image)
  //   return res.send({ message: "provide all required fields" });
  pool.query(usersQueries.isEmailExist, [email], (err, result) => {
    if (err) throw err;
    if (result.rows.length) {
      return res.send({ message: "Email already exist" });
    }
    //adding data if not already stored in table
    pool.query(
      usersQueries.insertAUser,
      [name, email, image],
      (err1, result1) => {
        if (err1) throw err1;
        res
          .status(201)
          // .send(`User created successfully! ${JSON.stringify(result1)}`);
          .send({ message: `User created successfully!` });
      }
    );
  });
};
module.exports = { getUsers, getAUser, addAUser };
