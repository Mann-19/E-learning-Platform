import express from "express";
import { getCourse, getCourses, createCourse, updateCourse, deleteCourse } from "../controllers/course_controller.js";

const router = express.Router();

router.get("/", getCourses);

router.get("/:id", getCourse);

router.post("/", createCourse);

router.put("/:id", updateCourse);

router.delete("/:id", deleteCourse);

export default router;
