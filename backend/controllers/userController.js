const userModel = require("../models/userModel");

// Login
exports.login = async (req, res) => {

  try {

    const { username, password } = req.body;

    const user = await userModel.loginUser(
      username,
      password
    );

    if (!user) {

      return res.status(401).json({
        success: false,
        message: "Invalid Username or Password",
      });

    }

    res.json({
      success: true,
      user,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Get All Users
exports.getUsers = async (req, res) => {

  try {

    const users = await userModel.getAllUsers();

    res.json(users);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};