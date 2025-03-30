const express = require("express");
const { getOrganizations, createOrganization } = require("../controllers/organization_controller");

const router = express.Router();

/**
 * @route   GET /api/organizations
 * @desc    Fetch all organizations
 * @access  Public
 */
router.get("/", getOrganizations);

/**
 * @route   POST /api/organizations
 * @desc    Create a new organization
 * @access  Public
 */
router.post("/", createOrganization);

module.exports = router;
