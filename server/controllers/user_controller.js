/* const User = require("../models/User");

// Fetch all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = await User.create({ name, email, password, role });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: "Error creating user" });
    }
};
 */