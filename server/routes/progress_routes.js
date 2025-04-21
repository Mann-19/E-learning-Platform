import express from "express";
import { getProgress, updateProgress } from "../controllers/progress_controller.js";

const router = express.Router();

/**
 * @route   GET /api/progress/:student_id
 * @desc    Fetch progress for a student
 * @access  Public
 */
router.get("/:student_id", getProgress);

/**
 * @route   PUT /api/progress/:student_id
 * @desc    Update progress for a student
 * @access  Public
 */
router.put("/:student_id", updateProgress);

export default router;
