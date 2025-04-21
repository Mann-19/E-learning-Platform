import express from 'express';
import { getModules, getModule, createModule, updateModule, deleteModule } from "../controllers/module_controller.js";
const router = express.Router();
import requireAuth from "../middleware/auth.js";

router.use(requireAuth);

router.get("/", getModules);

router.get("/:id", getModule);

router.post("/", createModule);

router.put("/:id", updateModule);

router.delete("/:id", deleteModule);

export default router;
