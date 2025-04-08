import express from 'express';
import { getModules, getModule, createModule, updateModule, deleteModule } from "../controllers/module_controller.js";
const router = express.Router();

router.get("/", getModules);

router.get("/:id", getModule);

router.post("/", createModule);

router.put("/:id", updateModule);

router.delete("/:id", deleteModule);

export default router;
