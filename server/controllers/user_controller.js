import { getAllUsers, getUserById, createNewUser, updateUserById, deleteUserById } from "../services/user.js";

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
    try {
        const { name, email, password, role, qualification } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name and email are required" });
        }   

        const newUser = await createNewUser({ name, email, password, role, qualification });
        if (!newUser) {
            return res.status(400).json({ message: "Error creating user" });
        }
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
};

// Update User function
const updateUser = async (req, res) => {
    try{
        const {id} = req.params;
        const userData = req.body;
        const updatedUser = await updateUserById(id, userData);
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(updatedUser);
    } catch(error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUserById(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
};

export { getUsers, getUser, createUser, updateUser, deleteUser };