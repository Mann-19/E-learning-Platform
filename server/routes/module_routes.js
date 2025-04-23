import express from 'express';
import { getModules, getModule, createModule, updateModule, deleteModule } from "../controllers/module_controller.js";
const router = express.Router();
import requireAuth from "../middleware/auth.js";
import checkRole from '../middleware/checkRole.js';

router.use(requireAuth);

router.get("/", getModules);

router.get("/:id", getModule);

router.post("/",checkRole(["Mentor"]), createModule);

router.put("/:id",checkRole(["Mentor"]), updateModule);

router.delete("/:id",checkRole(["Mentor"]), deleteModule);

export default router;
