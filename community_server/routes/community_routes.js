import express from 'express';
import {
  createCommunity,
  getAllCommunities,
  getCommunityById,
} from '../controllers/communityController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/communities
// @desc    Create a new community
// @access  Private (must be logged in)
router.post('/', protect, createCommunity);

// @route   GET /api/communities
// @desc    Get all communities
// @access  Public
router.get('/', getAllCommunities);

// @route   GET /api/communities/:id
// @desc    Get a single community by ID (with its posts)
// @access  Public
router.get('/:id', getCommunityById);

export default router;
