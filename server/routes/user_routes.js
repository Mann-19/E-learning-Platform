import express from "express"; // Importing express
import { getUser, getUsers, createUser, updateUser, deleteUser } from "../controllers/user_controller.js";

const router = express.Router();

router.get("/", getUsers);  //fetch all users

router.get("/:id", getUser);  //fetch specific user

router.post("/", createUser);  //create a new user

router.put("/:id", updateUser);  //update user details

router.delete("/:id", deleteUser);  //delete a user

export default router;
