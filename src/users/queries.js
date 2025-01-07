const getAllusers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const isEmailExist = "SELECT u FROM users u WHERE u.email = $1";
const insertAUser = "INSERT INTO users (name,email) VALUES ($1, $2)";

module.exports = {
  getAllusers,
  getUserById,
  isEmailExist,
  insertAUser,
};
