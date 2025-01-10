const getAllusers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE email = $1";
const isEmailExist = "SELECT u FROM users u WHERE u.email = $1";
const insertAUser = "INSERT INTO users (name,email,image) VALUES ($1, $2, $3)";

module.exports = {
  getAllusers,
  getUserById,
  isEmailExist,
  insertAUser,
};
