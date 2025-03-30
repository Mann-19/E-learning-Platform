const express = require("express");
const { getCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require("../controllers/course_controller");

const router = express.Router();

/**
 * @route   GET /api/courses
 * @desc    Fetch all courses
 * @access  Public
 */
router.get("/", getCourses);

/**
 * @route   GET /api/courses/:id
 * @desc    Fetch a course by ID
 * @access  Public
 */
router.get("/:id", getCourseById);

/**
 * @route   POST /api/courses
 * @desc    Create a new course
 * @access  Public
 */
router.post("/", createCourse);

/**
 * @route   PUT /api/courses/:id
 * @desc    Update an existing course
 * @access  Public
 */
router.put("/:id", updateCourse);

/**
 * @route   DELETE /api/courses/:id
 * @desc    Delete a course
 * @access  Public
 */
router.delete("/:id", deleteCourse);

module.exports = router;
