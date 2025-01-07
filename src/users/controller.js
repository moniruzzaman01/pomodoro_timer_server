const pool = require("../../postgres");
const usersQueries = require("./queries");

const getUsers = (req, res) => {
  pool.query(usersQueries.getAllusers, (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
const getAUser = (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  pool.query(usersQueries.getUserById, [id], (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
};
const addAUser = (req, res) => {
  const { name, email } = req.body;
  console.log("body", req.body);
  pool.query(usersQueries.isEmailExist, [email], (err, result) => {
    if (err) throw err;
    if (result.rows.length) {
      return res.send("Email already exist!!!");
    }
    pool.query(usersQueries.insertAUser, [name, email], (err1, result1) => {
      if (err1) throw err1;
      res
        .status(201)
        // .send(`User created successfully! ${JSON.stringify(result1)}`);
        .send(`User created successfully!`);
    });
  });
};
module.exports = { getUsers, getAUser, addAUser };
