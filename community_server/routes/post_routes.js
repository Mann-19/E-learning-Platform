import express from 'express';
import {
  createPost,
  getPostById,
} from '../controllers/postController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/posts
// @desc    Create a new post in a community
// @access  Private
router.post('/', protect, createPost);

// @route   GET /api/posts/:id
// @desc    Get a single post by ID (with its comments)
// @access  Public
router.get('/:id', getPostById);

export default router;
