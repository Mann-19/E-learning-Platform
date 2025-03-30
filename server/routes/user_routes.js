//dummy code
/* const express = require("express");
const { getUsers, createUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);  // Get all users
router.post("/", createUser); // Create a new user

module.exports = router; */

const express = require("express");
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/user_controller");

const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Fetch all users
 * @access  Public
 */
router.get("/", getUsers);  //fetch all users

/**
 * @route   GET /api/users/:id
 * @desc    Fetch a user by ID
 * @access  Public
 */
router.get("/:id", getUserById);  //fetch specific user

/**
 * @route   POST /api/users
 * @desc    Create a new user
 * @access  Public
 */
router.post("/", createUser);  //create a new user

/**
 * @route   PUT /api/users/:id
 * @desc    Update an existing user
 * @access  Public
 */
router.put("/:id", updateUser);  //update user details

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete a user by ID
 * @access  Public
 */
router.delete("/:id", deleteUser);  //delete a user

module.exports = router;
