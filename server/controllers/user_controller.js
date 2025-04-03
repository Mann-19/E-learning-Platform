import { getAllUsers, getUserById } from "../services/user.js";

// Fetch single user function
const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
}

// Fetch all users function
const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
};

// Create a new user function
const createUser = async (req, res) => {
    res.send("Create user");
};

// Update User function
const updateUser = async (req, res) => {
    res.send("Update user");
};

// Delete User
const deleteUser = async (req, res) => {
    res.send("Delete user");
};

export { getUsers, getUser, createUser, updateUser, deleteUser };