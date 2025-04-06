const express = require("express");
const { getCourses, getCourse, createNewCourse, updateCourseDetails, deleteCourseById, updateCourseDetails, deleteCourseById, createNewCourse, getCourse } = require("../controllers/course_controller.js");

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
router.get("/:id", getCourse);

/**
 * @route   POST /api/courses
 * @desc    Create a new course
 * @access  Public
 */
router.post("/", createNewCourse);

/**
 * @route   PUT /api/courses/:id
 * @desc    Update an existing course
 * @access  Public
 */
router.put("/:id", updateCourseDetails);

/**
 * @route   DELETE /api/courses/:id
 * @desc    Delete a course
 * @access  Public
 */
router.delete("/:id", deleteCourseById);

module.exports = router;
