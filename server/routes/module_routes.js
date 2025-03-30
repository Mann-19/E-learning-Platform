const express = require("express");
const { getModules, getModuleById, createModule, updateModule, deleteModule } = require("../controllers/module_controller");

const router = express.Router();

/**
 * @route   GET /api/modules
 * @desc    Fetch all modules
 * @access  Public
 */
router.get("/", getModules);

/**
 * @route   GET /api/modules/:id
 * @desc    Fetch a module by ID
 * @access  Public
 */
router.get("/:id", getModuleById);

/**
 * @route   POST /api/modules
 * @desc    Create a new module
 * @access  Public
 */
router.post("/", createModule);

/**
 * @route   PUT /api/modules/:id
 * @desc    Update an existing module
 * @access  Public
 */
router.put("/:id", updateModule);

/**
 * @route   DELETE /api/modules/:id
 * @desc    Delete a module
 * @access  Public
 */
router.delete("/:id", deleteModule);

module.exports = router;
