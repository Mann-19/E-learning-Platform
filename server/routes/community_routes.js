const express = require("express");
const { getPosts, getPostById, createPost, deletePost } = require("../controllers/community_controller");

const router = express.Router();

/**
 * @route   GET /api/community
 * @desc    Fetch all community posts
 * @access  Public
 */
router.get("/", getPosts);

/**
 * @route   GET /api/community/:id
 * @desc    Fetch a post by ID
 * @access  Public
 */
router.get("/:id", getPostById);

/**
 * @route   POST /api/community
 * @desc    Create a new post
 * @access  Public
 */
router.post("/", createPost);

/**
 * @route   DELETE /api/community/:id
 * @desc    Delete a post
 * @access  Public
 */
router.delete("/:id", deletePost);

module.exports = router;
