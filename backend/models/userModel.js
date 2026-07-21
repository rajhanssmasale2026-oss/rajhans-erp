const pool = require("../db");

// Login User
exports.loginUser = async (username, password) => {

  const result = await pool.query(
    `
    SELECT *
    FROM users
    WHERE username = $1
      AND password = $2
    `,
    [username, password]
  );

  return result.rows[0];

};

// Get All Users
exports.getAllUsers = async () => {

  const result = await pool.query(
    `
    SELECT
      id,
      username,
      role,
      created_at
    FROM users
    ORDER BY id ASC
    `
  );

  return result.rows;

};