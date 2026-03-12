import { Router } from "express";
import { getProjects, getProjectById, createProject, deleteProject } from "../controllers/projectController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", protect, createProject);
router.delete("/:id", protect, deleteProject);

export default router;
