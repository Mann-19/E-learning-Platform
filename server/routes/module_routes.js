const express = require("express");
const { getModules, getModuleById, createModule, updateModule, deleteModule } = require("../controllers/module_controller");

const router = express.Router();

router.get("/", getModules);

router.get("/:id", getModuleById);

router.post("/", createModule);

router.put("/:id", updateModule);

router.delete("/:id", deleteModule);

module.exports = router;
