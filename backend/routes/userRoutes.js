const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

// Login
router.post("/login", userController.login);

// Get All Users
router.get("/", userController.getUsers);

// Change Password
router.put("/password", userController.changePassword);

module.exports = router;