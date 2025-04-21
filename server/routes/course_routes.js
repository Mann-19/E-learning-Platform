import express from "express";
import { getCourse, getCourses, createCourse, updateCourse, deleteCourse } from "../controllers/course_controller.js";
import requireAuth from '../middleware/auth.js';

const router = express.Router();

//require auth for all course routes
router.use(requireAuth);

// fetch all courses
router.get("/", getCourses);

// fetch a single course
router.get("/:id", getCourse);

// create a new course
router.post("/", createCourse);

// update an existing course
router.put("/:id", updateCourse);

// delete a course
router.delete("/:id", deleteCourse);

export default router;
