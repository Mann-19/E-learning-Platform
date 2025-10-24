import express from 'express';
import { createComment } from '../controllers/commentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/comments
// @desc    Create a new comment on a post
// @access  Private
router.post('/', protect, createComment);

// Note: Getting comments is handled by getPostById
export default router;
